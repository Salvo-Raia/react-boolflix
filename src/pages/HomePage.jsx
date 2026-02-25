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
      <section className="Film my-4">
        <h2>Film</h2>
        <div className="row row-cols-4 g-2">
          {movieList.map((movie) => (
            <MediaCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              originalTitle={movie.original_title}
              date={movie.release_date}
              originalLanguage={movie.original_language}
              vote={movie.vote_average}
              overview={movie.overview}
              language={movie.original_language}
              languageToFlag={languageToFlag}
              rateConversion={rateConversion}
            />
          ))}
        </div>
      </section>

      <section className="TV-Series my-4">
        <h2>Serie TV </h2>
        <div className="row row-cols-4 g-2">
          {tvSeriesList.map((tvSeries) => (
            <MediaCard
              key={tvSeries.id}
              posterPath={tvSeries.poster_path}
              title={tvSeries.name}
              originalTitle={tvSeries.original_name}
              date={tvSeries.first_air_date}
              originalLanguage={tvSeries.original_language}
              vote={tvSeries.vote_average}
              overview={tvSeries.overview}
              language={tvSeries.original_language}
              languageToFlag={languageToFlag}
              rateConversion={rateConversion}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
