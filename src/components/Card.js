const Card = ({ data }) => {
  //console.log(data);
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="card">
      <img src={POSTER_PATH + data.poster_path} alt="portada" />
      <div class="movieDetails">
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Card;
