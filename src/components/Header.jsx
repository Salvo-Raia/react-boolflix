import { useSearch } from "../contexts/SearchContext";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { handleSearch, query, setQuery } = useSearch();

  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <NavLink className="text-decoration-none">
          <h1 className="text-danger">BoolFlix</h1>
        </NavLink>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Inserisci un titolo..."
            aria-label="Inserisci un titolo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-danger">Cerca</button>
        </form>
      </div>
    </nav>
  );
}
