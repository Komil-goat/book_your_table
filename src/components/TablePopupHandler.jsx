import { useState, useEffect } from 'react';
import PopupMessage from './PopupMessage.jsx';
import TABLES from '../data/tables.json';

function TablePopupHandler({ day, time, bookings, setBookings, children, currentUser, onRequireLogin }) {
  const [clickedTableId, setClickedTableId] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    setClickedTableId(null);
  }, [day, time]);

  const handleTableClick = (tableId) => {
    if (!currentUser) {
      onRequireLogin();
      return;
    }

    const slot = `${day}_${time}`;
    let table = bookings[slot]?.[tableId];

    if (!bookings[slot]) {
      const newSlot = {};
      Object.keys(TABLES).forEach(id => {
        newSlot[id] = { state: 'available', userId: null };
      });
      setBookings(prev => ({ ...prev, [slot]: newSlot }));
      
      table = { state: 'available', userId: null };
    }

    if (table.state === 'occupied') return;

    if (table.state === 'booked') {
      if (table.userId === currentUser.id) {
        setPopupMessage('Do you want to cancel your booking?');
      } else {
        setPopupMessage('This table is booked by another user.');
        return;
      }
    } else if (table.state === 'available') {
      setPopupMessage('Do you want to book this table?');
    }

    setClickedTableId(tableId);
  };
   

  const handleConfirm = () => {
    if (!clickedTableId) return;
    const slot = `${day}_${time}`;
    const table = bookings[slot][clickedTableId];

    setBookings(prev => {
      let newTableState;

      if (table.state === 'booked' && table.userId === currentUser.id) {
        newTableState = { state: 'available', userId: null };
      } else if (table.state === 'available') {
        newTableState = { state: 'booked', userId: currentUser.id };
      } else {
        return prev;
      }

      return {
        ...prev,
        [slot]: {
          ...prev[slot],
          [clickedTableId]: newTableState
        }
      };
    });

    setClickedTableId(null);
  };

  const handleCancel = () => setClickedTableId(null);

  return (
    <>
      {children({ handleTableClick, clickedTableId })}

      {clickedTableId && (
        <PopupMessage
          show={true}
          type="booking"
          message={popupMessage}
          day={day}
          time={time}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}

export default TablePopupHandler;