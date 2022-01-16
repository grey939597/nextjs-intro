import { useRouter } from "next/router";
import Seo from "../../components/seo";

const Movie = ({ params }) => {
  // const router = useRouter();
  // const [title, id] = router.query.params || [];
  const [title, id] = params || [];

  return (
    <>
      <Seo title={title} />
      <h4>{title || "Loading..."}</h4>
      <p>Movie: {id}</p>
    </>
  );
};

export default Movie;

export function getServerSideProps(ctx) {
  const params = ctx.query.params;
  return {
    props: {
      params,
    },
  };
}
