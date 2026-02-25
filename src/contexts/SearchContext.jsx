import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//Base API URL//
const BASE_API_URL = "https://api.themoviedb.org/3/search/";
const BASE_CAST_API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8b9baf966f3d0d2de6f7bc2cc9417531";
const languages = {
  en: <span className="fi fi-gb"></span>,
  it: <span className="fi fi-it"></span>,
  ja: <span className="fi fi-jp"></span>,
};

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [tvSeriesList, setTvSeriesList] = useState([]);
  const [movieGenresList, setMovieGenresList] = useState([]);
  const [tvGenresList, setTvGenresList] = useState([]);

  // Fetch film
  const fetchMovies = () => {
    //Movie API URL //
    const movieApiURL = new URL(BASE_API_URL + "movie");
    movieApiURL.searchParams.set("api_key", API_KEY);
    movieApiURL.searchParams.set("query", query);
    movieApiURL.searchParams.set("language", "it-IT");
    axios.get(movieApiURL).then((res) => {
      console.log(res.data, res.data.results);
      setMovieList(res.data.results);
    });
  };

  // Fetch Serie TV
  const fetchTvSeries = () => {
    //TV Series API URL
    const tvApiURL = new URL(BASE_API_URL + "tv");
    tvApiURL.searchParams.set("api_key", API_KEY);
    tvApiURL.searchParams.set("query", query);
    tvApiURL.searchParams.set("language", "it-IT");
    axios.get(tvApiURL).then((res) => {
      console.log(res.data.results);
      setTvSeriesList(res.data.results);
    });
  };

  // Controllo Submit
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
    fetchTvSeries();
    setQuery("");
  };

  // Fetch generi film
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

  // Fetch generi Serie TV
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

  // Conversione linguaggio-bandiera
  function languageToFlag(languageId) {
    return languages[languageId] || "informazione non disponibile";
  }

  // Conversione voto-stelline
  function rateConversion(rate) {
    let fixedRate = Math.round(rate / 2);
    return "⭐".repeat(fixedRate);
  }

  useEffect(() => {
    (fetchMovieGenre(), fetchTvGenre());
  }, []);

  const contextValue = {
    query,
    setQuery,
    fetchMovies,
    fetchTvSeries,
    handleSearch,
    movieList,
    setMovieList,
    tvSeriesList,
    setTvSeriesList,
    movieGenresList,
    setMovieGenresList,
    tvGenresList,
    setTvGenresList,
    languageToFlag,
    rateConversion,
  };
  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  return useContext(SearchContext);
}

export { SearchProvider, useSearch };
