import {axios} from "../axios";

const getAllMovies = () =>
{
    return axios.get("/movies")
}
const getAllCategory = () =>
{
    return axios.get("/category")
}
const getAllSchedule =async () =>
{
    var schedules = await (await axios.get("/schedule")).data.filter((schedule) =>
    {
        return schedule.trangThai === 'Chuẩn bị chiếu'
    })
    return schedules
}
const getAllPosition = () =>
{
    return axios.get("/positions")
}
const getAllTicketTpye = () =>
{
    return axios.get("/positions")
}
const getAllAdvertisement = async () =>
{
    var ads = await (axios.get("/advertisement"))
    return ads
}
const getKhachHang = () =>
{
    return axios.get("/users/khach-hangs")
}
const getProfile = () =>
{
    return axios.get("/users/me")
}
export {
    getAllMovies,
    getAllCategory,
    getAllSchedule,
    getAllPosition,
    getAllTicketTpye,
    getAllAdvertisement,
    getKhachHang,
    getProfile
}