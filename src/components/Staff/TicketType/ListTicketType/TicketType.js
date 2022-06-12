import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditTicketType from "../EditTicketType/EditTicketType";
import {axios} from '../../../../axios';
const TicketType = (props ) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeleteTicketType = () =>
    {
        axios.delete(`/ticketType/${props.ticketType.id}`)
    .then(result => {
                      alert(result.data.message) 
                      props.handleReloadComponent()
                    })
    .catch( error =>{    
                     alert(error.response.data.message)  
                               
                     })  
    }
    return (
        <>
            <td>{props.ticketType.id} </td>
            <td>{props.ticketType.giaVe}</td>
            <td>{props.ticketType.tenLoaiVe} </td>
            <td>{props.ticketType.trangThai}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteTicketType()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit ticket type"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {props.handleReloadComponent}
            >
               <EditTicketType ticketType={props.ticketType}></EditTicketType>
            </Popup>
        </>
    );
};

export default TicketType;
