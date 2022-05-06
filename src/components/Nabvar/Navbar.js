import React,{useState} from 'react'
import "./Navbar.scss";
import logo from '../../../src/logo.png';
import { Link } from 'react-router-dom';

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
        <div className='navbar-container'>
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
                <Link to ='/login'  className='links'>
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
                    <Link to='/'  className='links'>
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
                    <div className='menu-content'>
                        <Link to='/a' className='links'>Rap Viet</Link>
                        <Link to='/b' className='links'>Rap Duc</Link>
                        <Link to='/b' className='links'>Rap Duc</Link>
                       
                    </div>
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