import { Link } from "react-router-dom";




const Landing = () => {

    return (
        <div className="App">
                
            <h1>Pokémon</h1>
            <Link to="/home">
                <button>GO</button>
            </Link>
        </div>
    )
}

export default Landing;