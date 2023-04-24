import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Home, Landing, Detail, Form } from "./views";
import { Nav, PokemonList, Pagination } from './components';


function App() {
  const location = useLocation();
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("http://localhost:3001/pokemons");
  const [nextPageUrl, setNextPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [prevPageUrl, setPrevPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, { cancelToken: new axios.CancelToken(c => cancel = c) }).then(res => {

      setLoading(false);
      setNextPageUrl(res.data.next);
      setPrevPageUrl(res.data.previous);
      setPokemon(res.data.map(p => p.name))
    });

    return () => cancel();
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  if (loading) return "Loading..."


  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Route path="/pokemons">
        <PokemonList pokemon={pokemon} />
      </Route>
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/create" component={Form} />
      <Route path="/home" render={() => <Home />}>

      </Route>
    </div>
  );
};

export default App;
