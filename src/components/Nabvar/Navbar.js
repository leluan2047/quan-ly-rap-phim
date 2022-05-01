import React,{useState} from 'react'
import logo from '../../../src/logo.png';
import { Link } from 'react-router-dom';
import "./Navbar.css";
function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick=()=>{
        setClick(!click); 
    }
    const closeMobileMenu=()=>{
        setClick(false);
    }

    
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='container-menu'>
                <Link to= '/' className='links'>
                    <i class="fa-solid fa-users-line"></i> Tuyển dụng
                </Link>
            </div>
            <div className='container-menu'>
                <Link to='/'  className='links'>
                    <i class="fa-solid fa-tags"></i> Tin tức và ưu đãi
                </Link>
            </div>
            <div className='container-menu'>
                <Link to ='/'  className='links'>
                    <i class="fa-solid fa-user"></i> Đăng nhập/ Đăng ký
                </Link>
            </div>
        </div>
        <div className='navbar-menu'>
            <div className='left-logo'>
                <Link to='/'  className='links'>
                    <img src = {logo}></img>
                </Link>
            </div>
            <div className='right-menu'>
                <div className='menu'>
                    <Link to='/'  className='links detail'>
                        Phim
                    </Link>
                    <div className='menu-content'>
                        <Link to='/a' className='links'>Phim đang chiếu</Link>
                        <Link to='/b' className='links'>Phim sắp chiếu</Link>
                    </div>
                </div>
                <div className='menu'>
                    <Link to = '/'  className='links'>
                        Rạp CGV
                    </Link>
                </div>
                <div className='menu'>
                    <Link to = '/' className='links'>
                        Thành viên
                    </Link>
                </div>
                <div className='menu'>
                    <Link to= '/' className='links'>
                        CULTUREPLEX
                    </Link>
                </div>
                <div className='menu-logo'>
                    <Link to='/' className='links'>
                        <img src = {require("../../../src/muave.png")}></img>
                    </Link>
                </div>
            </div>  
        </div>
       
    </div>
  )
}

export default Navbar