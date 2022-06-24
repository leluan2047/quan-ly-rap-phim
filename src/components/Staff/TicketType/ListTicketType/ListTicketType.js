import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import TicketType from './TicketType';
import './ListTicketType.scss';
import Popup from '../../../Popup'
import { getAllTicketTpye } from '../../../../Service/Staff_service';
import CreateTicketType from '../CreateTicketType/CreateTicketType';
// import Add_movie from '../Add_movie/Add_movie'
export default function ListTicketType() {
    const [ticketTypes, setTicketTypes] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    async function fetchData()
            {
                let res = await getAllTicketTpye();
                setTicketTypes(res)
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
                    <th  width="15%">Tên loại vé</th>
                    <th  width="15%">Giá vé</th>
                    <th  width="15%">Trạng thái</th>
                    <th width="8%" colSpan={2}>Hành động</th>
                </tr>   
                {ticketTypes.map(ticketType =>(<tr> <TicketType ticketType={ticketType} handleReloadComponent = {fetchData} /></tr>))}   
</table>
            <Popup
                title="Add ticket type"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {fetchData}
            >
                <CreateTicketType openPopup = {openPopup}></CreateTicketType>
            </Popup>
            
        </>
    )
}