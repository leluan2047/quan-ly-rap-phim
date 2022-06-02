import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './EditPosition.scss'

function EditPositon({category}) {
  const [tentheloai,setTentheloai]= useState(category.tenTheLoai)
  const [trangThai,setTrangThai]= useState(category.trangThai)
  console.log(category)

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(tentheloai);
    axios.put(`/category/${category.id}`, {tenTheLoai: tentheloai, trangThai:trangThai})
      .then(result => {
                        console.log(result)   
                        alert(result)           
                      })
      .catch( error =>{    
                       console.log(error)     
                       })       
  }
  return (
    <>
    <div className="createcategory" >
    {/* <div className='title-createcategory'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreatecategory' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="tentheloai">Tên thể loại<span>*</span></label>
                <input type="text" id="tentheloai" name="tentheloai" class="input-add" placeholder="Tên thể loại" required defaultValue={tentheloai} onChange={(e) => setTentheloai(e.target.value)}></input>
                <label for="trangthai">Trạng thái<span>*</span></label>
                <input type="text" id="trangthai" name="trangthai" class="input-add" placeholder="Trạng thái" required  defaultValue={trangThai} onChange={(e) => setTrangThai(e.target.value)}></input>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new category'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default EditPositon;
