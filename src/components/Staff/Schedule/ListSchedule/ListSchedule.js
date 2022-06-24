import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Schedule from './Schedule';
import './ListSchedule.scss';
import Popup from '../../../Popup'
import { getAllSchedule } from '../../../../Service/Staff_service';
import CreateSchedule from '../CreateSchedule/CreateSchedule';

import { AutoComplete, Input } from 'antd';

export default function ListSchedule() {
    const [schedules, setSchedules] = useState([])
    const [danhSachTK,setDanhSachTK] = useState([]);
    const [openPopup, setOpenPopup] = useState(false)

    async function fetchData() {
        let res = await getAllSchedule();
        setSchedules(res)
        setDanhSachTK(res)
        console.log(res)
    }

    useEffect(() => {
        fetchData()
    }, []
    )

    const handleSearch = (value) => {
        if (value) {

            let a = danhSachTK.filter(item => {

                let x =
                    item.phongChieu.tenPhong.toLowerCase().includes(value.toLowerCase())
                    ||
                    item.phim.tenPhim.toLowerCase().includes(value.toLowerCase())
                    ||
                    item.trangThai.toLowerCase().includes(value.toLowerCase())
                   
                return x
            })
            setSchedules(a)
        }
        else {
            setSchedules(danhSachTK);
        }
    };
    return (
        <>
            <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
            <div>
                <br>
                </br>

                <AutoComplete

                    onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="Tìm kiếm theo từ khóa" enterButton />
                </AutoComplete>
                <br></br>
                <br></br>
            </div>  
            <table id="positions">
                <tr>
                    <th width="10%" >ID </th>
                    <th width="15%">Tên phòng</th>
                    <th width="15%">Tên phim</th>
                    <th width="15%">Ngày chiếu</th>
                    <th width="10%">Trạng thái</th>
                    <th width="15%" colSpan={2}>Hành động</th>
                </tr>
                {schedules.map(schedule => (<tr> <Schedule schedule={schedule} handleReloadComponent={fetchData} /></tr>))}
            </table>

            
            <Popup
                title="Add schedule"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={fetchData}
            >
                <CreateSchedule openPopup={openPopup}></CreateSchedule>
            </Popup>

        </>
    )
}