import { Link } from "react-router"; 
import React, { useState } from "react";
import PopupMessage from "./PopupMessage.jsx";

function Navbar({ openLogin, openSignup, currentUser, setCurrentUser }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogoutClick = () => setShowLogoutConfirm(true);
  const handleConfirmLogout = () => {
    setCurrentUser(null);
    setShowLogoutConfirm(false);
  };
  const handleCancelLogout = () => setShowLogoutConfirm(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>Cafe Booking</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/prices"><button>Prices</button></Link>
        <Link to="/my-bookings"><button>My Bookings</button></Link>
        <Link to="/unavailable"><button>Unavailable Slots</button></Link>
      </div>

      <div className="nav-right">
        {currentUser ? (
          <>
            <span>Hi, {currentUser.name}</span>
            <button onClick={handleLogoutClick}>Log Out</button>
          </>
        ) : (
          <>
            <button onClick={openLogin}>Log In</button>
            <button onClick={openSignup}>Sign Up</button>
          </>
        )}
      </div>
      
      <PopupMessage
        show={showLogoutConfirm}
        type="confirm"
        message="Are you sure you want to log out?"
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </nav>
  );
}

export default Navbar;