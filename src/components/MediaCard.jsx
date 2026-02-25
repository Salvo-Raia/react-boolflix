import { useState } from "react";

export default function MediaCard({
  title,
  originalTitle,
  date,
  originalLanguage,
  vote,
  overview,
  languageToFlag,
  rateConversion,
  posterPath,
}) {
  const [hovering, setHovering] = useState(false);

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
              {vote ? (
                <b>Voto: {rateConversion(vote)}</b>
              ) : (
                <i>Voto: nessuna valutazione</i>
              )}
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
