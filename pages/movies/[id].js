import { useRouter } from "next/router";
import Seo from "../../components/seo";

const Movie = () => {
  const router = useRouter();
  const { id, title } = router.query;

  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
      <p>Movie: {id}</p>
    </>
  );
};

export default Movie;
