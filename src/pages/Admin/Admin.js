// import { Button } from './Button';
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.scss';
import  {axios}  from '../../axios';

function Admin()  {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };
    useEffect( () =>
    {
        async function fetchData()
        {
            await axios.get('/users/me')
            .then( res => {
                const currentUser = res.data
                console.log(currentUser)})
            .catch(err => {
                console.log(err)
            } );
        }
        fetchData()
    },[] )    
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
                                <li> <Link  className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} to='#'>QUẢN LÝ PHIM</Link></li>                  
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

export default Admin;
