import React, { useState, useEffect } from 'react';
import RoomLayout from './RoomLayout';
import TablePopupHandler from './TablePopupHandler.jsx';
import TABLES from '../data/tables.json';
import './MainContent.css';
import './BookingPopup.css';

function MainContent(props) {
  const createEmptySlot = () => {
    const tablesObj = {};
    Object.keys(TABLES).forEach(tableId => {
      tablesObj[tableId] = { state: 'available', userId: null };
    });
    return tablesObj;
  };

  const slotKey = `${props.day}_${props.time}`;
  const [bookings, setBookings] = useState({ [slotKey]: createEmptySlot() });

  useEffect(() => {
    const newSlotKey = `${props.day}_${props.time}`;
    setBookings(prev => {
      if (!prev[newSlotKey]) {
        return { ...prev, [newSlotKey]: createEmptySlot() };
      }
      return prev;
    });
  }, [props.day, props.time]);

  return (
    <div style={{ marginTop: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Reservation for {props.day}</h2>
      <h3 style={{ color: '#007bff' }}>Slot: {props.time}</h3>

      <div className="room">
        <img src="src/images/room-plan.png" alt="" />
        
        <TablePopupHandler
          day={props.day}
          time={props.time}
          bookings={bookings}
          setBookings={setBookings}
          currentUser={props.currentUser}
          onRequireLogin={props.openLogin}
        >
          {({ handleTableClick, clickedTableId }) => (
            <RoomLayout
              day={props.day}
              time={props.time}
              bookings={bookings}
              onTableClick={handleTableClick}
              clickedTableId={clickedTableId}
              currentUser={props.currentUser}
            />
          )}
        </TablePopupHandler>
      </div>
    </div>
  );
}

export default MainContent;