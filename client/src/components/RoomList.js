import React from 'react';
import RoomComp from './RoomComp'

const RoomList = ({showSortedRooms}) => {

    if(showSortedRooms.length === 0){
        return(<div className="empty-search">
            <h3>unfortunately no Apartment matched your search </h3>
        </div>)
    }
    return (
        <section className="roomslist">
            <div className="roomslist-center">
            {showSortedRooms.map(showSortedRoom=>{
                return <RoomComp key={showSortedRoom.id} room={showSortedRoom}/>
            })}
            </div>
            
        </section>
    )
}

export default RoomList
