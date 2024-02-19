import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./assets/logo.jpg";
import { restaurantList } from "./RestaurantData";
import "./style/main.css";

console.log("restaurantList", restaurantList);

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
                
*/

const Header = () => {
  return (
    <div className="header" style={{backgroundColor:"#264653"}}>
      <div className="log-container">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="nav-items">
        <ul style={{color:"wheat"}}>
          <li>Foods</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log('props', props?.restoaurantD?.data);


  // const {area} = props?.restoaurantD?.data || {}

  // console.log('resto', restoaurantD?.restoaurantD?.data?.avgRating);
  

  const {name, cuisines, area, avgRating, lastMileTravelString, costForTwoString, cloudinaryImageId} = props?.restoaurantD?.data || {};

  
    return (
      <div className="card"  style={{backgroundColor:"#cdb4db"}}>
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
        />
  
        <h2>{name}</h2>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{area} </h4>
        <span>
          <h4>
            <i className="fa-solid fa-star">{avgRating}</i>5.5
          </h4>
          <h4>{lastMileTravelString}</h4>
          <h4>{costForTwoString}</h4>
        </span>
      </div>
    );
};

const Body = () => {
  return (
    <div className="body" style={{backgroundColor:"#a2d2ff"}}>
      <div className="serach" >
        <input  type="text" placeholder="enter your desire dish or resturent" />
        <button className="btn">search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restoaurant) => {

          return (
            <RestaurantCard  restoaurantD={restoaurant} key={restoaurant?.data?.id}/>
          )
        })}
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />

      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
