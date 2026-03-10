import React, { useState } from 'react'; 
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Filters from './components/Filters.jsx';
import MainContent from './components/MainContent.jsx';
import Prices from './components/Prices.jsx';
import Auth from "./components/Auth.jsx";
import MyBookings from './components/MyBookings.jsx';
import Unavailable from './components/Unavailable.jsx';
import "./styles/Modal.css";
import "./styles/PopupMessage.css";
import "./styles/Navbar.css";
import "./styles/Sections.css";

function App() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const formattedDate = date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });
  const [day, setDay] = useState(formattedDate);
  const [time, setTime] = useState('Morning');
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth, setAuth] = useState(null); 
  const [bookings, setBookings] = useState({});
  
  const openLogin = () => setAuth("login");
  const openSignup = () => setAuth("signup");
  const closeAuth = () => setAuth(null);

  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (msg) => {
    setAlertMessage(msg);
    setTimeout(() => setAlertMessage(""), 3000);
  };

  return (
    <>
      <div>
        <Navbar
          openLogin={openLogin}
          openSignup={openSignup}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />

        <Auth
          show={auth !== null}
          mode={auth}
          onClose={closeAuth}
          users={users}
          setUsers={setUsers}
          setCurrentUser={setCurrentUser}
          onSuccess={showAlert}
        />
        {alertMessage && (
          <div className="alert-popup">
            {alertMessage}
          </div>
        )}
      </div>

      
      <main>
        <Routes>
          <Route path="/" element={
            <div style={{ margin: '0 auto', fontFamily: 'Arial', alignItems: 'center', padding: '20px' }}>
              <h1>Reserve your table!</h1>
              <Filters 
                currentDay={day} 
                onDayChange={setDay} 
                currentTime={time} 
                onTimeChange={setTime} 
              />
              <MainContent 
                day={day} 
                time={time} 
                currentUser={currentUser} 
                openLogin={openLogin}
                bookings={bookings}
                setBookings={setBookings}
              />
            </div>
          } />
          <Route path="/prices" element={<Prices />} />
          <Route path="/my-bookings" element={
            <MyBookings 
              bookings={bookings} 
              currentUser={currentUser} 
              setBookings={setBookings}
            />
          } />
          <Route path="/unavailable" element={
            <Unavailable
              bookings={bookings}
              currentUser={currentUser}
            />
          }>
          </Route>
        </Routes>
      </main>

    </>
  );
}

export default App;
