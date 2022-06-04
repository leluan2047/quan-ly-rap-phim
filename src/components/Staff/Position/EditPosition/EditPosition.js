import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './EditPosition.scss'

function EditPositon({position}) {
  const [tenCV,setTenCV]= useState(position.tenCV)
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    axios.put(`/positions/${position.id}`, {tenCV: tenCV})
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
    <div className="createposition" >
    {/* <div className='title-createposition'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreateposition' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="tencv">Tên công việc<span>*</span></label>
                <input type="text" id="tencv" name="tencv" class="input-add" placeholder="Tên công việc" required defaultValue={tenCV} onChange={(e) => setTenCV(e.target.value)}></input>
                
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new positon'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default EditPositon;
