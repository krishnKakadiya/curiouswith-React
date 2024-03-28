import Logo from "../assets/logo.jpg"

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

  export default Header;