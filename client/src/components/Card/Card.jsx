import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({pokemon}) => {
    console.log(pokemon);
    return (
        <div className={style.card}>
            <Link to={`/detail/${pokemon.id}`}>
            <h4 className={style.h4}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
            </Link>
            <img height={120} width={120} src={pokemon.image}></img>
            {pokemon && pokemon.types.map(type => 
            <span>
                {type.name}
            </span>)}
        </div>
    )
}

export default Card;