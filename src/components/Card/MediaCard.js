import React from 'react'
import Details_movie from '../Details_movie/Details_movie'
import './MediaCard.scss'
import {useNavigate}  from 'react-router-dom'
function MediaCard(props) {

 const navigate = useNavigate()
  const XemChiTiet = (e) =>
  {
   e.preventDefault()
   
    // navigate()
    
  }

  return (
    <div className='card-container'>
      <img src={props.image} className="card-image"></img>
      <div className='card-button'>
        <div className='button' onClick={(e)=>XemChiTiet(e)}>Xem chi tiết </div>
        <div className='button'>Mua vé</div>
      </div>
    </div>
  )
}

export default MediaCard