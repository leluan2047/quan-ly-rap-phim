import React  from 'react';
import { useState } from 'react';
import {axios} from '../../axios';
import './Add_movie.scss'

function Add_movie() {
  
  const [time,setTime]= useState("")
  const [content,setContent] = useState("")
  const [name,setName] =  useState("")
  const [category,setCategory] =  useState("")
  const [directors,setDirectors] =  useState("")
  const [country,setCountry] =  useState("")
  const [trailer,setTrailer] =  useState("")
  const [poster,setPoster] =  useState("")
  const [status,setStatus] =  useState(1)
  
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
    if(category ==="")
    {
      alert("Vui lòng họn thể loại")
    }
    console.log({name,category,content,directors,country,time,trailer,poster,status})
    axios.post('/movies', {tenPhim: name, maTheLoai: category, noiDungPhim: content, daoDien:directors,nuocSanXuat:country,thoiLuong:time,trailer:trailer, poster:poster,trangThai: status})
      .then(result => {
                        console.log(result.data.message) 
                        alert(result.data.message)
                      })
      .catch( error =>{    
                       console.log(error.message)  
                                 
                       })       
  }
  return (
    <>
    <div className="add-movie" >
    {/* <div className='title-add-movie'>
        <h1 >ADD&ensp;NEW&ensp;MOVIE</h1>
      </div> */}
            <form className='form-add-movie' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="name">Tên phim<span>*</span></label>
                <input type="text" id="name" name="name" class="input-add" placeholder="Tên phim" required  onChange={(e) => setName(e.target.value)}></input>
                <label for="category">Thể loại<span>*</span></label>
                <select name="cars" id="cars" onChange={(e) => setCategory(e.target.value)}>
                  <option value="" >---Chọn thể loại phim---</option>
                  <option value="1">Kiếm hiệp</option>
                  <option value="2">Tình cảm</option>
                  <option value="3">Hài</option>
                </select>
                <label for="content">Nội dung <span>*</span></label>
                <textarea contenteditable="true" id="content" name="content" class="input-add" placeholder="Nội dung phim" onBlur={checkContent} onChange={(e)=> setContent(e.target.value)} onFocus={ResizeTextarea} required ></textarea>
                <p id='errorcontent'> </p>
                <label for="directors">Đạo diễn<span>*</span></label>
                <input type="text" id="directors" name="directors" class="input-add" placeholder="Đạo diễn"  required onChange={(e) => setDirectors(e.target.value)}></input>
                <label for="country">Nước sản xuất<span>*</span></label>
                <input type="text" id="country" name="country" class="input-add" placeholder="Nước sản xuất" required onChange={(e) => setCountry(e.target.value)}></input>
                <label for="time">Thời lượng(phút)<span>*</span></label>
                <input type="text" id="time" name="time" class="input-add" placeholder="Thời lượng" required onBlur={checkTime} onChange={(e)=>setTime(e.target.value)}></input>           
                <p id='errortime'> </p>
                <label for="trailer">Trailer<span>*</span></label><br></br>
                <input type="text" id="trailer" name="trailer" class="input-add" placeholder="Trailer"  required onChange={(e) => setTrailer(e.target.value)} ></input>
                <label for="poster">Poster<span>*</span></label><br></br>
                <input type="text" id="poster" name="poster" class="input-add" placeholder="Poster"  required onChange={(e) => setPoster(e.target.value)} ></input>             
                <label for="status">Trạng thái</label>
                <select name="cars" id="cars" onChange={(e) => setStatus(e.target.value)}>
                  <option value="Đã chiếu">Đã chiếu</option>
                  <option value="đang chiếu">Đang chiếu</option>
                </select>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new movie'></input>
            </div>
            </form>
      
    
    </div>
    
    </>
  );
}

export default Add_movie;
