import React from 'react'
import Services from './Services'
import Rooms from './Rooms'
import RoomsPreview from './RoomsPreview'
import Ratings from './Ratings'
import News from './News'
import SliderMain from './SliderMain'

const Home = () => {
    return (
      
      <div>
          <SliderMain/>
          <Services/>
          <Rooms/>
          <RoomsPreview/>
          <Ratings/>
          <News/>
      </div>      
    )
  }
  
  export default Home