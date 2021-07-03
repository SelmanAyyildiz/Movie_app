
import { useEffect, useState } from "react";
import {Card} from "../Card"
import axios from "axios"

const apiKey = "29b44dc404fcd29682c29a4d22da5c75";
const baseUrl ="https://api.themoviedb.org/3/search/movie"


export const CardList = () => {

    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        axios.get(baseUrl, {
            params: {
                api_key: apiKey,
                page:1,
                query:'Star Wars'

            }
        })
            .then((res)=> setMovieData(res.data.results))
            .catch((err)=> console.log(err))
    },[]);
        console.log(movieData)
    return (
        <>
            {movieData && movieData.map(movie => {

             return <Card title={movie.title}
                         
             />
            })}
        
        
        </>
      
    )
}