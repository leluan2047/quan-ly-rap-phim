import React from "react"; import {  createContext, useState,useEffect } from "react";
import List_movie from "../components/List_movie/List_movie";
import { getAllMovies } from "../Service/Staff_service";
 export const MoviesContext = createContext()
 export default function MoviesProvider({children})
{
    const [movies,setMovies] = useState([])
    useEffect( () =>
        {
            async function fetchData()
            {
                let res = await getAllMovies();
                setMovies(res)
                console.log(res)
            }
            fetchData()
        },[] 
    )
    return(
        <MoviesContext.Provider value={movies} >
           {children}
        </MoviesContext.Provider>
    )
}
