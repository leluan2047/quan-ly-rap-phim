import React  from 'react';
import { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import {axios} from '../../axios';
import './Edit_movie.scss'

function Edit_movie( {movie}) {
  
  const [time,setTime]= useState(movie.thoiLuong)
  const [content,setContent] = useState(movie.noiDungPhim)
  const [name,setName] =  useState(movie.tenPhim)
  const [category,setCategory] =  useState(movie.theLoai)
  const [directors,setDirectors] =  useState(movie.daoDien)
  const [country,setCountry] =  useState(movie.nuocSanXuat)
  const [trailer,setTrailer] =  useState(movie.trailer)
  const [poster,setPoster] =  useState(movie.poster)
  const [status,setStatus] =  useState(movie.trangThai)
  const Validate = (e) =>
  {
  }
  const ResizeTextarea =(e) =>
  {
   const textarea = document.querySelector("textarea");
   textarea.addEventListener("keyup", e => {
     let scHeight = e.target.scrollHeight;
     textarea.style.height = `${scHeight}px`;
   })
 
  }
  const checkContent = (e) =>
  {
     if(content.length === 0) document.getElementById("errorcontent").innerHTML = "Bạn cần điền nội dung";  
     else document.getElementById("errorcontent").innerHTML = "";
  }
  const checkTime = (e) =>
  {
    if(isNaN(time)) document.getElementById("errortime").innerHTML = "Thời lượng phải là số";
    else document.getElementById("errortime").innerHTML = "";
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log({name,category,content,directors,country,time,trailer,poster,status})
    console.log(movie.id)
    axios.put(`/movies/${movie.id}`, {tenPhim: name, maTheLoai: category, noiDungPhim: content, daoDien:directors,nuocSanXuat:country,thoiLuong:time,trailer:trailer, poster:poster,trangThai: status})
    .then(result => {
                      alert(result.data.message) 
                    })
    .catch( error =>{    
                    alert(error.response.data.message)             
                     })   
  }
  return (
    <>
    <div className="edit-movie" >
    {/* <div className='title-edit-movie'>
        <h1 >EDIT&ensp;MOVIE</h1>
      </div> */}
            <form className='form-edit-movie' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="name">Tên phim<span>*</span></label>
                <input type="text" id="name" name="name" class="input-add" placeholder="Tên phim" required  onChange={(e) => setName(e.target.value)} defaultValue=  {name}></input>
                <label for="category">Thể loại<span>*</span></label>
                <select name="cars" id="cars" onChange={(e) => setCategory(e.target.value)} defaultValue={category}>
                  <option value="1">Kiếm hiệp</option>
                  <option value="2">Tình cảm</option>
                  <option value="3">Hài</option>
                </select>
                <label for="content">Nội dung <span>*</span></label>
                <textarea contenteditable="true" id="content" name="content" class="input-add" placeholder="Nội dung phim" onBlur={checkContent} onChange={(e)=> setContent(e.target.value)} onFocus={ResizeTextarea}  defaultValue={content} required ></textarea>
                <p id='errorcontent'> </p>
                <label for="directors">Đạo diễn<span>*</span></label>
                <input type="text" id="directors" name="directors" class="input-add" placeholder="Đạo diễn"  required onChange={(e) => setDirectors(e.target.value)}  defaultValue={directors}></input>
                <label for="country">Nước sản xuất<span>*</span></label>
                <input type="text" id="country" name="country" class="input-add" placeholder="Nước sản xuất" required onChange={(e) => setCountry(e.target.value)} defaultValue={country}></input>
                <label for="time">Thời lượng(phút)<span>*</span></label>
                <input type="text" id="time" name="time" class="input-add" placeholder="Thời lượng" required onBlur={checkTime} onChange={(e)=>setTime(e.target.value)}  defaultValue={time}></input>           
                <p id='errortime'> </p>
                <label for="trailer">Trailer<span>*</span></label><br></br>
                <input class="input-add"  type='text' id='trailer'name='trailer' required onChange={(e) => setTrailer(e.target.value)}  defaultValue={trailer}></input>
                <label for="poster">Poster<span>*</span></label><br></br>
                <input class="input-add"  type='text' id='poster'name='poster' required multiple onChange={(e) => setPoster(e.target.value)} defaultValue={poster}></input>
                <label for="status">Trạng thái</label>
                <select name="cars" id="cars" onChange={(e) => setStatus(e.target.value)}>
                <option value="Đã chiếu">Đã chiếu</option>
                  <option value="đang chiếu">Đang chiếu</option>
                </select>
                {/* <option value={option.value} selected={optionsState == option.value}>{option.label}</option> */}
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  onClick={(e) =>Validate(e)} value='Edit movie'></input>
            </div>
            </form>
      
    
    </div>
    
    </>
  );
}

export default Edit_movie;
