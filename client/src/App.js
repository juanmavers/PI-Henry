  // import axios from 'axios';
  import React from 'react';
  import { useState } from 'react';
  import { Route, useLocation } from 'react-router-dom';
  import { Home, Landing, Detail, Form } from "./views";
  import { Nav, PokemonList } from './components';
  import style from "./App.module.css";


  function App() {
    const location = useLocation();
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [currentPageUrl, setCurrentPageUrl] = useState("http://localhost:3001/pokemons");
    // const [nextPageUrl, setNextPageUrl] = useState(1);
    // const [prevPageUrl, setPrevPageUrl] = useState(12);
    // const [error, setError] = useState(null);
    
    // useEffect(() => {
    //   setLoading(true);
    //   setError(null);
    //   let cancel;
    //   axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) }).then(res => {

    //     setLoading(false);
    //     setNextPageUrl(res.data.next);
    //     setPrevPageUrl(res.data.previous);
    //     setPokemon(res.data.map(p => p.name))
    //   }).catch(error => {
    //     setLoading(false);
    //     setError(error);
    //   });

    //   return () => cancel();
    // }, [currentPageUrl]);

    // function goToNextPage() {
    //   setCurrentPageUrl(nextPageUrl);
    // }
    // function goToPrevPage() {
    //   setCurrentPageUrl(prevPageUrl);
    // }

    




    return (
      <div>
        {location.pathname !== "/" && <Nav />}
        {/* <Routes> */}
          <Route path="/pokemons">
            <PokemonList pokemon={pokemon} />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/create" component={Form} />
          <Route path="/home" render={() => (
            <div>
              <Home />
            </div>
          )} />
        {/* </Routes> */}
      </div>
    );
  };

  export default App;
