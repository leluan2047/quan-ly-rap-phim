import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditTicket from "../EditTicket/EditTicket";
import { axios } from '../../../../axios';
import moment from "moment";

const Ticket = (props) => {

    const [openPopup, setOpenPopup] = useState(false)

    const DeleteTicket = () => {
        axios.delete(`/ticket/${props.ticket.id}`)
            .then(result => {
                alert(result.data.message)
                props.handleReloadComponent()
            })
            .catch(error => {
                alert(error.response.data.message)
            })
    }
    return (
        <>
            <td>{props.ticket.id} </td>
            <td>{props.ticket.suatChieu.tenSuatChieu} </td>
            <td>{props.ticket.loaiVe.tenLoaiVe}</td>
            <td>{props.ticket.phongChieu.tenPhong} </td>
            <td>{props.ticket.phim.tenPhim}</td>
            <td>{moment.utc(props.ticket.ngayMua).format('YYYY-MM-DD HH:mm:ss')}</td>
            <td>{props.ticket.trangThai}</td>
            <td><button className='btn-edit' onClick={() => setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteTicket()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit ticket"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={props.handleReloadComponent}
            >
                <EditTicket ticket={props.ticket}></EditTicket>
            </Popup>
        </>
    );
};

export default Ticket;
