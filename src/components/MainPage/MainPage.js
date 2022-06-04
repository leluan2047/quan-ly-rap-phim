import { React, useEffect, useState } from 'react'
import "./MainPage.scss";
import movieSection from "../../images/movieSection.png";
import Carousel from 'react-elastic-carousel';
import MediaCard from '../Card/MediaCard';
import EventData from '../Events/EventData';
import Advertisement from '../Advertisement/Advertisement';
import { getAllMovies } from '../../Service/Staff_service';
function MainContent() {
 
  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1100, itemsToShow: 4 },
  ]
  const [movies, setMovies] = useState([])
 
    useEffect( () =>
        {
            async function fetchData()
            {
                let res = await getAllMovies();
                setMovies(res)
                console.log(res)
            }
            fetchData()
        },[] 
    )
  return (
    <>
    <div className='mainPage-container'>
      <div className='movie-section'>
        <img src={movieSection}></img>
      </div>
      <div className='infinite-carousel'>
        <Carousel breakPoints={breakPoints}>
          {
            movies.map(item => {
              return (
                <MediaCard image={item.poster} id = {item.id}></MediaCard>
              );
            })
          }
        </Carousel>
      </div>
      <EventData></EventData>
      <hr width="87%" align="center" size="10px" color="#241D1E" />
      <Advertisement></Advertisement>
      <hr width="100%" align="center" size="10px" color="#241D1E" />
    </div>
   
    </>

  )
}

export default MainContent