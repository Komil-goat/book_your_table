import React from "react";

function Unavailable({ currentUser, bookings }) {
    if (!currentUser) return <p className="section-empty">Please log in to see the unavailable slots.</p>;
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
        <div className="section-div">
            <h2 className="section-heading">Unavailable Slots</h2>
            {userReservations.length === 0 ? (
                <p className="section-empty">No unavailable slots found.</p>
            ) : (
                <ul className="booking-list unordered-list">
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