import { useEffect, useState } from "react";
import Seo from "../components/seo";

export default function Home() {
  const [movies, setMovies] = useState();
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`api/movies`)).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div className="container">
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
          cursor: pointer;
        }
        .movie:hover img {
          transform: translateY(-5px);
          box-shadow: 4px 12px 20px 6px rgba(0, 0, 0, 0.18);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
