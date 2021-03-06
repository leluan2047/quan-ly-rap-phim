import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Category from './Category';
// import { getAllMovies } from '../../Service/Staff_service';
import './ListCategory.scss';
import Popup from '../../../Popup'
import { getAllCategory } from '../../../../Service/Staff_service';
import CreateCategory from '../CreateCategory/CreateCategory';

import { AutoComplete, Input } from 'antd';
// import Add_movie from '../Add_movie/Add_movie'

export default function ListCategory() {
    const [categories, setCategories] = useState([])
    const [danhSachCateTK, setDanhSachCateTK] = useState([])
    const [openPopup, setOpenPopup] = useState(false)

    async function fetchData() {
        let res = await getAllCategory();
        setCategories(res)
        setDanhSachCateTK(res)
    }

    useEffect(() => {
        fetchData()
    }, []
    )

    const handleSearch = (value) => {
        if (value) {

            let a = danhSachCateTK.filter(item => {

                let x =
                    item.tenTheLoai.toLowerCase().includes(value.toLowerCase())
                    ||
                    item.trangThai.toLowerCase().includes(value.toLowerCase())
                return x;
            })
            setCategories(a)
        }
        else {
            setCategories(danhSachCateTK);
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
            <table id="movies">
                <tr>
                    <th width="15%" >ID </th>
                    <th width="15%">Tên thể loại</th>
                    <th width="15%">Trạng thái</th>
                    <th width="15%" colSpan={2}>Hành động</th>
                </tr>
                {categories.map(category => (<tr> <Category category={category} handleReloadComponent={fetchData} /></tr>))}
            </table>
            <Popup
                title="Add category"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={fetchData}
            >
                <CreateCategory openPopup={openPopup}></CreateCategory>
            </Popup>

        </>
    )
}