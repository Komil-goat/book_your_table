import React from "react";

function MyBookings({currentUser, bookings, setBookings}) {
    if (!currentUser) return <p style={{ padding: '20px' }}>Please log in to see your bookings.</p>;
    const userReservations = [];
    Object.entries(bookings).forEach(([slot, tables]) => {
        Object.entries(tables).forEach(([tableId, tableInfo]) => {
            
            if (tableInfo.userId === currentUser.id && tableInfo.state === 'booked') {
                
                const [day, time] = slot.split('_'); 
                
                userReservations.push({
                    id: `${slot}_${tableId}`,
                    slotKey: slot, 
                    tableId,
                    day,
                    time
                });
            }
        });
    });
    const handleCancel = (slotKey, tableId) => {
        setBookings(prev => ({
            ...prev,
            [slotKey]: {
                ...prev[slotKey],
                [tableId]: { state: 'available', userId: null }
            }
        }));
    };
    return (
        <div style={{ padding: '20px' }}>
      <h2>My Reservations</h2>
      {userReservations.length === 0 ? (
        <p>You haven't booked any tables yet.</p>
      ) : (
        <div className="booking-list">
          {userReservations.map((res) => (
            <div key={res.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px' }}>
              <p><strong>Table:</strong> {res.tableId}</p>
              <p><strong>When:</strong> {res.day} during {res.time}</p>
              <button 
                onClick={() => handleCancel(res.slotKey, res.tableId)}
                style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    );
}

export default MyBookings;