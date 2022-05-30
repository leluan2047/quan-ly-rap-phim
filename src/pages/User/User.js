// import { Button } from './Button';
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './User.scss';
import  {axios}  from '../../axios';
 function Account()  {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    const [value,setValue] = useState("")
    useEffect =(e) =>
    {
       
    }
   
     async function   Check(e)
   {
   e.preventDefault()
  ////AXIOS
  const token = localStorage.getItem('token')
//    await axios.get('/users/me',{params:{id: localStorage.getItem('id')}})
console.log(token)

await axios.get('/users/me')
.then( res => {
               alert("hell")
                const currentUser = res.data
                console.log(currentUser)
                // setValue(currentUser.data);   
                // console.log(value.name)
                })
    .catch(err =>{
        console.log(err)
        alert("hell0000")
    } );
   }
         
        return (
            <>
            <div class="menu-user">
              
                    <div class="menu">
                            
                            <div class="title">
                                <strong><span class="block-title" >TÀI KHOẢN CGV</span></strong>
                            </div>
                            <div class="content-menu">
                            
                                <ul className='bloc-tabs' >
                                   
                                    <li> <Link className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} to='profile'>THÔNG TIN CÁ NHÂN</Link></li>
                                    <li> <Link  className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} to='#'>LỊCH SỬ ĐẶT VÉ</Link></li>                  
                                </ul>
                                
                            </div>    
                     
                    </div>
                    <div class="main">
                        <div className='content-tabs'> 
                            <div className={toggleState === 1 ? "content active-content " : "content"}> 
                            {/* <PersonalInfo></PersonalInfo>  */}
                            </div>
                            {/* <div className={toggleState === 2 ? "content active-content " : "content "}>
                            <PersonalInfo></PersonalInfo> 
                            
                            </div> */}
                        </div>
                    </div>
              
            </div>
         
            </>
          );
   
  
}

export default Account;