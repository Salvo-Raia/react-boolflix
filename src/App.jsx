import { SearchProvider } from "./contexts/SearchContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchProvider>
  );
}
