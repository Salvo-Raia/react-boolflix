import { useEffect, useState } from "react";
import { useSearch } from "../contexts/SearchContext";
import axios from "axios";
import MediaCard from "../components/MediaCard";
import "flag-icons/css/flag-icons.min.css";

const BASE_CAST_API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8b9baf966f3d0d2de6f7bc2cc9417531";

const posterBaseUrl = "https://image.tmdb.org/t/p/300";
const languages = {
  en: <span className="fi fi-gb"></span>,
  it: <span className="fi fi-it"></span>,
  ja: <span className="fi fi-jp"></span>,
};

export default function HomePage() {
  const { movieList, tvSeriesList } = useSearch();
  const [movieGenresList, setMovieGenresList] = useState([]);
  const [tvGenresList, setTvGenresList] = useState([]);

  const fetchMovieGenre = () => {
    axios
      .get(`${BASE_CAST_API_URL}genre/movie/list`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data.genres);
        setMovieGenresList(res.data.genres);
      });
  };

  const fetchTvGenre = () => {
    axios
      .get(`${BASE_CAST_API_URL}genre/tv/list`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {
        console.log(res.data.genres);
        setTvGenresList(res.data.genres);
      });
  };

  useEffect(() => {
    (fetchMovieGenre(), fetchTvGenre());
  }, []);

  function languageToFlag(languageId) {
    return languages[languageId] || "informazione non disponibile";
  }

  function rateConversion(rate) {
    let fixedRate = Math.round(rate / 2);
    return "⭐".repeat(fixedRate);
  }
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
