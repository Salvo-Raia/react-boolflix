import { useSearch } from "../contexts/SearchContext";
import "flag-icons/css/flag-icons.min.css";

const languages = {
  en: <span class="fi fi-gb"></span>,
  it: <span class="fi fi-it"></span>,
  ja: <span class="fi fi-jp"></span>,
};

function languageToFlag(languageId) {
  return languages[languageId] || "Info non disponibile";
}

export default function HomePage() {
  const { movieList, tvSeriesList } = useSearch();

  return (
    <div className="container">
      <h2>Film</h2>
      <div className="row row-cols-4 g-2 my-5">
        {movieList.map((movie) => (
          <div key={movie.id} className="col">
            <div className="movie-card border p-3">
              <h3>{movie.title}</h3>
              <h4 className="text-muted">{movie.original_title}</h4>
              <p>Lingua originale: {languageToFlag(movie.original_language)}</p>
              <p>Voto: {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
      <h2>Serie TV </h2>
      <div className="row row-cols-4 my-5">
        {tvSeriesList.map((tv) => (
          <div key={tv.id} className="col">
            <div className="movie-card border p-3">
              <h3>{tv.name}</h3>
              <h4 className="fs-8 text-muted">{tv.original_name}</h4>
              <p>{tv.original_language}</p>
              <p>Voto: {tv.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
