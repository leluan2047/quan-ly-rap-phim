import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Advertisement from './Advertisement';
// import { getAllMovies } from '../../Service/Staff_service';
import './ListAdvertisement.scss';
import Popup from '../../../Popup'
import { getAllAdvertisement } from '../../../../Service/Staff_service';
import CreateAdvertisement from '../CreateAdvertisement/CreateAdvertisement';
// import Add_movie from '../Add_movie/Add_movie'
import { AutoComplete, Input } from 'antd';

export default function ListAdvertisement() {
    const [ads, setAds] = useState([])
    const [adsTK, setAdsTK] = useState([]);

    const [openPopup, setOpenPopup] = useState(false)
    async function fetchData() {
        let res = await getAllAdvertisement();
        setAds(res.data.data)
        setAdsTK(res.data.data)
        console.log(ads)
    }

    useEffect(() => {
        console.log("list advertisement render");

        fetchData()
    }, []
    )

    const handleSearch = (value) => {
        if (value) {

            let a = adsTK.filter(item => {

                let danhSachADTK =
                    item.phim.tenPhim.toLowerCase().includes(value.toLowerCase())
                    ||
                    item.tenQuangCao.toLowerCase().includes(value.toLowerCase())
                    ||
                    item.noiDung.toLowerCase().includes(value.toLowerCase())
                return danhSachADTK;
            })
            setAds(a)

        }
        else {
            setAds(adsTK)
        }
    };

    return (
        <>
            <button className='btn-add' onClick={() => setOpenPopup(true)}><AddIcon />Add new</button>
            <br>
            </br>

            <AutoComplete

                onSearch={handleSearch}
            >
                <Input.Search size="large" placeholder="Tìm kiếm theo từ khóa" enterButton />
            </AutoComplete>

            <br></br>
            <br></br>
            <table id="ads">
                <tr>
                    <th width="19%" >Tên phim </th>
                    <th width="19%">Tên quảng cáo</th>
                    <th width="17%">Nội dung</th>
                    <th width="15%">Thời gian bắt đầu</th>
                    <th width="15%">Thời gian kết thúc</th>
                    <th width="10%" colSpan={2}>Hành động</th>
                </tr>
                {ads.map(ad => (<tr> <Advertisement ad={ad} handleReloadComponent={fetchData} /></tr>))}
            </table>
            <Popup
                title="Add advertisement"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={fetchData}
            >
                <CreateAdvertisement openPopup={openPopup}></CreateAdvertisement>
            </Popup>

        </>
    )
}