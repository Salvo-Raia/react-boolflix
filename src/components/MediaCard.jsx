import { useState } from "react";

export default function MediaCard({
  movie,
  title,
  originalTitle,
  originalLanguage,
  vote,
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
        className="card border"
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
            <h3>{title}</h3>
            <h4>{originalTitle}</h4>
            <p>Lingua originale: {languageToFlag(originalLanguage)}</p>
            <p>
              {vote ? `Voto: ${rateConversion(vote)}` : "Nessuna valutazione"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
