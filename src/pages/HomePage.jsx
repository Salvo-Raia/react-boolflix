import { useSearch } from "../contexts/SearchContext";
import MediaCard from "../components/MediaCard";
import "flag-icons/css/flag-icons.min.css";

export default function HomePage() {
  const {
    movieList,
    tvSeriesList,
    movieGenresList,
    tvGenresList,
    languageToFlag,
    rateConversion,
  } = useSearch();

  return movieList && movieList.length > 0 ? (
    <div className="container">
      <section className="Film my-4">
        <h2>Film</h2>
        <div className="row row-cols-4 g-2">
          {movieList.map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              media="movie"
              genresIds={movie.genre_ids}
              genresList={movieGenresList}
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
              id={tvSeries.id}
              media="tv"
              genresIds={tvSeries.genre_ids}
              genresList={tvGenresList}
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
  ) : (
    <div className="container text-center text-white my-3 ">
      <h3 className="h2">Cerca nel nostro catalogo</h3>
    </div>
  );
}
