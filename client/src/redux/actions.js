import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";

export const getPokemons = (name = '', currentPage, orderBy, sortBy, created, type) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons?name=${name}&pageNumber=${currentPage}&orderBy=${orderBy}&sortBy=${sortBy}&created=${created}&type=${type}`);
        const pokemons = apiData.data;
        dispatch({ type: GET_POKEMONS, payload: pokemons });
    };
};

export const getTypes = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/types`);
        const types = apiData.data;
        dispatch({ type: GET_TYPES, payload: types });
    };
};

