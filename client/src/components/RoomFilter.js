import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
// import { handleChange } from "../data";

// get all unique value

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  // console.log(context);

  const {
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    location,
    handleChange
  } = context;
  //   types///
  //   get unique types
  let types = getUnique(rooms, "type");
  // get all types
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // location //
  let locations = getUnique(rooms, "location");
  // get all types
  locations = ["all", ...locations];
  // map to jsx
  locations = locations.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // capacity //
  let capacities = getUnique(rooms, "capacity");
  // get all types
  //   capacities = ["all", ...capacities];
  // map to jsx
  capacities = capacities.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search Apartments" styleClass="section-title" />
      <form className="filter-form ">
        {/* select type */}
        <div className="form-group2">
          <label htmlFor="type">type of apartment</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control2"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* location */}
        <div className="form-group2">
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={location}
            className="form-control2"
            onChange={handleChange}
          >
            {locations}
          </select>
        </div>
        {/* end location */}
        {/* capacity */}
        <div className="form-group2">
          <label htmlFor="capacity">Number of Occupant</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control2"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        {/* end capacity */}
        {/*price */}

        <div className="form-group2">
          <label htmlFor="price">room price &#8358;{price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control2"/>
        </div>
        {/* endprice */}
      </form>
    </section>
  );
};

export default RoomFilter;
