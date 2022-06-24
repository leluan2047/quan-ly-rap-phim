import React, { useEffect, useState } from 'react'
import { axios } from "../../../axios";
import "./EditShowTime.scss";
import moment from 'moment'

function EditShowTime(props) {
    const [danhSachLichChieu, setDanhSachLichChieu] = useState([]);

    const [maLichChieu, setMaLichChieu] = useState("");
    const [tenSuatChieu, setTenSuatChieu] = useState("")
    const [trangThai, setTrangThai] = useState("")

    const [thoiGianBatDau, setThoiGianBatDau] = useState("")
    const [thoiGianKetThuc, setThoiGianKetThuc] = useState("")


    const getDachSachLichChieu = () => {
        axios
            .get(`/schedule`)
            .then(function (res) {
                setDanhSachLichChieu(res.data);
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    const getData = () => {
        axios
            .get(`/showtime/${props.id}`)
            .then(function (res) {
                setMaLichChieu(res.data.maLichChieu);
                setTenSuatChieu(res.data.tenSuatChieu);
                setTrangThai(res.data.trangThai);
                setThoiGianBatDau(moment.utc(res.data.timeStart).format('YYYY-MM-DDTHH:mm:ss'));
                setThoiGianKetThuc(moment.utc(res.data.timeEnd).format('YYYY-MM-DDTHH:mm:ss'));

            })
            .catch(function (err) {
                console.log(err)
            })
    }

    useEffect(() => {
        getDachSachLichChieu();
        getData();
    }, [])



    const checkDay = () => {
        var startTime = new Date(thoiGianBatDau)
        var endTime = new Date(thoiGianKetThuc);
        var toDay = new Date();

        if (startTime < toDay) {
            window.alert("Không thể chọn ngày bắt đầu trước hiện tại");
            return false;
        }

        else if (startTime >= endTime) {
            window.alert("Thời gian kết thúc phải sau thời gian bắt đầu")
            return false;
        }

        else
            return true;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkDay()) {
            const fetchData = () => {
                axios
                    .put(`/showtime/${props.id}`, {
                        "maLichChieu": maLichChieu,
                        "tenSuatChieu": tenSuatChieu,
                        "timeStart": thoiGianBatDau + ".000z",
                        "timeEnd": thoiGianKetThuc + ".000z"
                    })
                    .then(res => {
                        if (res.data.message === "Update showtime successfully")
                            window.alert("Cập nhật suất chiếu thành công")
                        else {
                            window.alert("Cập nhật suất chiếu thất bại")
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            fetchData();
        }
        // console.log(thoiGianBatDau)
    }

    return (
        <div className='editShowTime-container'>
            <div className='title'>
                <h1 >Sửa&ensp;suất chiếu&ensp;</h1>
            </div>


            <form className='editShowTime-form' onSubmit={handleSubmit} >
                <label for="lichChieu">Lịch chiếu<span>*</span></label>
                <select name='lichChieu' onChange={(e) => setMaLichChieu(e.target.value)} value={maLichChieu}>
                    {danhSachLichChieu.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{moment.utc(item.ngayChieu).format('YYYY-MM-DD ')}</option>
                        )
                    })}
                </select>

                <label for="tenSuatChieu">Tên suất chiếu<span>*</span></label>
                <input name="tenSuatChieu" className="input-add" required value={tenSuatChieu} onChange={e => setTenSuatChieu(e.target.value)} ></input>

                <label for="trangThai">Trạng thái<span>*</span></label>
                <input name="trangThai" className="input-add" required value={trangThai} onChange={e => setTrangThai(e.target.value)}></input>

                <label for="timeStart">Thời gian bắt đầu<span>*</span></label>
                <input type="datetime-local" name="thoiGianBatDau" className="input-add" required
                    value={thoiGianBatDau}
                    onChange={e => setThoiGianBatDau(
                        e.target.value
                    )}></input>

                <label for="endTime">Thời gian kết thúc<span>*</span></label>
                <input type="datetime-local" name="thoiGianKetThuc" className="input-add" required
                    value={thoiGianKetThuc}
                    onChange={e => setThoiGianKetThuc(
                        e.target.value
                    )}></input>

                <div className='submit-add'>
                    <input type='submit' value='Sửa suất chiếu'></input>
                </div>
            </form>
        </div>
    )
}

export default EditShowTime