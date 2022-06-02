import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './CreateCategory.scss'

function CreateCategory() {
  const [tentheloai,setTentheloai]= useState("")
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(tentheloai);
    axios.post('/category', {tenTheLoai: tentheloai})
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
                <input type="text" id="tentheloai" name="tentheloai" class="input-add" placeholder="Tên thể loại" required  onChange={(e) => setTentheloai(e.target.value)}></input>
                
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new category'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default CreateCategory;
