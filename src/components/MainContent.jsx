import React from 'react';
import './MainContent.css'
function MainContent(props){

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Schedule for {props.day}</h2>
      <h3 style={{ color: '#007bff' }}>Slot: {props.time}</h3>
      <div class="room">
        
      </div>
    </div>
  );
};

export default MainContent;