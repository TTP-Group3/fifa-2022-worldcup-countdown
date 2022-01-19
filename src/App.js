import React from 'react';
import { Element } from 'react-scroll';
import './resources/styles.css';

import Header from './components/header_footer/Header.js';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import About from './components/about/about';
import Linker from './components/linker/linker';
import Map from './components/map/map';
import AboutUs from './components/aboutus/AboutUs';


function App() {
  return (
    <div className="App" style={{ height:"1500px" }}>
      <Header />
      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venueInfo">
        <VenueInfo />
      </Element>

      <Element name="highlight">
        <About />
      </Element>

      <Element name="pricing">
        <Linker />
      </Element>

      <Element name="location">
        <Map />
      </Element>

      <AboutUs />
    </div>
  );
}

export default App;
