import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";

const Detail = () => {
    const { detailId } = useParams();
    const [pokemon, setPokemon] = useState({});
    const history = useHistory();

    const handleClick = () => {
        history.goBack();
    }

    useEffect(() => {

        const URL_BASE = "http://localhost:3001";

        axios(`${URL_BASE}/pokemon/${detailId}`)
            .then((response) => setPokemon(response.data));
    }, [detailId]);
    return (
        <div>
            {pokemon.name ? (
                <>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt="img" />
                    <p>Hp: {pokemon.life}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
                    <p>Speed: {pokemon.speed}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Height: {pokemon.height}</p>
                </>
            ) : (
                <h2>Loading...</h2>
            )}
            <button
                className={style.searchButton}
                onClick={handleClick}>
                Back
            </button>
        </div>
    )
}

export default Detail;