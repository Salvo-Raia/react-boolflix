import { useSearch } from "../contexts/SearchContext";
//Base API URL//
const BASE_API_URL = "https://api.themoviedb.org/3/search/";
const API_KEY = "8b9baf966f3d0d2de6f7bc2cc9417531";
//Movie API URL //
const movieApiURL = new URL(BASE_API_URL + "movie");
movieApiURL.searchParams.set("api_key", API_KEY);
movieApiURL.searchParams.set("query", "velluto");
movieApiURL.searchParams.set("language", "it-IT");
//TV Series API URL //
const tvApiURL = new URL(BASE_API_URL + "tv");
tvApiURL.searchParams.set("api_key", API_KEY);
tvApiURL.searchParams.set("query", "preacher");
tvApiURL.searchParams.set("language", "it-IT");

export default function Header() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand">Navbar</a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success">Search</button>
        </form>
      </div>
    </nav>
  );
}
