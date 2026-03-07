import { useState, useEffect } from 'react';
import BookingPopup from './BookingPopup.jsx';

function TablePopupHandler({ day, time, bookings, setBookings, children }) {
  const [clickedTableId, setClickedTableId] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    setClickedTableId(null);
  }, [day, time]);

  const handleTableClick = (tableId, tableInfo) => {
    const currentState = bookings[`${day}_${time}`]?.[tableId] || 'available';
    
    if (currentState === 'occupied') return;
    
    if (currentState === 'booked') {
      setPopupMessage('Are you sure to cancel booking of this table?');
    } else {
      setPopupMessage('Do you want to book this table?');
    }
    
    setClickedTableId(tableId);
  };

  const handleConfirm = () => {
    if (!clickedTableId) return;
    
    setBookings(prev => {
      const slot = `${day}_${time}`;
      const currentState = prev[slot]?.[clickedTableId];
      const newState = currentState === 'booked' ? 'available' : 'booked';
      
      const updatedSlot = {
        ...prev[slot],
        [clickedTableId]: newState
      };
      return { ...prev, [slot]: updatedSlot };
    });
    
    setClickedTableId(null);
  };

  const handleCancel = () => {
    setClickedTableId(null);
  };

  return (
    <>
      {children({ handleTableClick, clickedTableId })}
      
      {clickedTableId && (
        <BookingPopup
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