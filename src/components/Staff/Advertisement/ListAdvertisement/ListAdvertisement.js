import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Advertisement from './Advertisement';
// import { getAllMovies } from '../../Service/Staff_service';
import './ListAdvertisement.scss';
import Popup from '../../../Popup'
import { getAllAdvertisement} from '../../../../Service/Staff_service';
import CreateAdvertisement from '../CreateAdvertisement/CreateAdvertisement';
// import Add_movie from '../Add_movie/Add_movie'
export default function ListAdvertisement() {
    const [ads, setAds] = useState([])
    const [openPopup, setOpenPopup] = useState(false)
    useEffect( () =>
        {
            async function fetchData()
            {
                let res = await getAllAdvertisement();
                setAds(res.data.data)
                console.log(ads)
            }
            fetchData()
        },[] 
    )
    return (
        <>
            <button className='btn-add' onClick={() =>setOpenPopup(true)}><AddIcon/>Add new</button>
            <table id="ads">
                <tr>
                    <th width="15%" >Mã phim </th>
                    <th  width="15%">Tên quảng cáo</th>
                    <th width="8%">Nội dung</th> 
                    <th  width="15%">Thời gian bắt đầu</th>
                    <th width="8%">Thời gian kết thúc</th> 
                    <th width="8%" colSpan={2}>Hành động</th>
                </tr>   
                {ads.map(ad =>(<tr> <Advertisement ad={ad} /></tr>))}   
</table>
            <Popup
                title="Add advertisement"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <CreateAdvertisement openPopup = {openPopup}></CreateAdvertisement>
            </Popup>
            
        </>
    )
}