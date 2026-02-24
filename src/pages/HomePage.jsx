import { useSearch } from "../contexts/SearchContext";
import "flag-icons/css/flag-icons.min.css";

const posterBaseUrl = "https://image.tmdb.org/t/p/300";
const languages = {
  en: <span className="fi fi-gb"></span>,
  it: <span className="fi fi-it"></span>,
  ja: <span className="fi fi-jp"></span>,
};

export default function HomePage() {
  const { movieList, tvSeriesList } = useSearch();

  function languageToFlag(languageId) {
    return languages[languageId] || "Info non disponibile";
  }

  return (
    <div className="container">
      <h2>Film</h2>
      <div className="row row-cols-4 g-2 my-5">
        {movieList.map((movie) => (
          <div key={movie.id} className="col">
            <div
              className="movie-card border p-3"
              style={{
                backgroundImage: `url(${
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                    : "https://via.placeholder.com/300x450?text=No+Image"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{movie.title}</h3>
              <h4 className="text-muted">{movie.original_title}</h4>
              <p>Lingua originale: {languageToFlag(movie.original_language)}</p>
              <p>Voto: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Serie TV </h2>
      <div className="row row-cols-4 g-2 my-5">
        {tvSeriesList.map((tv) => (
          <div key={tv.id} className="col">
            <div
              className="movie-card border p-3"
              className="movie-card border p-3"
              style={{
                backgroundImage: `url(${
                  tv.poster_path
                    ? "https://image.tmdb.org/t/p/w300" + tv.poster_path
                    : "https://via.placeholder.com/300x450?text=No+Image"
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3>{tv.name}</h3>
              <h4 className="fs-8 text-muted">{tv.original_name}</h4>
              <p>{languageToFlag(tv.original_language)}</p>
              <p>Voto: {tv.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
