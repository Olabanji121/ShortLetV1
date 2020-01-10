import React from "react";
import Services from "../components/Services";
import Featured from "../components/features/index";
import FeaturedRooms from "../components/FeaturedRooms";
import HowitWorks from '../components/HowitWorks';
import Location from '../components/location/index'
import Footer from '../components/header_footer/Footer';
import {Element} from 'react-scroll'
const Home = () => {
  return (
    <>
      <div
        className="app"
        // style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Featured />
        <Element name="topPicks">
        <FeaturedRooms/>
        </Element>
        <Services/>
        <HowitWorks/>
        <Location/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
