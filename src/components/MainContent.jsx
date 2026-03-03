import React from 'react';

function MainContent(props){
  const getContent = () => {
    if (props.time === 'Morning') return "🌅 Good Morning! Here are your early sessions.";
    if (props.time === 'Afternoon') return "☀️ Good Afternoon! Here is the midday schedule.";
    return "🌙 Good Evening! Wrapping up the day.";
  };

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Schedule for {props.day}</h2>
      <h3 style={{ color: '#007bff' }}>Slot: {props.time}</h3>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
        {getContent()}
      </p>
      <div style={{ color: '#666' }}>
        <p>Displaying data for the {props.time} block on {props.day}...</p>
      </div>
    </div>
  );
};

export default MainContent;