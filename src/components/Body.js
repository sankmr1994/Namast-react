import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { resList } from "../utils/mockData";

export const Body = () => {
  let [listOfRes, setListOfRes] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic
            const filterRes = listOfRes.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRes(filterRes);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-main">
        <div className="res-container">
          {listOfRes.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
