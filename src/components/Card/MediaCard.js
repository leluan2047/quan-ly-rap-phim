import React, { useState } from "react";
import Details_movie from "../Details_movie/Details_movie";
import "./MediaCard.scss";
import Popup from "../Popup";
function MediaCard(props) {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <>
      <div className="card-container">
        <img src={props.image} className="card-image"></img>
        <div className="card-button">
          <div className="button" onClick={() => setOpenPopup(true)}>
            Xem chi tiết{" "}
          </div>
          <div className="button">Mua vé</div>
        </div>
      </div>
      <Popup
        // title="Edit movie"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Details_movie id={props.id}></Details_movie>
      </Popup>
    </>
  );
}

export default MediaCard;
