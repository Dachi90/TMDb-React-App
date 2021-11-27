import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import ModalMovie from "./components/ModalMovie";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [movieSelectedId, setMovieSlectedId] = useState("");

  const TRENDING_URL = "https://api.themoviedb.org/3/trending/movie/week?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES";
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES&query=";

  const apiFetch = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.results);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    apiFetch(TRENDING_URL);
  }, []);

  const goHome = () => {
    apiFetch(TRENDING_URL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userSearchInput = document.getElementById("search").value.trim().toLowerCase();
    //console.log(userSearchInput);

    console.log(SEARCH_URL + userSearchInput);
    if (!userSearchInput) {
      return;
    }
    apiFetch(SEARCH_URL + userSearchInput);
  };

  const handleClick = (id) => {
    //console.log(id);
    setMovieSlectedId(id);
    setModalActive(true);
  };

  return (
    <div className="appDiv">
      <Header handleSubmit={handleSubmit} goHome={goHome} />
      <main className="mainContent">
        {movies.map((movie) => (
          <Card key={movie.id} data={movie} handleClick={handleClick} />
        ))}
        {modalActive && <ModalMovie movieSelectedId={movieSelectedId} />}
      </main>
    </div>
  );
};

export default App;
