import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="/home">HOME</Link>
            <Link to="/create">CREATE POKEMON</Link>
        </div>
    )
}

export default Nav;