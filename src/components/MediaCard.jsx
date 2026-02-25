import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const BASE_CAST_API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "8b9baf966f3d0d2de6f7bc2cc9417531";

export default function MediaCard({
  title,
  id,
  media,
  genresIds,
  genresList,
  originalTitle,
  date,
  originalLanguage,
  vote,
  overview,
  languageToFlag,
  rateConversion,
  posterPath,
}) {
  const [movieCast, setMovieCast] = useState([]);
  const [tvCast, setTvCast] = useState([]);
  const [hovering, setHovering] = useState(false);
  const showCast = media === "movie" ? movieCast : tvCast;

  // Fetch cast film
  const fetchMovieCast = () => {
    axios
      .get(`${BASE_CAST_API_URL}movie/${id}/credits`, {
        params: { api_key: API_KEY },
      })
      .then((res) => {
        if (res.data.cast && res.data.cast.length > 0) {
          const moviePerformers = res.data.cast
            .slice(0, 5)
            .map((performer) => performer.name);
          setMovieCast(moviePerformers);
        } else {
          setMovieCast(["Informazioni sul cast non disponibili"]);
        }
      })
      .catch((err) => {
        console.error("Errore nel fetch del cast:", err);
      });
  };

  // Fetch cast serie TV
  const fetchTVCast = () => {
    axios
      .get(`${BASE_CAST_API_URL}tv/${id}/aggregate_credits`, {
        params: {
          api_key: API_KEY,
        },
      })
      .then((res) => {
        if (res.data.cast && res.data.cast.length > 0) {
          console.log(
            res.data.cast.slice(0, 5).map((performer) => performer.name),
          );
          const performers = res.data.cast
            .slice(0, 5)
            .map((performer) => performer.name);
          setTvCast(performers);
        } else {
          setTvCast(["Informazioni sul cast non disponibili"]);
        }
      })
      .catch((err) => {
        console.error("Informazioni non disponibili:", err);
      });
  };

  useEffect(() => {
    if (media === "movie") {
      fetchMovieCast();
    }

    if (media === "tv") {
      fetchTVCast();
    }
  }, []);

  return (
    <div
      className="col"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="card"
        style={{
          backgroundImage: `url(${
            posterPath
              ? "https://image.tmdb.org/t/p/w300" + posterPath
              : "src/assets/img/no-img-placeholder.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {hovering && (
          <div className="card-info p-3">
            <h3 className="h2">{title}</h3>
            <h4 className="h5">{originalTitle}</h4>
            <p className="text-small">{date}</p>
            <p>
              <b>Lingua originale:</b> {languageToFlag(originalLanguage)}
            </p>
            <p>
              <b>Genere: </b>
              {genresIds.length > 0
                ? genresIds
                    .map(
                      (id) => genresList.find((genre) => genre.id === id)?.name,
                    )
                    .join(", ")
                : "informazione non disponibile"}
            </p>
            <p>
              {vote ? (
                <b>Voto: {rateConversion(vote)}</b>
              ) : (
                <i>Voto: nessuna valutazione</i>
              )}
            </p>
            <p>
              <b>Con:</b> <i>{showCast.join(", ")}</i>
            </p>
            <p>
              {overview ? overview : <i>Nessuna descrizione disponibile</i>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
