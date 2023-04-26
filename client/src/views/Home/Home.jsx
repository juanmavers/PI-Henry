import { useDispatch, useSelector } from "react-redux";
import { CardsContainer, Pagination, Filters } from "../../components/index";
import { useEffect } from "react";
import { getPokemons, getTypes } from "../../redux/actions";
import { useState } from "react";
import style from "./Home.module.css"

const Home = () => {
    const dispatch = useDispatch();
    const { pokemons, types } = useSelector(state => state);
    const [currentPage, setCurrentPage] = useState(0);
    const [orderBy, setOrderBy] = useState("name");
    const [sortBy, setSortBy] = useState("ASC");
    const [created, setCreated] = useState("all");
    const [type, setType] = useState("all");

    let name = (new URLSearchParams(window.location.search)).get("name")

    useEffect(() => {
        dispatch(getTypes());
    }, [])

    useEffect(() => {
        dispatch(getPokemons(name ?? '', currentPage, orderBy, sortBy, created, type));
    }, [name, currentPage, orderBy, sortBy, created, type]);

    return (
        <div className={style.body}>
            <Filters
                orderBy={orderBy}
                onOrderByChange={(newOrderBy) => setOrderBy(newOrderBy)}
                sortBy={sortBy}
                onSortByChange={(newSortBy) => setSortBy(newSortBy)}
                created={created}
                onCreatedChange={(newCreated) => setCreated(newCreated)}
                types={types}
                type={type}
                onTypeChange={(newType) => setType(newType)}
            />
            <CardsContainer pokemon={pokemons.items} />
            <Pagination
                goToPrevPage={() => setCurrentPage(currentPage - 1)}
                goToNextPage={() => setCurrentPage(currentPage + 1)}
                currentPage={currentPage}
                lastPage={pokemons.totalPages}
            />
        </div>
    )
}

export default Home;