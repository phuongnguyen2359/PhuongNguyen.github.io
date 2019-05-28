import React from 'react';
import logo from './logo.svg';

import Home from './components/Home'

import Header from './components/Header'
import Footer from './components/Footer'

import ContactPage from './components/ContactPage'
import GalleryPage from './components/GalleryPage'
import RoomsPage from './components/RoomsPage'
import AboutUsPage from './components/AboutUsPage'
import BlogsPage from './components/BlogsPage'

import './css/Main.css'
import './css/CustomMain.css'
// import './css/style.css'
import './css/customize-controls.css'
import './css/nivo-slider.css'
import './css/theme-responsive.css'
import BookingPage from './components/BookingPage'
import RoomDetailPage from './components/RoomDetailPage'
import TopHeader from './components/TopHeader'

import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <TopHeader/>
      <Route path='/' exact component={Home} />
      <Route path='/rooms' exact component={RoomsPage} />
      <Route path='/gallery' exact component={GalleryPage} />
      <Route path='/blogs' exact component={BlogsPage} />
      <Route path='/contact' exact component={ContactPage} />
      <Route path='/roomDetail' exact component={RoomDetailPage} />
      <Route path='/about' exact component={AboutUsPage} />
      <Route path='/booking' exact component={BookingPage} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
