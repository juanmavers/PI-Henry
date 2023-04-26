import Card from "../Card/Card"
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";



const CardsContainer = () => {

    const { pokemons } = useSelector((state) => state);

    return (
        <>
            <div className={style.container}>

                {pokemons.items.map(pokemon => {
                    return <Card
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                })}
            </div>
        </>
    )
}

export default CardsContainer;