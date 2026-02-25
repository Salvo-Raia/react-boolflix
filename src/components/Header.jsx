import axios from "axios";
import { useState } from "react";
import { useSearch } from "../contexts/SearchContext";

//Base API URL//
const BASE_API_URL = "https://api.themoviedb.org/3/search/";
const API_KEY = "8b9baf966f3d0d2de6f7bc2cc9417531";

export default function Header() {
  const [query, setQuery] = useState("");
  const { setMovieList, setTvSeriesList } = useSearch();

  //Movie API URL //
  const movieApiURL = new URL(BASE_API_URL + "movie");
  movieApiURL.searchParams.set("api_key", API_KEY);
  movieApiURL.searchParams.set("query", query);
  movieApiURL.searchParams.set("language", "it-IT");
  //TV Series API URL //
  const tvApiURL = new URL(BASE_API_URL + "tv");
  tvApiURL.searchParams.set("api_key", API_KEY);
  tvApiURL.searchParams.set("query", query);
  tvApiURL.searchParams.set("language", "it-IT");

  // Fetch film e serie tv
  const fetchMovies = () => {
    axios.get(movieApiURL).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  const fetchTvSeries = () => {
    axios.get(tvApiURL).then((res) => {
      console.log(res.data.results);
      setTvSeriesList(res.data.results);
    });
  };

  //Controllo Submit//
  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
    fetchTvSeries();
  };

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <h1 className="text-danger">BoolFlix</h1>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Cerca"
            aria-label="Cerca"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-danger">Search</button>
        </form>
      </div>
    </nav>
  );
}
