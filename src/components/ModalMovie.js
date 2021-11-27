import { useEffect, useState } from "react";

const ModalMovie = ({ movieSelectedId }) => {
  const [movieSelectedInfo, setMovieSelectedInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieSelectedId}?api_key=73b7f93676cf548e83b720fd7de7b73b&language=es-ES`)
      .then((response) => response.json())
      .then((data) => setMovieSelectedInfo(data));
  }, [movieSelectedId]);

  console.log(movieSelectedInfo);
  /* 
  En el genero si pongo esto {movieSelectedInfo.genres.map((genre) => genre.name + " ")} me funciona si el modal ya está abierto pero si está el modal cerrado y lo abro me falla con el error de que no puede hacer el map de algo undefined (movieSelectedInfo.genres). Seguramente es tema de los renderizados
  */

  return (
    <div className="modalMovie">
      <div>
        <img src="" alt="película" />
      </div>
      <div>
        <p>Título: {movieSelectedInfo.title}</p>
        <p>Estreno: {movieSelectedInfo.release_date}</p>
        <p>Genero: </p>
        <p>Sinopsis: {movieSelectedInfo.overview}</p>
      </div>
    </div>
  );
};

export default ModalMovie;
