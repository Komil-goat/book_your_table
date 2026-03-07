import React from 'react';

//defining <Table /> explicitly (as a unit)
function Table({ tableId, tableInfo, state, onTableClick }) {
    const { position, number } = tableInfo;

    const tableStyle = {
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
    };

    const handleClick = () => {
        if (state !== 'occupied') {
            onTableClick(tableId, tableInfo);
        }
    };

    return (
        <div
            className={`table table-${state}`}
            style={tableStyle}
            onClick={handleClick}
            title={`Table ${number} - ${state}`}
        >
            {number}
        </div>
    );
}

export default Table;