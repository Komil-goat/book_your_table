import React, { useState } from 'react'; 
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Filters from './components/Filters.jsx';
import MainContent from './components/MainContent.jsx';
import Prices from './components/Prices.jsx';
import Auth from "./components/Auth.jsx";
import "./components/Modal.css";
import "./components/Navbar.css";

function App() {
  const [day, setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }));
  const [time, setTime] = useState('Morning');
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [auth, setAuth] = useState(null); 
  
  const openLogin = () => setAuth("login");
  const openSignup = () => setAuth("signup");
  const closeAuth = () => setAuth(null);

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
        />
      </div>

      
      <main>
        <Routes>
          <Route path="/" element={
            <div style={{ margin: '0 auto', fontFamily: 'Arial', alignItems: 'center', padding: '20px' }}>
              <h1>Project Dashboard</h1>
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
              />
            </div>
          } />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
