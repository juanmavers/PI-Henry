import { useDispatch } from "react-redux";
import { CardsContainer, Pagination } from "../../components/index";
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
            <div>
                <Pagination></Pagination>
            </div>
        </>
    )
}

export default Home;