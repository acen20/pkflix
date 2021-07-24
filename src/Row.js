import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";

const baseURL = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  },
};

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); // initialized withe empty

  //the useEffect function runs when Row loads
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); // we must include the variables out of the scope of useEffect
  /*empty ^ (here) means that it will only run once.
  if we pass a variable such as movies i.e. [movies],
  then this will load every time the movies change*/

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {/*container -> movie posters*/}
        {movies.map((movie) => (
          <img
            key={movie.id} //optimization: adding this will tell react not to render whole row at any change
            className={`row-poster ${isLargeRow && "row-poster-lg"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <YouTube videoId={`ZvNPk87baKY`} opts={opts} />
    </div>
  );
}

export default Row;
