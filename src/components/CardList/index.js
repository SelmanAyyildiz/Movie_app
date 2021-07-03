
import { useEffect, useState } from "react";
import {Card} from "../Card"
import axios from "axios"
import MediaCard from "../Metarial"

const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const baseUrl ="https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w200";

export const CardList = () => {

    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                page:1,
                query:'star wars'

            }
        })
            .then((res)=> setMovieData(res.data.results))
            .catch((err)=> console.log(err))
    },[]);
        console.log(movieData)
    return (
        <>
            {movieData?.map((movie, index) => {

             return <MediaCard
                      key={index}   
                      title={movie.title}
                      overview ={movie.overview}
                      poster={baseImageUrl + movie.poster_path}
             />
            })}
        
        
        </>
      
    )
}