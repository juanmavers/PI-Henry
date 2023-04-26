import { Link } from "react-router-dom";
import style from "./Landing.module.css"



const Landing = () => {

    return (
        <div className={style.body}>
                
            <h1>GOTTA CATCH EM' ALL!</h1>
            <Link to="/home">
                <button className={style.button}>GO</button>
            </Link>
        </div>
    )
}

export default Landing;