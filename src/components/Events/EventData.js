import { React, useState } from 'react'
import Event from "../../images/event.png";
import "./EventData.css";
import Carousel from 'react-elastic-carousel';

function EventData() {
    const [active, setActive] = useState(true);
    
    const setNews = () => {
        setActive(true);
    }
    const setMember = () => {
        setActive(false);
    }
    const breakPoints = [
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1100, itemsToShow: 4 },
    ]
    return (
        <div className='event-container'>
            <div className='event-logo'>
                <img src={Event}></img>
            </div>
            <div className='event-button-group'>
                <div className='event-button' onClick={setNews}>
                    {
                        active ? <i class="fa-solid fa-hand-point-right"></i> : ""
                    } Tin mới & ưu đãi
                </div>
                <div className='event-button' onClick={setMember}>
                    {
                        active ?  "":<i class="fa-solid fa-hand-point-right"></i> 
                    } Thành viên
                </div>
            </div>
            <div className={active ? "active-event event-news" : "event-news"}>
                <Carousel breakPoints={breakPoints}>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/w/e/web_240x201_18.jpg'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/w/e/web_240x201_18.jpg'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/w/e/web_240x201_18.jpg'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/w/e/web_240x201_18.jpg'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/w/e/web_240x201_18.jpg'></img>

                </Carousel>
            </div>
            <div className={active ? "event-member" : "active-event event-member"}>
                <Carousel breakPoints={breakPoints}>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'></img>
                    <img src='https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/u/2/u22_2022_240x201.png'></img>

                </Carousel>
            </div>
        </div>
    )
}

export default EventData