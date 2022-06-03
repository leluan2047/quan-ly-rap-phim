import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Positon from './Position';
import './ListPosition.scss';
import Popup from '../../../Popup'
import { getAllPosition } from '../../../../Service/Staff_service';
import CreatePosition from '../CreatePosition/CreatePosition';
// import Add_movie from '../Add_movie/Add_movie'
export default function ListPosition() {
    const [positions, setPositions] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    async function fetchData()
    {
        let res = await getAllPosition();
        setPositions(res.data)
    }

    useEffect( () =>
        {
            console.log("list position render");
            
            fetchData()
        },[] 
    )
    return (
        <>
            <button className='btn-add' onClick={() =>setOpenPopup(true)}><AddIcon/>Add new</button>
            <table id="movies">
                <tr>
                    <th width="15%" >ID </th>
                    <th  width="15%">Tên công việc</th>
                    
                    <th width="8%" colSpan={2}>Hành động</th>
                </tr>   
                {positions.map(position =>(<tr> <Positon position={position} handleReloadComponent = {fetchData}/></tr>))}   
</table>
            <Popup
                title="Add positon"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {fetchData}
            >
                <CreatePosition openPopup = {openPopup}></CreatePosition>
            </Popup>
            
        </>
    )
}