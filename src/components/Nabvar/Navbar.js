import React, { useState } from 'react'
import "./Navbar.scss";
import logo from '../../../src/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { axios } from "../../axios"
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const navigate = useNavigate();
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const logout = () => {
        // axios
        //     .get("/users/logout")
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

        localStorage.clear();
        navigate("/")
    }

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div className='container-menu'>
                    <Link to='/' className='links'>
                        <i class="fa-solid fa-users-line"></i> Tuyển dụng
                    </Link>
                </div>
                <div className='container-menu'>
                    <Link to='/' className='links'>
                        <i class="fa-solid fa-tags"></i> Tin tức và ưu đãi
                    </Link>
                </div>
                <div className='container-menu' >
                    {
                        localStorage.getItem("userName") != null ?
                            <Link to={localStorage.getItem('role') === "admin" ? "/admin" : "/user"} className='links' style={{ width: "50px" }}>
                                <i class="fa-solid fa-user"></i> Xin chào {localStorage.getItem("userName")},
                            </Link>

                            :

                            <Link to='/login' className='links'>
                                <i class="fa-solid fa-user"></i> Đăng nhập/ Đăng ký
                            </Link>
                    }
                    {
                        localStorage.getItem("userName") != null ?
                            <Link to='/' className='links' style={{ width: "50px" }} onClick={e => { logout() }}>
                                &ensp; Đăng xuất
                            </Link>

                            :

                            ""
                    }
                </div>
            </div>
            <div className='navbar-menu'>
                <div className='left-logo'>
                    <Link to='/' className='links'>
                        <div style={{ width: '150px', height: '150px' }}>
                            <img style={{ width: '100%', height: '100%', objectFit: "contain" }}
                                src={logo}
                            >

                            </img>
                        </div>
                    </Link>
                </div>
                <div className='right-menu'>
                    <div className='menu'>
                        <Link to='/' className='links'>
                            Phim
                        </Link>
                        <div className='menu-content'>
                            <Link to='/movies/dangChieu' className='links'>Phim đang chiếu</Link>
                            <Link to='/movies/sapChieu' className='links'>Phim sắp chiếu</Link>
                        </div>
                    </div>
                    <div className='menu'>
                        <Link to='/' className='links'>
                            Rạp CGV
                        </Link>
                        {/* <div className='menu-content'>
                            <Link to='/a' className='links'>Rap Viet</Link>
                            <Link to='/b' className='links'>Rap Duc</Link>
                            <Link to='/b' className='links'>Rap Duc</Link>

                        </div> */}
                    </div>
                    <div className='menu'>
                        <Link to='/' className='links'>
                            Thành viên
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link to='/' className='links'>
                            CULTUREPLEX
                        </Link>
                    </div>
                    <div className='menu-logo'>
                        <Link to='/' className='links'>
                            <img src={require("../../../src/muave.png")}></img>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar