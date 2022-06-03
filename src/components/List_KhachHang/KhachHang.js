import { useContext, useEffect, useState } from "react";
import Popup from "../Popup";
import {axios} from '../../axios';
const KhachHang = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    const DeleteKhachHang = () =>
    {
        console.log(props.khachHang.id)
        axios.delete(`/users/${props.khachHang.id}`)
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
            <td>{props.khachHang.id} </td>
            <td>{props.khachHang.tenKH}</td>
            <td>{props.khachHang.gioiTinh} </td>
            <td>{props.khachHang.CMND}</td>
            <td>{props.khachHang.SDT} </td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt' ></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteKhachHang()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={props.handleReloadComponent}
            >
               {/* <Edit_movie movie={movie}></Edit_movie> */}
            </Popup>
        </>
    );
};

export default KhachHang;
