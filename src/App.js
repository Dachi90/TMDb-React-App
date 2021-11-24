import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [movies, setMovies] = useState([]);

  const TRENDING_URL = "https://api.themoviedb.org/3/trending/all/week?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES";

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

  return (
    <div className="appDiv">
      <header className="header">
        <div className="logoTitulo">
          <img src="" alt="logo" className="logo" />
          <span>título</span>
        </div>
        <form className="form">
          <input type="search" name="search" id="search" className="inputForm" />
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
