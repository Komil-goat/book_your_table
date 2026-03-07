import React, { useState } from 'react';
import RoomLayout from './RoomLayout';
import TablePopupHandler from './TablePopupHandler.jsx';
import TABLES from '../data/tables.json';
import './MainContent.css';
import './BookingPopup.css';

function MainContent(props) {
  const initializeBookings = () => {
    const slot = `${props.day}_${props.time}`;
    const tablesObj = {};

    Object.keys(TABLES).forEach(tableId => {
      tablesObj[tableId] = 'available';
    });

    return {
      [slot]: tablesObj
    };
  };

  const [bookings, setBookings] = useState(initializeBookings());

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Schedule for {props.day}</h2>
      <h3 style={{ color: '#007bff' }}>Slot: {props.time}</h3>

      <div className="room">
        <img src="src/images/room-plan.png" alt="" />
        
        <TablePopupHandler
          day={props.day}
          time={props.time}
          bookings={bookings}
          setBookings={setBookings}
        >
          {({ handleTableClick, clickedTableId }) => (
            <RoomLayout
              day={props.day}
              time={props.time}
              bookings={bookings}
              onTableClick={handleTableClick}
              clickedTableId={clickedTableId}
            />
          )}
        </TablePopupHandler>
      </div>
    </div>
  );
}

export default MainContent;