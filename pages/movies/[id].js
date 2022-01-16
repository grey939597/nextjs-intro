import { useRouter } from "next/router";

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Movie: {id}</p>;
};

export default Movie;
