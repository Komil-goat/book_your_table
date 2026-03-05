import React, { useState } from 'react'; 
import Filters from './components/Filters.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
  const [day, setDay] = useState(new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }));
  const [time, setTime] = useState('Morning');

  return (
    <div style={{ maxWidth: '94vw', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Project Dashboard</h1>  
      <Filters 
        currentDay={day} 
        onDayChange={setDay} 
        currentTime={time} 
        onTimeChange={setTime} 
      />
      <MainContent day={day} time={time} />
    </div>
  );
}

export default App;