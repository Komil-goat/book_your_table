import React from 'react';
import Table from './Table.jsx';
import TABLES from '../data/tables.json';

function RoomLayout({ day, time, bookings, onTableClick }) {
    return (
        <div className="tables-overlay">
            {Object.entries(TABLES).map(([tableId, tableInfo]) => (
                <Table
                    key={tableId}
                    tableId={tableId}
                    tableInfo={tableInfo}
                    state={bookings[`${day}_${time}`]?.[tableId] || 'available'}
                    onTableClick={onTableClick}
                />
            ))}
        </div>
    )
}

export default RoomLayout;