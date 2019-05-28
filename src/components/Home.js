import React from 'react'
import Header from './Header'
import Services from './Services'
import Rooms from './Rooms'
import RoomsPreview from './RoomsPreview'
import Ratings from './Ratings'
import News from './News'
import Footer from './Footer'

const Home = () => {
    return (
      
      <div>
          <Services/>
          <Rooms/>
          <RoomsPreview/>
          <Ratings/>
          <News/>
      </div>      
    )
  }
  
  export default Home