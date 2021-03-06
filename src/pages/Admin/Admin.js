// import { Button } from './Button';
import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Admin.scss';
import List_movie from '../../components/List_movie/List_movie'
import PersonalInfo from '../Account/PersonalInfo/PersonalInfo';
import List_KhachHang from '../../components/Staff/KhachHang/List_KhachHang/List_KhachHang';
import ListPosition from '../../components/Staff/Position/ListPosition/ListPositon';
import ListAdvertisement from '../../components/Staff/Advertisement/ListAdvertisement/ListAdvertisement';
import ListCategory from '../../components/Staff/Category/ListCategory/ListCategory';
import ListSchedule from '../../components/Staff/Schedule/ListSchedule/ListSchedule';
import GetAllRoom from '../../components/GetAllRoom/GetAllRoom';
import ListTicketType from '../../components/Staff/TicketType/ListTicketType/ListTicketType'
import ListTicket from '../../components/Staff/Ticket/ListTicket/ListTicket';
import Booking from '../../components/Staff/ByTicket/Booking';
import GetAllShowTime from "../../components/Staff/ShowTime/GetAllShowTime"
function Admin() {
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
                            <li> <Link className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} to='#'>QUẢN LÝ PHIM</Link></li>
                            <li> <Link className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} to='#'>QUẢN LÝ KHÁCH HÀNG</Link></li>
                            {/* <li> <Link className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)} to='#'>POSITION</Link></li> */}
                            <li> <Link className={toggleState === 5 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(5)} to='#'>QUẢNG CÁO</Link></li>
                            <li> <Link className={toggleState === 6 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(6)} to='#'>THỂ LOẠI PHIM</Link></li>
                            <li> <Link className={toggleState === 7 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(7)} to='#'>LỊCH CHIẾU</Link></li>
                            <li> <Link className={toggleState === 11 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(11)} to='#'>SUÂT CHIẾU</Link></li>
                            <li> <Link className={toggleState === 8 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(8)} to='#'>QUẢN LÝ PHÒNG</Link></li>
                            <li> <Link className={toggleState === 9 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(9)} to='#'>LOẠI VÉ</Link></li>
                          
                            
                        </ul>
                    </div>
                </div>
                <div class="main">
                    <div className='content-tabs'>
                        {toggleState === 1 &&
                            <div className="content">
                                <PersonalInfo></PersonalInfo>
                            </div>
                        }
                        {toggleState === 2 &&
                            <div className="content">
                                <List_movie></List_movie>
                            </div>
                        }
                        {toggleState === 3 &&
                            <div className="content">
                                <List_KhachHang></List_KhachHang>
                            </div>
                        }
                        {toggleState === 4 &&
                            <div className="content">
                                <ListPosition />
                            </div>
                        }
                        {toggleState === 5 &&
                            <div className="content">
                                <ListAdvertisement />
                            </div>
                        }
                        {toggleState === 6 &&
                            <div className="content">
                                <ListCategory />
                            </div>
                        }
                        {toggleState === 7 &&
                            <div className="content">
                                <ListSchedule />
                            </div>
                        }
                         {toggleState === 11 &&
                            <div className="content">
                                <GetAllShowTime></GetAllShowTime>
                            </div>
                        }
                        {toggleState === 8 &&
                            <div className="content">
                                <GetAllRoom></GetAllRoom>
                            </div>
                        }
                        
                        {toggleState === 9 &&
                            <div className="content">
                                <ListTicketType></ListTicketType>
                            </div>
                        }
                        {toggleState === 10 &&
                            <div className="content">
                                <Booking></Booking>
                            </div>
                        }
                    </div>
                </div>

            </div>

        </>
    );


}

export default Admin;
