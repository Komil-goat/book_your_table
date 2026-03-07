import React from 'react';

//defining <Table /> explicitly (as a tag)
function Table({ tableId, tableInfo, state, onTableClick }) {
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
            <img src={`src/images/${image}-${state}.png`}
                alt={`Table ${number}`}
            />
            <span className="table-number">{number}</span>
        </div>
    );
}

export default Table;