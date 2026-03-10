import React from "react";

function Unavailable({ currentUser, bookings }) {
    if (!currentUser) return <p style={{ padding: '20px' }}>Please log in to see the unavailable slots.</p>;
    const userReservations = [];
    Object.entries(bookings).forEach(([slot, tables]) => {
        Object.entries(tables).forEach(([tableId, tableInfo]) => {
            
            if (tableInfo.userId !== currentUser.id && tableInfo.state === 'booked') {
                
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
    return (
        <div style={{ padding: '20px' }}>
            <h2>Unavailable Slots</h2>
            {userReservations.length === 0 ? (
                <p>No unavailable slots found.</p>
            ) : (
                <ul>
                    {userReservations.map((reservation) => (
                        <li key={reservation.id}>
                            {reservation.day} at {reservation.time} -  {reservation.tableId}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Unavailable;