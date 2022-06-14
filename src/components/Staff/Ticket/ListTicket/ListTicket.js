import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Ticket from './Ticket';
import './ListTicket.scss';
import Popup from '../../../Popup'
import { getAllTicket } from '../../../../Service/Staff_service';
import CreateTicket from '../CreateTicket/CreateTicket';
export default function ListTicket() {
    const [tickets, setTickets] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    async function fetchData()
            {
                let res = await getAllTicket();
                setTickets(res.data)
            }
    useEffect( () =>
        {
            fetchData()
        },[] 
    )
    return (
        <>
            <button className='btn-add' onClick={() =>setOpenPopup(true)}><AddIcon/>Add new</button>
            <table id="movies">
                <tr>
                    <th width="15%" >ID </th>
                    <th  width="15%">Tên suất chiếu</th>
                    <th  width="15%">Tên loại vé</th>
                    <th  width="15%">Tên phòng</th>
                    <th  width="15%">Tên phim</th>
                    <th  width="15%">Ngày mua</th>
                    <th  width="15%">Trạng thái</th>
                    <th width="8%" colSpan={2}>Hành động</th>
                </tr>   
                {tickets.map(ticket =>(<tr> <Ticket ticket={ticket} handleReloadComponent = {fetchData} /></tr>))}   
</table>
            <Popup
                title="Add ticket"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {fetchData}
            >
                <CreateTicket openPopup = {openPopup}></CreateTicket>
            </Popup>
            
        </>
    )
}