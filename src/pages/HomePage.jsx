import { useSearch } from "../contexts/SearchContext";

export default function HomePage() {
  const { movieList, tvSeriesList } = useSearch();

  return (
    <div className="container">
      <h2>Film</h2>
      <div className="row row-cols-4 g-2 my-5">
        {movieList.map((movie) => (
          <div key={movie.id} className="col">
            <div className="movie-card">
              <h3>{movie.title}</h3>
              <h4>{movie.original_title}</h4>
              <p>{movie.original_language}</p>
              <p>{movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Serie TV</h2>
      <div className="row row-cols-4 my-5">
        {tvSeriesList.map((tv) => (
          <div key={tv.id} className="col">
            <div className="movie-card">
              <h3>{tv.name}</h3>
              <h4>{tv.original_name}</h4>
              <p>{tv.original_language}</p>
              <p>{tv.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
