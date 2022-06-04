import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './EditCategory.scss'

function EditCategory({category}) {
  const [tentheloai,setTentheloai]= useState(category.tenTheLoai)
  const [trangThai,setTrangThai]= useState("active")
  console.log(category)

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(tentheloai);
    axios.put(`/category/${category.id}`, {tenTheLoai: tentheloai, trangThai:trangThai})
      .then(result => {
                        console.log(result)   
                        alert(result.data.message)           
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
                <select name="trangthai" id="trangthai"onChange={(e) => setTrangThai(e.target.value)} value={trangThai}>
                 <option value="active">active</option>
                 <option value="deleted">deleted</option>
                </select>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new category'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default EditCategory;
