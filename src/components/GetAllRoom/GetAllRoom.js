import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Popup from '../Popup';
import AddRoom from "../AddRoom/AddRoom";
import { axios } from "../../axios";
import "./GetAllRoom.scss";
import EditRoom from '../EditRoom/EditRoom';

function GetAllRoom() {
    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupEdit, setOpenPopupEdit] = useState(false);
    const [id, setId] = useState();

    const [rooms, setRooms] = useState([]);

    const handleReload = () => {
        getData();
    }

    const getData = () => {
        axios
            .get('/rooms')
            .then(function (res) {
                setRooms(res.data);
            })
            .catch(function (err) {
                console.log(err)
            })

    }

    const deleteData = (id) => {
        axios
            .delete(`rooms/${id}`)
            .then(function (res) {
                if (res.data.message === "Delete room successfully"){
                    window.alert("Xóa thành công");
                    handleReload();
                }
                else{
                    window.alert("Xóa thất bại");
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }


    useEffect(() => {
        getData();
    }, []);

    const editRoom = (id) => {
        setOpenPopupEdit(true);
        setId(id);
    }
    return (
        <div className=''>
            <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
            <table id="movies">
                <tr>
                    <th width="7%" >Tên phòng</th>
                    <th width="7%">Số lượng ghế</th>
                    <th width="7%">Trạng thái</th>
                    <th width="15%" colSpan={2}>Hành động</th>
                </tr>
                {rooms.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.tenPhong}</td>
                            <td>{item.soLuongGhe}</td>
                            <td>{item.trangThai}</td>
                            <td><button className='btn-edit' onClick={() => editRoom(item.id)}><i className='fas fa-pencil-alt' ></i></button></td>
                            <td><button className='btn-delete' onClick={(e) => deleteData(item.id)}><i className='fas fa-trash'></i></button></td>
                        </tr>
                    )
                })}
            </table>
            <Popup
                title="Add Room"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={handleReload}
            >
                <AddRoom></AddRoom>
            </Popup>

            <Popup
                title="Edit Room"
                openPopup={openPopupEdit}
                setOpenPopup={setOpenPopupEdit}
                handleReloadComponent={handleReload}
            >
                <EditRoom id={id}></EditRoom>
            </Popup>

        </div>

    )
}

export default GetAllRoom