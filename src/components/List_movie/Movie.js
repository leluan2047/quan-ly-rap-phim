import { useContext, useEffect, useState } from "react";
import Popup from "../Popup";
import Edit_movie from '../Edit_movie/Edit_movie'
import {axios} from '../../axios';
const Movie = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    const DeleteMovie = () =>
    {
        console.log(props.movie.id)
        axios.delete(`/movies/${props.movie.id}`)
    .then(result => {
                    props.handleReloadComponent();
                      console.log(result) 
                    alert("Delete successfully")
                    })
    .catch( error =>{    
                     console.log(error)             
                     })  
    }
    return (
        <>
            <td>{props.movie.tenPhim} </td>
            <td>{props.movie.noiDungPhim}</td>
            <td>{props.movie.maTheLoai} </td>
            <td>{props.movie.thoiLuong}</td>
            <td>{props.movie.daoDien} </td>
            <td>{props.movie.nuocSanXuat}</td>
            <td>{props.movie.trailer} </td>
            <td>{props.movie.poster}</td>
            <td>{props.movie.trangThai}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt' ></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteMovie()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {props.handleReloadComponent}
            >
               <Edit_movie movie={props.movie} allcategory={props.allcategory}></Edit_movie>
            </Popup>
        </>
    );
};

export default Movie;
