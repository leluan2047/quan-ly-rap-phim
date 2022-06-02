import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import { getKhachHang } from '../../Service/Staff_service';
import './List_KhachHang.scss';
import Popup from '../Popup'
import KhachHang from './KhachHang';
export default function List_movie() {
    const [openPopup, setOpenPopup] = useState(false)
    const [khachHangs, setKhachHangs] = useState( [])
    
    useEffect( () =>
        {
            async function fetchData()
            {
                let res = await getKhachHang();
                setKhachHangs(res.data)
                console.log(khachHangs)
            }
            fetchData()
             
        },[] 
    )
    // useEffect ( () =>
    // {},[movies]

    // )
    return (
        <>
            <button className='btn-add' onClick={() =>setOpenPopup(true)}><AddIcon/>Add new</button>
            <table id="movies">
                <tr>
                    <th width="15%" >ID </th>
                    <th  width="15%">Tên</th>
                    <th width="7%">Giới tính</th>
                    <th width="7%">CMND</th>
                    <th width="7%">SĐT</th>
                    <th width="8%" colSpan={2}>Hành động</th>
                </tr>   
                {khachHangs.map(khachHang =>(<tr> <KhachHang khachHang={khachHang} /></tr>))}   
</table>
            <Popup
                title="Add user"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                {/* <Add_movie openPopup = {openPopup}></Add_movie> */}
            </Popup>
            
        </>
    )
}