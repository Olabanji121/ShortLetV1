import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "../components/Loading";
import { useContext } from "react";
import { RoomContext } from "../Context";

const RoomsContainer = () => {
  const context = useContext(RoomContext);

  // console.log(value);

  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }

  return (
    <>
     
      <RoomFilter rooms={rooms} />
      <RoomList showSortedRooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
