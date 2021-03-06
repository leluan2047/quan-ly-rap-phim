import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { getKhachHang } from '../../../../Service/Staff_service';
import './List_KhachHang.scss';
import Popup from '../../../../components/Popup'
import KhachHang from './KhachHang';
export default function List_KhachHang() {
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
          
            <table id="movies">
                <tr>
                    <th width="10%" >ID </th>
                    <th width="20%">Tên</th>
                    <th width="15%">Giới tính</th>
                    <th width="15%">CMND</th>
                    <th width="15%">SĐT</th>
                </tr>
                {khachHangs.map(khachHang => (<tr> <KhachHang khachHang={khachHang} handleReloadComponent={fetchData} /></tr>))}
            </table>
        </>
    )
}