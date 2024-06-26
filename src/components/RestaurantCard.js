import { CLOUDINARY_IMAGE_ID } from "../utils/constant";

export const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <div className="img-cointainer">
        <img
          className="res-logo"
          src={CLOUDINARY_IMAGE_ID + cloudinaryImageId}
        ></img>
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};
