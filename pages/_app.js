import NavBar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar></NavBar>
      <Component {...pageProps}></Component>
    </>
  );
}
