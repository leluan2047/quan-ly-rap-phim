import { useContext, useEffect, useState } from "react";
import Popup from "../Popup";
import Edit_movie from '../Edit_movie/Edit_movie'
import {axios} from '../../axios';
const Movie = ({ movie }) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeleteMovie = () =>
    {
        console.log(movie.id)
        axios.delete(`/movies/${movie.id}`)
    .then(result => {
                      console.log(result) 
                       
                    })
    .catch( error =>{    
                     console.log(error)  
                               
                     })  
    }
    return (
        <>
            <td>{movie.tenPhim} </td>
            <td>{movie.noiDungPhim}</td>
            <td>{movie.maTheLoai} </td>
            <td>{movie.thoiLuong}</td>
            <td>{movie.daoDien} </td>
            <td>{movie.nuocSanXuat}</td>
            <td>{movie.trailer} </td>
            <td>{movie.poster}</td>
            <td>{movie.trangThai}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt' ></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteMovie()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               <Edit_movie movie={movie}></Edit_movie>
            </Popup>
        </>
    );
};

export default Movie;
