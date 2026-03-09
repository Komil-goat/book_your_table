import { useState, useEffect } from 'react';
import BookingPopup from './BookingPopup.jsx';

function TablePopupHandler({ day, time, bookings, setBookings, children, currentUser, onRequireLogin }) {
  const [clickedTableId, setClickedTableId] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');

  useEffect(() => {
    setClickedTableId(null);
  }, [day, time]);

  const handleTableClick = (tableId, tableInfo) => {
    if (!currentUser) {
      onRequireLogin();
      return;
    }

    const currentState = bookings[`${day}_${time}`]?.[tableId] || 'available';
    
    if (currentState === 'occupied') return;
    
    setPopupMessage(currentState === 'booked' 
      ? 'Are you sure to cancel booking of this table?' 
      : 'Do you want to book this table?'
    );

    setClickedTableId(tableId);
  };

  const handleConfirm = () => {
    if (!clickedTableId) return;

    setBookings(prev => {
      const slot = `${day}_${time}`;
      const currentState = prev[slot]?.[clickedTableId];
      const newState = currentState === 'booked' ? 'available' : 'booked';
      return {
        ...prev,
        [slot]: {
          ...prev[slot],
          [clickedTableId]: newState
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