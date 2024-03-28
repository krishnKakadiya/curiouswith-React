import React, { useState, useEffect } from "react";

import { restaurantList } from "../utiles/mockData";

import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // locale state variable  - super powerful variable

  const [list, setList] = useState(restaurantList);

  // const list = arr[0];
  // const setList  = arr[1];
  // const [state, setState] = arr;  // useState is simple return array with two method one is defalut state and secondis setstate method update according requirement.
  console.log("list", list);

  return (
    <div className="body" style={{ backgroundColor: "#a2d2ff" }}>
      <div className="serach">
        <input type="text" placeholder="enter your desire dish or resturent" />
        <button className="btn">search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterData = restaurantList.filter((item) => item?.avgRating > 4.3);
            setList(filterData);
          }}
        >
          Top Rated Restroaurant
        </button>
      </div>
      <div className="restaurant-list">
        {list?.map((restoaurant, id) => {
          return <RestaurantCard restoaurantD={restoaurant} key={id} />;
        })}
        {/* <RestaurantCard /> */}
      </div>
    </div>
  );
};

export default Body;
