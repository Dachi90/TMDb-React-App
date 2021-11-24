const Card = ({ data }) => {
  //console.log(data);
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <img src={POSTER_PATH + data.poster_path} alt="portada" />
      <div className="movieDetails">
        <p>{data.title ? data.title : data.name}</p>
        <p>{data.vote_average}</p>
      </div>
    </div>
  );
};

export default Card;
