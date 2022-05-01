import { React } from 'react'
import movieSection from "../../images/movieSection.png";
import Carousel from 'react-elastic-carousel';
import MediaCard from '../Card/MediaCard';
import "./MainPage.css";
import EventData from '../Events/EventData';
import Advertisement from '../Advertisement/Advertisement';
import Footer from '../Footer/Footer';

function MainContent() {
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1100, itemsToShow: 4 },
  ]
  const data = [
    'https://thegioidienanh.vn/stores/news_dataimages/hath/072019/09/15/5450_Main.jpg',
    'https://thegioidienanh.vn/stores/news_dataimages/hath/072019/09/15/5450_Main.jpg',
    'https://thegioidienanh.vn/stores/news_dataimages/hath/072019/09/15/5450_Main.jpg',
    'https://thegioidienanh.vn/stores/news_dataimages/hath/072019/09/15/5450_Main.jpg',
    'https://thegioidienanh.vn/stores/news_dataimages/hath/072019/09/15/5450_Main.jpg'
  ];
  return (
    <div className='mainPage-container'>
      <div className='movie-section'>
        <img src={movieSection}></img>
      </div>
      <div className='infinite-carousel'>
        <Carousel breakPoints={breakPoints}>
          {
            data.map(item => {
              return (
                <MediaCard image={item}></MediaCard>
              );
            })
          }
        </Carousel>
      </div>
      <EventData></EventData>
      <hr  width="87%" align="center" size="10px" color="#241D1E" />
      <Advertisement></Advertisement>
      <hr  width="100%" align="center" size="10px" color="#241D1E" />
      <Footer></Footer>
    </div>
  )
}

export default MainContent