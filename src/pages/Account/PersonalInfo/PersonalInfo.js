import React, { useState, useEffect } from "react";
import { axios } from "../../../axios";
import "./PersonalInfo.scss";
import { getProfile } from "../../../Service/Staff_service";
function PersonalInfo() {

  const [show, setShow] = useState(false);
  const [oldpass, setOldpass] = useState("");
  const [profile, setProfile] = useState([]);
  const [tenKH, setTenKH] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [CMND, setCMND] = useState("");
  const [SDT, setSDT] = useState("");

  const [matKhauCu, setMatKhauCu] = useState();
  const [matKhauMoi, setMatKhauMoi] = useState();
  const [XNmatKhau, setXNMatKhau] = useState();



  async function fetchData() {
    let res = await getProfile();
    setTenKH(res.data.khachHang.tenKH);
    setGioiTinh(res.data.khachHang.gioiTinh);
    setCMND(res.data.khachHang.CMND);
    setSDT(res.data.khachHang.SDT);
    console.log(res.data);
    setProfile(res.data);
  }
  useEffect(() => {
    console.log("personInfo render")

    fetchData();
  }, []);
  const handleChange = () => {
    if (show == false) setShow(true);
    else {
      setShow(false);
    }
  };

  const capNhatMatKhau = () => {
    if (matKhauCu) {
      if (matKhauCu != localStorage.getItem('password'))
        window.alert("Mật khẩu cũ sai")
      else if (matKhauMoi != XNmatKhau)
        window.alert("Xác nhận mật khẩu sai")
      else {
        axios
          .post("/users/me/change-password", {
            "oldPassword": matKhauCu,
            "newPassword": matKhauMoi
          })
          .then(res => {
            if (res.data.message === "Change password success")
              window.alert("Đổi mật khẩu thành công")
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }

    }
  }



  const handleSubmit = (e) => {

    e.preventDefault();

    var gioiTinh = document.querySelector("input:checked").value
    console.log(tenKH, gioiTinh, CMND, SDT);
    axios.put("/users/me", { tenKH: tenKH, gioiTinh: gioiTinh, CMND: CMND, SDT: SDT })
      .then(result => {

        if (result.data.message === "Update user success")
          window.alert("Cập nhật thông tin cá nhân thành công")

      })
      .catch(error => {
        alert(error.response.data.message)
      })


  }
  const content = show ? (
    ""
  ) : null;
  return (
    <>
      <div className="personal">
        <div className="page-title">
          <h1>THÔNG TIN CÁ NHÂN</h1>
        </div>
        <form

          autocomplete="off"
          id="form-validate"
          class="form-PersonnalInfo"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="div1">
            <div className="div_left">
              <div>
                <label for="username" class="required">
                  Username&nbsp;<span>*</span>
                </label>
                <div class="input-box">
                  <input
                    type="text"
                    defaultValue={profile.username}
                    readOnly
                  ></input>
                </div>
              </div>
              <div class="customer-name">
                <label for="fullname" class="required">
                  Tên&nbsp;<span>*</span>
                </label>
                <div class="input-box">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    defaultValue={tenKH}
                    title=""
                    placeholder=""
                    maxlength="255"
                    class="input-text required-entry"
                    onChange={(e) => setTenKH(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <label for="telephone" class="required">
                  Điện thoại&nbsp;<span>*</span>
                </label>
                <div class="input-box">
                  <input
                    type="tel"
                    autocapitalize="off"
                    autocorrect="off"
                    defaultValue={SDT}
                    name="telephone"
                    id="telephone"
                    title="Phone Number"
                    class="input-text validate-mobile required-entry"
                    onChange={(e) => setSDT(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <label for="gender" class="required">
                  Giới tính&nbsp;<span>*</span>
                </label>
                <div class="input-box">
                  {gioiTinh === "nam" ?
                    <div>
                      <input type="radio" name="gender" value="nam" required checked />
                      Nam&emsp;
                      <input type="radio" name="gender" value="nu" />
                      Nữ
                    </div>
                    :
                    <div>
                      <input type="radio" name="gender" value="nam" required />
                      Nam&emsp;
                      <input type="radio" name="gender" value="nu" checked />
                      Nữ

                    </div>
                  }

                </div>
              </div>
            </div>
            <div className="div_right">
              <div>
                <label for="cmnd" class="required">
                  CMND/CCCD&nbsp;<span>*</span>
                </label>
                <div class="input-box">
                  <input type="text" defaultValue={CMND} onChange={(e) => setCMND(e.target.value)}></input>
                </div>
              </div>




              {/* {content} */}
{/* 
              <div id="change" className="change">
                <div class="old_password">
                  <label for="region_id" class="required ">
                    Mật khẩu cũ&nbsp;<span>*</span>
                  </label>
                  <div class="input-box">
                    <input type="text" ></input>
                  </div>
                </div>
                <div class="new_password">
                  <label for="region_id" class="required ">
                    Mật khẩu mới&nbsp;<span>*</span>
                  </label>
                  <div class="input-box">
                    <input type="text" ></input>
                  </div>
                </div>
                <div class="re_password">
                  <label for="region_id" class="required ">
                    Nhập lại mật khẩu mới&nbsp;<span>*</span>
                  </label>
                  <div class="input-box">
                    <input type="text" ></input>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="div2">
            <div className="option_info">


              <div className="save">
                <button type="submit" title="Lưu lại" class="button_save">
                  Lưu lại
                </button>
              </div>
            {/* <hr></hr> */}

            </div>
          </div>
        </form>


        {/* <div className="myInfo-password">

          <h2>Cập nhật mật khẩu</h2>

          <div class="old_password">
            <label for="region_id" class="required ">
              Mật khẩu cũ&nbsp;<span>*</span>
            </label>
            <div class="input-box">
              <input type="password" onChange={e => setMatKhauCu(e.target.value)}></input>
            </div>
          </div>

          <div class="new_password">
            <label for="region_id" class="required ">
              Mật khẩu mới&nbsp;<span>*</span>
            </label>
            <div class="input-box">
              <input type="password" onChange={e => setMatKhauMoi(e.target.value)}></input>
            </div>
          </div>

          <div class="re_password">
            <label for="region_id" class="required ">
              Nhập lại mật khẩu mới&nbsp;<span>*</span>
            </label>
            <div class="input-box">
              <input type="password" onChange={e => setXNMatKhau(e.target.value)}></input>
            </div>
          </div>

          <div className="save">
            <button type="submit" title="Lưu lại" id="button_pass" onClick={capNhatMatKhau}>
              Cập nhật mật khẩu
            </button>
          </div>
        </div> */}


      </div>
    </>
  );
}

export default PersonalInfo;
