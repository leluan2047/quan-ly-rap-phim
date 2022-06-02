import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditSchedule from "../EditSchedule/EditSchedule";
import {axios} from '../../../../axios';
const Schedule = ({ schedule }) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeleteSchedule = () =>
    {
        axios.delete(`/schedule/${schedule.id}`)
    .then(result => {
                    alert(result.data.message) 
                    })
    .catch( error =>{    
                    alert(error)                           
                     })  
    }
    return (
        <>
            <td>{schedule.id} </td>
            <td>{schedule.maPhong}</td>
            <td>{schedule.maPhim}</td>
            <td>{schedule.ngayChieu}</td>
            <td>{schedule.trangThai}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteSchedule()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               <EditSchedule schedule={schedule}></EditSchedule>

            </Popup>
        </>
    );
};

export default Schedule;
