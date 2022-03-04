import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "971b5c1e17e2936178577e157b2095ac";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();
      setMovies(results);
      console.log(results);
    })();
  }, []);
  return (
    <div>
      <Seo title='Home' />
      {movies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
