import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../Popup';
import { axios } from '../../../axios';
import "./Booking.scss";
import moment from "moment"
import { Table } from 'antd';

const columns = [
    {
        title: 'Tên khách hàng',
        width: 150,
        dataIndex: 'tenKH',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Số điện thoại',
        width: 150,
        dataIndex: 'SDT',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Ngày mua',
        dataIndex: 'ngayMua',
        width: 150,
        key: '1',
       
    },
    {
        title: 'Suất chiếu',
        width: 250,
        dataIndex: 'tenSuatChieu',
        key: '2',
    },
    {
        title: 'Loại vé',
        width: 80,
        dataIndex: 'tenLoaiVe',
        key: '3',
    },
    {
        title: 'Phòng',
        width: 80,
        dataIndex: 'tenPhong',
        key: '4',
    },
    {
        title: 'Ghế',
        width: 70,
        dataIndex: 'tenGhe',
        key: '5',
    },
    {
        title: 'Phim',
        dataIndex: 'tenPhim',
        key: '6',
    },
    // {
    //     title: 'Action',
    //     key: 'operation',
    //     fixed: 'right',
    //     width: 100,
    //     render: () => <div >
    //         <button className='btn-edit' ><i className='fas fa-pencil-alt' ></i></button>&ensp;&ensp;
    //         <button className='btn-delete' ><i className='fas fa-trash'></i></button>
    //     </div>,
    //   },
     

    // {
    //   title: 'Action',
    //   key: 'operation',
    //   fixed: 'right',
    //   width: 100,
    //   render: () => <a>action</a>,
    // },
];






function Booking() {

    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupEdit, setOpenPopupEdit] = useState(false);
    const [id, setId] = useState();
    const [booking, setBooking] = useState([]);

    const [danhSachSuatChieu, setDanhSachSuatChieu] = useState([])

    const data = [];

    const getData = () => {
        axios
            .get("/booking")
            .then(res => {

                res.data.map(item => {
                    const x = {
                        tenKH: item.user.khachHang.tenKH,
                        SDT: item.user.khachHang.SDT,
                        ngayMua: moment.utc(item.ve.ngayMua).format('YYYY-MM-DD hh:mm'),

                        tenSuatChieu: moment.utc(item.ve.suatChieu.timeStart).format('YYYY-MM-DD hh:mm') + " đến "
                            + moment.utc(item.ve.suatChieu.timeEnd).format('YYYY-MM-DD hh:mm'),
                        tenLoaiVe: item.ve.loaiVe.tenLoaiVe,
                        tenPhong: item.ve.phongChieu.tenPhong,
                        tenPhim: item.ve.phim.tenPhim,
                        tenGhe: "chua co"
                    }
                    data.push(x);
                })
                setBooking(data);
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
            
            <Table
                columns={columns}
                dataSource={booking}
                scroll={{
                    x: 1500,
                }}
            />
            {console.log(booking)}

        </div>
    )
}

export default Booking