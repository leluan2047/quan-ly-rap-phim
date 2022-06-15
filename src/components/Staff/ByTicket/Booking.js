import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../Popup';
import { axios } from '../../../axios';
import "./Booking.scss";
import moment from "moment"
function Booking() {

    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupEdit, setOpenPopupEdit] = useState(false);
    const [id, setId] = useState();
    const [booking, setBooking] = useState([]);

    const [danhSachSuatChieu, setDanhSachSuatChieu] = useState([])

    const getData = () => {
        axios
            .get("/booking")
            .then(res => {
                setBooking(res.data)

            })
            .catch(err => {
                console.log(err)
            })

        axios
            .get('/showtime')
            .then(res => {
                setDanhSachSuatChieu(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteData = (id) => {
        axios
            .delete(`booking/${id}`)
            .then(function (res) {
                if (res.data.message === "Delete booking successfully") {
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
        getData();
    }, [])

    const editBooking = (id) => {
        setOpenPopupEdit(true);
        setId(id);
    }
    return (
        <div className='booking-container'>


            <table id="booking">
                <div className='suatChieu-info'>
                    <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
                    <div>
                        {danhSachSuatChieu.map(item => {
                            return (
                                <p key={item.id}>
                                    {item.tenSuatChieu} : {moment.utc(item.timeStart).format('YYYY-MM-DD HH:mm:ss')} đến {moment.utc(item.timeEnd).format('YYYY-MM-DD HH:mm:ss')}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <tr>
                    <th width="7%" >Tên khách hàng</th>
                    <th width="7%">Số điện thoại</th>
                    <th width="10%">Ngày mua</th>
                    <th width="7%">Suất chiếu</th>
                    <th width="4%">Loại vé</th>
                    <th width="7%">Phòng</th>
                    <th width="7%">Ghế</th>
                    <th width="7%">Phim</th>
                    <th width="4%" colSpan={2}>Hành động</th>
                </tr>
                {booking.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.user.khachHang.tenKH}</td>
                            <td>{item.user.khachHang.SDT}</td>
                            <td>
                                {moment.utc(item.ve.ngayMua).format('YYYY-MM-DD HH:mm:ss')}
                            </td>
                            <td>{item.ve.suatChieu.tenSuatChieu} </td>
                            <td>{item.ve.loaiVe.tenLoaiVe}</td>
                            <td>{item.ve.phongChieu.tenPhong}</td>
                            <td>{"Ghe chua co"}</td>
                            <td>{item.ve.phim.tenPhim}</td>
                            <td><button className='btn-edit' onClick={() => editBooking(item.id)}><i className='fas fa-pencil-alt' ></i></button></td>
                            <td><button className='btn-delete' onClick={(e) => deleteData(item.id)}><i className='fas fa-trash'></i></button></td>
                        </tr>
                    )
                })}
            </table>
            <Popup
                title="Thêm mới"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={getData}
            >
                {/* <AddSeat></AddSeat> */}
            </Popup>

            <Popup
                title="Sửa "
                openPopup={openPopupEdit}
                setOpenPopup={setOpenPopupEdit}
                handleReloadComponent={getData}
            >
                {/* <EditSeat id={id}></EditSeat> */}
            </Popup>
        </div>
    )
}

export default Booking