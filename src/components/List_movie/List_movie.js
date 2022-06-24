import React, { useEffect, useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Movie from './Movie';

import { useContext } from "react";
import { MoviesContext } from '../../Context/MoviesProvider';
import { getAllMovies } from '../../Service/Staff_service';
import './List_movie.scss';
import Popup from '../Popup'
import Add_movie from '../Add_movie/Add_movie'
import { getAllCategory } from '../../Service/Staff_service';

import { AutoComplete, Input } from 'antd';





export default function List_movie() {
    const [openPopup, setOpenPopup] = useState(false)
    const [categories, setCategories] = useState([])
    const [movies, setMovies] = useState(useContext(MoviesContext))
    const [danhSachPhimTK, setDanhSachPhimTK] = useState(useContext(MoviesContext))

    async function fetchData() {
        await getAllMovies()
            .then(function (res) {
                setMovies(res);
                setDanhSachPhimTK(res)
            })
            .catch(function (err) {
                console.log(err)
            });

    }

    async function getCategory() {
        let res = await getAllCategory();
        setCategories(res)
    }

    useEffect(() => {
        console.log("person render");
        fetchData()
        getCategory()
    }, []
    )

    //-------------------------------------------------------------------
    //-------------------------------------------------------------------
    //-------------------------------------------------------------------
    //-------------------------------------------------------------------
    //-------------------------------------------------------------------
  


   

    const handleSearch = (value) => {
        if(value){

            let a = danhSachPhimTK.filter(item=>{
                
                let tenPhimTK =
                item.tenPhim.toLowerCase().includes(value.toLowerCase())
                ||
                item.theLoaiPhim.tenTheLoai.toLowerCase().includes(value.toLowerCase())
                ||
                item.nuocSanXuat.toLowerCase().includes(value.toLowerCase())
                ||
                item.trangThai.toLowerCase().includes(value.toLowerCase())
               
                return tenPhimTK;
            })
            setMovies(a)
        }
        else{
           setMovies(danhSachPhimTK); 
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
                    <th width="15%" >Tên phim </th>
                    <th width="15%">Nội dung</th>
                    <th width="7%">Thể loại</th>
                    <th width="7%">Thời lượng</th>
                    <th width="7%">Đạo diễn</th>
                    <th width="9%">Nước sản xuất</th>
                    <th width="10%">Trailer</th>
                    <th width="10%">Poster</th>
                    <th width="8%">Trạng thái</th>
                    <th width="8%" colSpan={2}>Hành động</th>
                </tr>
                {movies.map(movie => (<tr> <Movie movie={movie} handleReloadComponent={fetchData} allcategory={categories} /></tr>))}
            </table>
            <Popup
                title="Add movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent={fetchData}
            >
                <Add_movie openPopup={openPopup} category={categories}></Add_movie>
            </Popup>

        </>
    )
}