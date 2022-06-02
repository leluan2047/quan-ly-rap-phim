// import { Button } from './Button';
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.scss';
import List_movie from '../../components/List_movie/List_movie'
import PersonalInfo from '../Account/PersonalInfo/PersonalInfo';
import List_KhachHang from '../../components/List_KhachHang/List_KhachHang';
import ListPosition from '../../components/Staff/Position/ListPosition/ListPositon';
import ListAdvertisement from '../../components/Staff/Advertisement/ListAdvertisement/ListAdvertisement';
import ListCategory from '../../components/Staff/Category/ListCategory/ListCategory';
import ListSchedule from '../../components/Staff/Schedule/ListSchedule/ListSchedule';
// import ListPosition from '../../components/Staff/Position/ListPosition/ListPositon';

function Admin()  {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
      setToggleState(index);
    };  
    return (
        <>
        <div class="menu-admin">
                <div class="menu">
                        <div class="title">
                            <strong><span class="block-title" >TÀI KHOẢN CGV</span></strong>
                        </div>
                        <div class="content-menu">
                            <ul className='bloc-tabs' >
                                <li> <Link className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} to='#'>THÔNG TIN CÁ NHÂN</Link></li>
                                <li> <Link  className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} to='#'>QUẢN LÝ PHIM</Link></li>  
                                <li> <Link  className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} to='#'>QUẢN LÝ KHÁCH HÀNG</Link></li> 
                                <li> <Link  className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)} to='#'>POSITION</Link></li>
                                <li> <Link  className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)} to='#'>ADVERTISEMENT</Link></li>                    
                                <li> <Link  className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)} to='#'>CATEGORY</Link></li>
                                <li> <Link  className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)} to='#'>SCHEDULE</Link></li>                    
                                <li> <Link  className={toggleState === 8 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(8)} to='#'>ROOM</Link></li>
                            </ul>               
                        </div>    
                </div>
                <div class="main">
                    <div className='content-tabs'> 
                        <div className={toggleState === 1 ? "content active-content " : "content"}> 
                        <PersonalInfo></PersonalInfo> 
                        </div>
                        <div className={toggleState === 2 ? "content active-content " : "content "}>
                        <List_movie></List_movie> 
                        </div>
                        <div className={toggleState === 3 ? "content active-content " : "content "}>
                        <List_KhachHang></List_KhachHang> 
                        </div>
                        <div className={toggleState === 4 ? "content active-content " : "content "}>
                        <ListPosition/>
                        </div>
                        <div className={toggleState === 5 ? "content active-content " : "content "}>
                        <ListAdvertisement/>
                        </div>
                        <div className={toggleState === 6 ? "content active-content " : "content "}>
                        <ListCategory/>
                        </div>
                        <div className={toggleState === 7 ? "content active-content " : "content "}>
                        <ListSchedule/>
                        </div>
                        <div className={toggleState === 8 ? "content active-content " : "content "}>
                        {/* <List_KhachHang></List_KhachHang>  */}
                        </div>
                    </div>
                </div>
            
        </div>
        
        </>
        );


}

export default Admin;
