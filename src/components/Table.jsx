import React from 'react';

function Table({ tableId, tableInfo, state, onTableClick, currentUser }) {
    const { position, size, number, image } = tableInfo;

    const tableStyle = {
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size.width}%`,
        height: `${size.height}%`,
        transform: 'translate(-50%, -50%)',
    };

    const handleClick = () => {
        if (state.state !== 'occupied') {
            onTableClick(tableId, tableInfo);
        }
    };

    let stateStr = 'available';
    if (state.state === 'booked') {
        stateStr = (currentUser && state.userId === currentUser.id) ? 'booked' : 'occupied';
    } else if (state.state === 'occupied') {
        stateStr = 'occupied';
    }

    return (
        <div
            className={`table table-${stateStr}`}
            style={tableStyle}
            onClick={handleClick}
            title={`Table ${number} - ${stateStr}`}
        >
            <img src={`src/images/${image}-${stateStr}.png`} alt={`Table ${number}`} />
            <span className="table-number">{number}</span>
        </div>
    );
}

export default Table;