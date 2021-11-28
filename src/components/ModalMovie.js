import { useEffect, useState } from "react";
import image from "../assets/image-not-found.png";

const ModalMovie = ({ movieSelectedId }) => {
  const [movieSelectedInfo, setMovieSelectedInfo] = useState({});

  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieSelectedId}?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES`)
      .then((response) => response.json())
      .then((data) => setMovieSelectedInfo(data));
  }, [movieSelectedId]);

  console.log(movieSelectedInfo);
  /* 
  En el genero si pongo esto {movieSelectedInfo.genres.map((genre) => genre.name + " ")} me funciona si el modal ya está abierto pero si está el modal cerrado y lo abro me falla con el error de que no puede hacer el map de algo undefined (movieSelectedInfo.genres). Seguramente es tema de los renderizados
  <p>Genero: {movieSelectedInfo.genres.map((genre) => genre.name + " ")}</p>
  */

  return (
    <div className="modalMovie">
      <div className="modalImg">
        <img src={movieSelectedInfo.poster_path ? POSTER_PATH + movieSelectedInfo.poster_path : image} alt="película" />
      </div>
      <div className="modalInfoContainer">
        <div className="modalCloseButton">X</div>
        <div className="modalInfo">
          <p>Título: {movieSelectedInfo.title}</p>
          <p>Estreno: {movieSelectedInfo.release_date}</p>
          <p>Sinopsis: {movieSelectedInfo.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ModalMovie;
