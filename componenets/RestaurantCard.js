import CDN_URL from "../utiles/constant";

const RestaurantCard = (props) => {
  // console.log("props", props?.restoaurantD?.data);
  // const {area} = props?.restoaurantD?.data || {}
  // console.log('resto', restoaurantD?.restoaurantD?.data?.avgRating);
  // const {
  //   name,
  //   cuisines,
  //   area,
  //   avgRating,
  //   lastMileTravelString,
  //   costForTwoString,
  //   cloudinaryImageId,
  // } = props?.restoaurantD?.data || {};
  const {
    name,
    cuisines,
    area,
    avgRating,
    lastMileTravelString,
    costForTwoString,
    cloudinaryImageId,
  } = props?.restoaurantD || {};


  return (
    <div className="card" style={{ backgroundColor: "#cdb4db" }}>
      <img src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{area} </h4>
      <span>
        <h4>
          <i className="fa-solid fa-star">{avgRating}</i>
        </h4>
        <h4>{lastMileTravelString}</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
