import { useState, useEffect } from "react";
import { fetchMovieById } from "../servises/api";
import { useParams } from "react-router-dom";

export const useFetchMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);
  return movie
};