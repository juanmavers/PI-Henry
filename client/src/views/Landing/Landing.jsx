import { Link } from "react-router-dom";



const Landing = () => {

    return (
        <div className="App">
            <h1>Esta es la vista de Landing</h1>
            <Link to="/home">
                <button>GO</button>
            </Link>
        </div>
    )
}

export default Landing;