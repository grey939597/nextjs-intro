import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/seo";

export default function Home({ movies }) {
  const router = useRouter();
  const onClick = (movie) => {
    const { id, original_title } = movie;
    router.push(`/movies/${original_title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {movies?.map((movie) => (
        <div className="movie" key={movie.id} onClick={() => onClick(movie)}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
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
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
        }
        .movie:hover img {
          transform: translateY(-5px);
          box-shadow: 4px 12px 20px 6px rgba(0, 0, 0, 0.18);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
        .movie:hover h4 {
          color: #706fd3;
        }
      `}</style>
    </div>
  );
}

// backend 에서 실행
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      movies: results,
    },
  };
}
