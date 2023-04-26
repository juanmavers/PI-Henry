import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./SearchBar.module.css";

export default function SearchBar() {
   const [pokemonName, setPokemonName] = useState("");

   const history = useHistory();

   const handleChange = (event) => {
      setPokemonName(event.target.value);
   };

   const onSearch = () => {
      history.push(`/home?name=${pokemonName}`);
   };

   return (
      <div className={style.bar}>
         <input
            type="search"
            className={style.searchInput}
            onChange={handleChange}
         />
         <button
            className={style.searchButton}
            onClick={() => {
               if (pokemonName?.length > 0) {
                  onSearch();
               }
            }}
         >
            ← Buscar
         </button>
      </div>
   );
}
