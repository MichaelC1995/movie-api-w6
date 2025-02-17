import React, {useEffect, useState} from 'react'
import {data, useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}


const Details = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function fetchMovie() {
            setIsLoading(true);
            const {data} = await axios.get(`${API_BASE_URL}/movie/${id}`, API_OPTIONS);
            setMovie(data);
        }
        fetchMovie();
        setIsLoading(false);
    }, []);


    return (
        <div className={"bg-hero-pattern p-5 shadow-inner shadow-light-100/10 min-h-screen text-white"}>
            <div className={"mx-auto container px-4 py-8 h-full items-center justify-between"}>

                <div
                    className='flex flex-col-reverse items-center justify-between gap-20
				max-w-6xl mx-auto text-center'
                >
                    <div className='mb-4 md:mb-0'>
                        <h2 className='text-5xl font-bold text-balance'>{movie.title}</h2>

                        <p className='mt-2 text-lg'>
                            {movie.release_date}
                        </p>
                        <p className='mt-4 text-lg'>{movie.overview}</p>
                    </div>
                    <img
                        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : '/no-movie.png'}
                        alt='Poster image'
                        className='max-h-[600px] rounded-md mt-20'
                    />
                </div>
            </div>
        </div>
    )
}
export default Details;
