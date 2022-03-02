import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>this is _app.js</span>
      <style jsx global>{``}</style>
    </>
  );
}
