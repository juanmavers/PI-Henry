import React from "react";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";


const Nav = () => {
    

    return (
        <div className={style.mainContainer}>
            <Link to="/home"><h2>HOME</h2></Link>
            <SearchBar />
            <Link to="/create"><h2>CREATE POKEMON</h2></Link>
        </div>
    )
}

export default Nav;