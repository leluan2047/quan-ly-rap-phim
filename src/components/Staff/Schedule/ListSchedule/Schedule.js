import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditSchedule from "../EditSchedule/EditSchedule";
import {axios} from '../../../../axios';
const Schedule = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeleteSchedule = () =>
    {
        axios.delete(`/schedule/${props.schedule.id}`)
    .then(result => {
                 props.handleReloadComponent()
                    alert(result.data.message) 
                    })
    .catch( error =>{    
                    alert(error)                           
                     })  
    }
    return (
        <>
            <td>{props.schedule.id} </td>
            <td>{props.schedule.maPhong}</td>
            <td>{props.schedule.maPhim}</td>
            <td>{props.schedule.ngayChieu}</td>
            <td>{props.schedule.trangThai}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteSchedule()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit schedule"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {props.handleReloadComponent}
            >
               <EditSchedule schedule={props.schedule}></EditSchedule>

            </Popup>
        </>
    );
};

export default Schedule;
