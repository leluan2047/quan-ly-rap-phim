import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../Popup';
import { axios } from '../../../axios';
import "./ListBook.scss";
import moment from "moment"
import { Table } from 'antd';
import Book from './Book';
import EditBook from './EditBook';

function ListBook() {

    const [openPopup, setOpenPopup] = useState(false);
    const [openPopupEdit, setOpenPopupEdit] = useState(false);
    const [id, setId] = useState();
    const [booking, setBooking] = useState([]);

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
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: (record) => <div >
                <button className='btn-edit' onClick={e=>editBooking(record.id)} ><i className='fas fa-pencil-alt' ></i></button>&ensp;&ensp;
                <button className='btn-delete' onClick={e=>deleteData(record.id)}><i className='fas fa-trash'></i></button>
            </div>,
        },
    
    
        // {
        //   title: 'Action',
        //   key: 'operation',
        //   fixed: 'right',
        //   width: 100,
        //   render: () => <a>action</a>,
        // },
    ];
    const data = [];

    const getData = () => {
        axios
            .get(`/booking/user/46`)
            .then(res => {
                
                res.data.map(item => {
                    const x = {
                        key :item.id,
                        id : item.id,
                        tenKH: item.user.khachHang.tenKH,
                        SDT: item.user.khachHang.SDT,
                        ngayMua: moment.utc(item.ve.ngayMua).format('YYYY-MM-DD hh:mm'),
                        tenSuatChieu: moment.utc(item.ve.suatChieu.timeStart).format('YYYY-MM-DD hh:mm') + " đến "
                            + moment.utc(item.ve.suatChieu.timeEnd).format('YYYY-MM-DD hh:mm'),
                        tenLoaiVe: item.ve.loaiVe.tenLoaiVe,
                        tenPhong: item.ve.phongChieu.tenPhong,
                        tenPhim: item.ve.phim.tenPhim,
                        tenGhe: item.ve.ghe.vitriDay +  "--" +  item.ve.ghe.vitriCot
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
           <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
            <Table
                columns={columns}
                dataSource={booking}
                scroll={{
                    x: 1500,
                }}
            />
           
           <Popup
                title="Đặt thêm vé"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={getData}
            >
                <Book></Book>
            </Popup>

            <Popup
                title="Sửa vé"
                openPopup={openPopupEdit}
                setOpenPopup={setOpenPopupEdit}
                handleReloadComponent={getData}
            >
                <EditBook id={id}></EditBook>
            </Popup>

        </div>
    )
}

export default ListBook;