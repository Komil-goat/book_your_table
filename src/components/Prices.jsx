import React from "react";  
import bigTableImg from '../images/big-table-occupied.png';

function Prices() {
    return (
        <div style={{ padding: '20px' , width: '80%', margin: '0 px', fontFamily: 'Arial', border: '1px solid #ddd', borderRadius: '8px' }}>
            <h1>Price List</h1>
            <img src={bigTableImg} alt="Big Table" style={{width: '60px', height: '40px'}}/>
            <h3>Big Table</h3>
            <p>Price: $50 per time slot</p>
            <p>Capacity: Up to 11 people</p>
        </div>
    );
}

export default Prices;