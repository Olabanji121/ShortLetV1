import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";


// with this i have access to provider and consumer
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    isLogin: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    location: "all",
    pets: false
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let { rooms, type, location, price, capacity } = this.state;

    // all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by location
    if (location !== "all") {
      tempRooms = tempRooms.filter(room => room.location === location);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    // change state
    this.setState({
      sortedRooms: tempRooms
    });
  };
  // getData
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "shortLetNgData",
        // order: "sys.createdAt"
        order: "fields.price"
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData = arryItems => {
    let tempItems = arryItems.map(arryItem => {
      let id = arryItem.sys.id;
      let images = arryItem.fields.images.map(image => image.fields.file.url);

      let rooms = { ...arryItem.fields, images, id };

      return rooms;
    });

    return tempItems;
  };

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

 
 
  render() {
    
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          setLogin() {
            this.setState({ ...this.state, isLogin: true });
          },
          setLogout() {
            this.setState({ ...this.state, isLogin: false });
          },
          handleChange: this.handleChange,
         
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
