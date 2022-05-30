import {axios} from "../axios";

const getMovieById = (inputId) =>
{
    return axios.get(`...?id=${inputId}`)
}
const getAllMovies = () =>
{
    // const getTodos = async () =>
    //     {
    //         axios.get("/movies")
    //         .then(result => {
    //             console.log(result) 
    //           })
    //         .catch( error =>{    
    //            console.log(error)  
    //            })  
    //     }
    // // getTodos()
    // return getTodos()
    return axios.get("/movies")
}
export {
    getAllMovies
}