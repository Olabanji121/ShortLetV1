import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import RoomsContainer from '../components/RoomsContainer';
import {Link} from 'react-router-dom'


const Rooms = () => {
    return (
        <>
       <Hero styleClass= "roomsHero">
           <Banner title ='Apartments'>
                <Link to='/' className="text-uppercase btn btn-primary2  mt-3">Back to home</Link>
           </Banner>
       </Hero>
       <RoomsContainer/>
       </>
    )
}

export default Rooms
