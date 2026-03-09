import React from 'react';
import Table from './Table.jsx';
import TABLES from '../data/tables.json';

function RoomLayout({ day, time, bookings, onTableClick, currentUser }) {
    return (
        <div className="tables-overlay">
            {Object.entries(TABLES).map(([tableId, tableInfo]) => (
                <Table
                    key={tableId}
                    tableId={tableId}
                    tableInfo={tableInfo}
                    state={bookings[`${day}_${time}`]?.[tableId] || 'available'}
                    onTableClick={onTableClick}
                    currentUser={currentUser}
                />
            ))}
        </div>
    )
}

export default RoomLayout;