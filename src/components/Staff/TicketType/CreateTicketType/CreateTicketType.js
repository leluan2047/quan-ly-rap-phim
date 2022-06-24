import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './CreateTicketType.scss'

function CreateTicketType() {

  const [tenloaive,setTenloaive] = useState("")

  const [giave,setGiave] =  useState("")
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    axios.post('/ticketType', {tenLoaiVe: tenloaive, giaVe: giave})
      .then(result => {
                        console.log(result)   
                        alert(result.statusText)           
                      })
      .catch( error =>{    
                       console.log(error)     
                       })       
  }
  return (
    <>
    <div className="createtickettype" >
    {/* <div className='title-createtickettype'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreatepositon' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
            <label for="tenloaive">Tên loại vé<span>*</span></label>
                <input name="tenloaive" className="tenloaive" required onChange={(e) => setTenloaive(e.target.value)} ></input>
                <label for="giave">Giá vé(VNĐ) <span>*</span></label>
                <input type="text" id="giave" name="giave" class="input-add" placeholder="Giá vé" required  onChange={(e) => setGiave(e.target.value)}></input>   
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new ticket type'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default CreateTicketType;
