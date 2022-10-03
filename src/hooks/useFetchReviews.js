import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../servises/api";
import { useParams } from "react-router-dom";

export const useFetchReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState('');

    useEffect(() => {
        fetchMovieReviews(movieId).then(setReviews)
    },[movieId])
    return reviews
}