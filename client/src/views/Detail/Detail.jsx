import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css"; 

const Detail = () => {
    const history = useHistory();
    const { id } = useParams();

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(false);

    const [shy, setShy] = useState(false);

    const handleClick = () => {
        history.goBack();
    }

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:3001/pokemons/${id}`;

        axios(url)
            .then((response) => {
                setPokemon(response.data);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>
            <h2>Loading...</h2>
        </div>
    }

    return (
        <div className={style.detail}>
            {pokemon ? (
                <>
                    <h2 className={style.h2}>{pokemon.name}</h2>
                    <img height={250} width={250} src={shy ? pokemon.backImage : pokemon.image} alt="img" />
                    <p className={style.p}>Life: {pokemon.life}</p>
                    <p className={style.p}>Attack: {pokemon.attack}</p>
                    <p className={style.p}>Defense: {pokemon.defense}</p>
                    <p className={style.p}>Speed: {pokemon.speed}</p>
                    <p className={style.p}>Weight: {pokemon.weight}</p>
                    <p className={style.p}>Height: {pokemon.height}</p>
                </>
            ) : (
                <h2 h2 className={style.h2}>Pokemon not found</h2>
            )}
            {pokemon && <button
                className={style.button}
                onClick={() => setShy(!shy)}>
                {shy ? 'Shy mode: ON' : 'Shy mode: OFF'}
            </button>}
            <button
                className={style.button}
                onClick={handleClick}>
                Back
            </button>
        </div>
    )
}

export default Detail;