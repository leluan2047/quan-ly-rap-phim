
import React from "react"; import { createContext, useState, useEffect } from "react";
import List_movie from "../components/List_movie/List_movie";
import { getAllMovies } from "../Service/Staff_service";

export const MoviesContext = createContext()
function Context() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            let res = await getAllMovies();
            setMovies(res.data)
        }
        fetchData()
    }, []
    )
    return (
        <MoviesContext.Provider value={movies}>
            <List_movie />

        </MoviesContext.Provider>
    )
}
export default Context