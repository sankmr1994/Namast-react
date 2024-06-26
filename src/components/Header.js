import logo from "../../img/food-logo.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
