import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { getKhachHang } from '../../../../Service/Staff_service';
import './List_KhachHang.scss';
import Popup from '../../../../components/Popup'
import KhachHang from './KhachHang';
export default function List_movie() {
    const [openPopup, setOpenPopup] = useState(false)
    const [khachHangs, setKhachHangs] = useState([])

    async function fetchData() {
        let res = await getKhachHang();
        setKhachHangs(res.data)
        console.log(khachHangs)
    }

    useEffect(() => {
        console.log("list khach khang render");
        fetchData()

    }, []
    )
    return (
        <>
            <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
            <table id="movies">
                <tr>
                    <th width="10%" >ID </th>
                    <th width="20%">Tên</th>
                    <th width="15%">Giới tính</th>
                    <th width="15%">CMND</th>
                    <th width="15%">SĐT</th>
                    <th width="15%" colSpan={2}>Hành động</th>
                </tr>
                {khachHangs.map(khachHang => (<tr> <KhachHang khachHang={khachHang} handleReloadComponent={fetchData} /></tr>))}
            </table>
            <Popup
                title="Add user"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={fetchData}
            >
                {/* <Add_movie openPopup = {openPopup}></Add_movie> */}
            </Popup>

        </>
    )
}