import { Link } from "react-router"; 


function Navbar({ openLogin, openSignup, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>Cafe Booking</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/prices"><button>Prices</button></Link>
      </div>

      <div className="nav-right">
        <button onClick={openLogin}>Log In</button>
        <button onClick={openSignup}>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
