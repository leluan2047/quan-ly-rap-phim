// import { Button } from './Button';
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.scss';
import  {axios}  from '../../axios';
import List_movie from '../../components/List_movie/List_movie'
import { getProfile } from '../../Service/Staff_service';
import PersonalInfo from '../Account/PersonalInfo/PersonalInfo';
import List_KhachHang from '../../components/List_KhachHang/List_KhachHang'
function Admin()  {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };  
    return (
        <>
        <div class="menu-user">
                <div class="menu">
                        <div class="title">
                            <strong><span class="block-title" >TÀI KHOẢN CGV</span></strong>
                        </div>
                        <div class="content-menu">
                            <ul className='bloc-tabs' >
                                <li> <Link className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} to='#'>THÔNG TIN CÁ NHÂN</Link></li>
                                <li> <Link  className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} to='#'>QUẢN LÝ PHIM</Link></li>  
                                <li> <Link  className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} to='#'>QUẢN LÝ KHÁCH HÀNG</Link></li>                     
                            </ul>               
                        </div>    
                </div>
                <div class="main">
                    <div className='content-tabs'> 
                        <div className={toggleState === 1 ? "content active-content " : "content"}> 
                        {/* <PersonalInfo></PersonalInfo>  */}
                        </div>
                        <div className={toggleState === 2 ? "content active-content " : "content "}>
                        <List_movie></List_movie> 
                        </div>
                        <div className={toggleState === 3 ? "content active-content " : "content "}>
                        <List_KhachHang></List_KhachHang> 
                        </div>
                    </div>
                </div>
            
        </div>
        
        </>
        );


}

export default Admin;
