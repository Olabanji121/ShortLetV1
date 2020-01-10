import React, { Component } from 'react';
import {RoomContext} from '../Context';
import Loading from './Loading';
import RoomComp from './RoomComp';
import Title from './Title'


export default class FeaturedRooms extends Component {

    static contextType = RoomContext
    render() {

        let {loading, featuredRooms: rooms} = this.context
         rooms = rooms.map(room =>{
            return <RoomComp key={room.id} room={room}/>
        })
        
        
        return (
            <section className="featured-rooms">
                <Title title={"Today's Top Apartments"}  styleClass= {"featured-title"}/>
                <div className="featured-rooms-center text-center">
                    {loading? <Loading/>: rooms}
                </div>
                
            
            </section>
        )
    }
}
