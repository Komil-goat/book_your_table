import React, { useState } from 'react'; 
import Filters from './components/Filters.jsx';
import MainContent from './components/MainContent.jsx';
import Auth from "./components/Auth.jsx";
import "./components/Modal.css";

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
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Project Dashboard</h1>
      <Filters 
        currentDay={day} 
        onDayChange={setDay} 
        currentTime={time} 
        onTimeChange={setTime} 
      />
      <MainContent day={day} time={time} />
    </div>
    
    <div>
      <Navbar openLogin={openLogin} openSignup={openSignup} />

      <AuthModal
        auth={auth}
        onClose={closeAuth}
        users={users}
        setUsers={setUsers}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}

export default App;
