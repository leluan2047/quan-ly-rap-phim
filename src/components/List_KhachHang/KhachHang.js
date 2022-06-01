import { useContext, useEffect, useState } from "react";
import Popup from "../Popup";
import Edit_movie from '../Edit_movie/Edit_movie'
import {axios} from '../../axios';
const KhachHang = ({ khachHang }) => {
    const [openPopup, setOpenPopup] = useState(false)
    const DeleteKhachHang = () =>
    {
        console.log(khachHang.id)
        axios.delete(`/users/${khachHang.id}`)
    .then(result => {
                      console.log(result) 
                    alert("Delete successfully")
                    })
    .catch( error =>{    
                     console.log(error)             
                     })  
    }
    return (
        <>
            <td>{khachHang.id} </td>
            <td>{khachHang.tenKH}</td>
            <td>{khachHang.gioiTinh} </td>
            <td>{khachHang.CMND}</td>
            <td>{khachHang.SDT} </td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt' ></i></button></td>
            {/* <td><button className='btn-delete' onClick={() => DeleteKhachHang()}><i className='fas fa-trash'></i></button></td> */}
            <Popup
                title="Edit movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               {/* <Edit_movie movie={movie}></Edit_movie> */}
            </Popup>
        </>
    );
};

export default KhachHang;
