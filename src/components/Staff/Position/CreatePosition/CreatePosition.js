import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './CreatePosition.scss'

function CreatePositon() {
  const [tenCV,setTenCV]= useState("")
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(tenCV);
    axios.post('/positions', {tenCV: tenCV})
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
    <div className="createpositon" >
    {/* <div className='title-createcategory'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreatepositon' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="tenCV">Tên công việc<span>*</span></label>
                <input type="text" id="tenCV" name="tenCV" class="input-add" placeholder="Tên CV" required  onChange={(e) => setTenCV(e.target.value)}></input>
                
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new positon'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default CreatePositon;
