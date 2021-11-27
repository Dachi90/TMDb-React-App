import image from "../assets/image-not-found.png";

const Card = ({ data, handleClick }) => {
  //console.log(data);
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";

  const handleMovie = () => {
    //console.log(data.id);
    const movieId = data.id;
    handleClick(movieId);
  };

  return (
    <div className="card" onClick={handleMovie}>
      <img src={data.poster_path ? POSTER_PATH + data.poster_path : image} alt="portada" className="poster" />
      <div className="movieDetails">
        <p>{data.title}</p>
        <p className="voteAverage" style={{ color: data.vote_average > 7 ? "#0B610B" : data.vote_average > 5 ? "#DF7401" : "#DF0101" }}>
          {data.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Card;
