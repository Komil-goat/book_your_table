import React from 'react';
import Table from './Table.jsx';
import TABLES from '../data/tables.json';

/** READ_ME
 * RoomLayout Component
 * 
 * Purpose:
 * - Acts as a CONTAINER for all table components
 * 
 * Props:
 * @param {string} day - Selected day (e.g., "2026-03-05")
 * @param {string} time - Selected time slot (e.g., "morning")
 * @param {object} bookings - Object with booking states for all day/time combinations
 * Structure: { "2026-03-05_morning": { "table_1": "available", ... } }
 * @param {function} onTableClick - Callback function triggered when user clicks a table
 * Receives: (tableId, tableInfo)
 */

function RoomLayout({ day, time, bookings, onTableClick }) {

    /**
     * KEY CONCEPT: Object.entries()
     * 
     * What it does:
     * Converts an object into an array of [key, value] pairs
     * 
     * Example:
     * TABLES = { "table_1": {...}, "table_2": {...} }
     * 
     * Object.entries(TABLES) returns:
     * [
     *   ["table_1", { id: "table_1", seats: 11, ... }],
     *   ["table_2", { id: "table_2", seats: 8, ... }],
     *   ...
     * ]
     * 
     * Why use it?
     * ✓ Allows us to loop through tables with .map()
     * ✓ Gives us both the ID and the data in one go
     */

    return (
        <div className="room">
            {Object.entries(TABLES).map(([tableId, tableInfo]) => (
                //initializing tables one by one
                <Table
                    key={tableId}
                    tableId={tableId}
                    tableInfo={tableInfo}
                    state={bookings[`${day}_${time}`]?.[tableId] || 'available'}
                    /**
                    * ?.[tableId] → Optional chaining - safely gets the state
                    * Returns: "available" or "booked" or "occupied"
                    * || "available" → Default fallback if undefined
                    * If day/time doesn't exist yet, assume available
                    */
                    onTableClick={onTableClick}
                />
            ))}
        </div>
    )
}

export default RoomLayout;

/**
    * RENDERING EACH TABLE
    * 
    * What happens here:
    * 1. Loop through each table in TABLES
    * 2. For each table, create a <Table /> component
    * 3. Pass all necessary data and functions as props
    * 
    * Key prop: 'key'
    * - React uses 'key' to uniquely identify list items
    * - Helps React optimize re-renders
    * 
    * 
    * Example flow:
        * Step 1: day = "2026-03-05", time = "morning"
        * Step 2: Key = "2026-03-05_morning"
        * Step 3: bookings["2026-03-05_morning"] = { "table_1": "available", "table_2": "booked" }
        * Step 4: state for table_1 = "available"
        * Step 5: Table component receives state="available"
        * Step 6: CSS class becomes "table-available" (green color)
        * 
*/