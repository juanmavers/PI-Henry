import React from 'react';
import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   const [pokemonName, setPokemonName] = useState("");
   const handleChange = (event) => {
      setPokemonName(event.target.value);
   }
   return (
      <div className={style.bar}>
         <input
            type='search'
            className={style.searchInput}
            onChange={handleChange}
         />
         <button className={style.searchButton} onClick={() => onSearch(pokemonName)}>
               ← Agregar
         </button>
      </div>
   );
}
