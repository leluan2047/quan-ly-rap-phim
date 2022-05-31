import {axios} from "../axios";

const getMovieById = (inputId) =>
{
    return axios.get(`...?id=${inputId}`)
}
const getProfile = () =>
{
    return axios.get('/users/me')
}
const getAllMovies = () =>
{
    return axios.get("/movies")
    
}
export {
    getAllMovies,
    getProfile
}