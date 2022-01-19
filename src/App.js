import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header.js';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo/';
import About from './components/about/about.js';
import Linker from './components/linker/linker.js';
import Map from './components/map/map.js';
import AboutUs from './components/aboutus/AboutUs.js';


class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:"1500px", background:'#444444'}}>
        <Header/>
        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueInfo">
          <VenueInfo/>
        </Element>

        <Element name="highlight">
          <About/>
        </Element>

        <Element name="pricing">
          <Linker/>
        </Element>

        <Element name="location">
          <Map/>
        </Element>

        <AboutUs/>
      </div>
    );
  };
}

export default App;
