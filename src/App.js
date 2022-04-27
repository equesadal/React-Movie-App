import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Movies from './components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState(
    []
  );

  const [searchValue, setSearchValue] = useState('');

  const request = async (searchValue) => {
    const endPointOmdb = `http://www.omdbapi.com/?s=${searchValue}&apikey=d033856a`;
    const response = await fetch(endPointOmdb);
    const jsonResponse = await response.json();

    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
    }
  };

  useEffect(
    () => {request(searchValue);}, [searchValue]
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <Header label="This is the amazing movie finder!"></Header>
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
      <div className="row">
        <Movies movies={movies}></Movies>
      </div>  
    </div>
  );
}

export default App;
