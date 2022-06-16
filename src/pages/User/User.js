// import { Button } from './Button';
import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import "./User.scss";
import { getProfile } from "../../Service/Staff_service";
import { axios } from "../../axios";
import PersonalInfo from "../Account/PersonalInfo/PersonalInfo";
import ListBook from "../../components/User/Booking/ListBook";
function User() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [value, setValue] = useState("");
  return (
    <>
      <div class="menu-user">
        <div class="menu">
          <div class="title">
            <strong>
              <span class="block-title">TÀI KHOẢN CGV</span>
            </strong>
          </div>
          <div class="content-menu">
            <ul className="bloc-tabs">
              <li>
                {" "}
                <Link
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                  to="#"
                >
                  THÔNG TIN CÁ NHÂN
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                  to="#"
                >
                  LỊCH SỬ ĐẶT VÉ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="main">
          <div className="content-tabs">
            <br></br>
            {toggleState === 1 &&
              <div
                className="content"
              >
                {/* <PersonalInfo></PersonalInfo> */}
              </div>
            }
            {toggleState === 2 &&
              <div
                className="content"
              >
                <ListBook></ListBook>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
