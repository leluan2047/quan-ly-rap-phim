import {axios} from "../axios";

const getAllMovies = async () =>
{
    var movies = await (await axios.get("/movies")).data.filter((movie) =>
    {
        return movie.trangThai === 'đang chiếu'
    })
    console.log(movies)
    return movies
}
const getAllCategory = async() =>
{
    var categories = await (await axios.get("/category")).data.filter((category) =>
    {
        return category.trangThai === 'active'
    })
    return categories
    
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
    return axios.get("/ticketType")
}
const getAllTicket = () =>
{
    return axios.get("/ticket")
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
    getProfile,
    getAllTicket
}