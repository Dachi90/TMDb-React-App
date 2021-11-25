import { useEffect, useState } from "react";
import Card from "./components/Card";
import logo from "./assets/logo.svg";

const App = () => {
  const [movies, setMovies] = useState([]);

  const TRENDING_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES";
  const SEARCH_URL = "https://api.themoviedb.org/3/search/multi?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES&query=";

  const apiFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    apiFetch(TRENDING_URL);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userSearchInput = document.getElementById("search").value.trim().toLowerCase();
    console.log(userSearchInput);

    console.log(SEARCH_URL + userSearchInput);
    if (!userSearchInput) {
      return;
    }
    apiFetch(SEARCH_URL + userSearchInput);
  };

  return (
    <div className="appDiv">
      <header className="header">
        <div className="logoContainer">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="search" name="search" id="search" className="inputForm" />
          <button type="submit">Buscar</button>
        </form>
      </header>
      <main className="mainContent">
        {movies.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </main>
    </div>
  );
};

export default App;
