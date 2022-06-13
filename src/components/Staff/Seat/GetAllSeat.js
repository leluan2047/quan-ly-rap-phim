import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../Popup';
import { axios } from '../../../axios';
import './GetAllSeat.scss';
import EditSeat from './EditSeat';
import AddSeat from './AddSeat';

function GetAllSeat() {

    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupEdit, setOpenPopupEdit] = useState(false);
    const [id, setId] = useState();
    const [seat, setSeat] = useState([]);

    const getData = () => {
        axios
            .get('/seat')
            .then(function (res) {
                setSeat(res.data)
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    const deleteData = (id) => {
        axios
            .delete(`seat/${id}`)
            .then(function (res) {
                if (res.data.message === "Delete seat successfully") {
                    window.alert("Xóa thành công");
                    getData();
                }
                else {
                    window.alert("Xóa thất bại");
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }


    useEffect(() => {
        console.log("GetAllSeat render");
        getData();
    }, []);

    const editSeat = (id) => {
        setOpenPopupEdit(true);
        setId(id);
    }

    return (
        <div className='Seat-container'>
            <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
            <table id="seats">
                <tr>
                    <th width="7%" >Tên phòng</th>
                    <th width="7%">Trạng thái</th>
                    <th width="7%">Vị trí dãy</th>
                    <th width="7%">Vị trí cột</th>
                    <th width="15%" colSpan={2}>Hành động</th>
                </tr>
                {seat.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.maPhong}</td>
                            <td>{item.trangThai}</td>
                            <td>{item.vitriDay}</td>
                            <td>{item.vitriCot}</td>
                            <td><button className='btn-edit' onClick={() => editSeat(item.id)}><i className='fas fa-pencil-alt' ></i></button></td>
                            <td><button className='btn-delete' onClick={(e) => deleteData(item.id)}><i className='fas fa-trash'></i></button></td>
                        </tr>
                    )
                })}
            </table>
            <Popup
                title="Add Seat"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={getData}
            >
                <AddSeat></AddSeat>
            </Popup>

            <Popup
                title="Edit Seat"
                openPopup={openPopupEdit}
                setOpenPopup={setOpenPopupEdit}
                handleReloadComponent={getData}
            >
                <EditSeat id={id}></EditSeat>
            </Popup>
        </div>
    )
}

export default GetAllSeat