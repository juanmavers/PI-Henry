import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions";

const Home = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch])

    return (
        <>
            <CardsContainer />
        </>
    )
}

export default Home;