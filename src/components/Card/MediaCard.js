import React from 'react'
import './MediaCard.css'
function MediaCard(props) {
  return (
    <div className='card-container'>
      <img src= {props.image} className="card-image"></img>
      <div className='card-button'>
          <div className='button'>Xem chi tiết</div>
          <div className='button'>Mua vé</div>
      </div>
    </div>
  )
}

export default MediaCard