import style from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={style.card}>
            <p>Name:{props.name}</p>
            <p>Url:{props.url}</p>
        </div>
    )
}

export default Card;