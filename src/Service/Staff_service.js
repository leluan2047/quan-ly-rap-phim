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
const getKhachHang = () =>
{
    return axios.get("/users/khach-hangs")
}
export {
    getAllMovies,
    getProfile,
    getKhachHang
}