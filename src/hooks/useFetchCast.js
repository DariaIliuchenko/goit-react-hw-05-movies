import { useState, useEffect } from "react";
import { fetchMovieCast } from "../servises/api";
import { useParams } from "react-router-dom";

export const useFetchCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState('');

    useEffect(() => {
        fetchMovieCast(movieId).then(setCast)
    },[movieId])
    return cast
}