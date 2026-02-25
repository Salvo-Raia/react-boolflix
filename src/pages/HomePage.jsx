import { useSearch } from "../contexts/SearchContext";
import "flag-icons/css/flag-icons.min.css";
import MediaCard from "../components/MediaCard";

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

  function rateConversion(rate) {
    let fixedRate = Math.round(rate / 2);
    return "⭐".repeat(fixedRate);
  }

  return (
    <div className="container">
      <h2>Film</h2>
      <div className="row row-cols-4 g-2 my-5">
        {movieList.map((movie) => (
          <MediaCard
            key={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            originalTitle={movie.original_title}
            originalLanguage={movie.originalLanguage}
            vote={movie.vote_average}
            language={movie.original_language}
            languageToFlag={languageToFlag}
            rateConversion={rateConversion}
          />
        ))}
      </div>
      <h2>Serie TV </h2>
      <div className="row row-cols-4 g-2 my-5">
        {tvSeriesList.map((tvSeries) => (
          <MediaCard
            key={tvSeries.id}
            posterPath={tvSeries.poster_path}
            title={tvSeries.name}
            originalTitle={tvSeries.original_name}
            originalLanguage={tvSeries.originalLanguage}
            vote={tvSeries.vote_average}
            language={tvSeries.original_language}
            languageToFlag={languageToFlag}
            rateConversion={rateConversion}
          />
        ))}
      </div>
    </div>
  );
}
