import React from "react";
import bigTableImg from "../images/big-table-occupied.png";
import roundTableImg from "../images/round-table-occupied.png";
import smallTableImg from "../images/small-table-occupied.png";

const tables = [
  { name: "Big Table", price: 50, capacity: 11, img: bigTableImg, height: 200, rotate: true },
  { name: "Round Table", price: 35, capacity: 8, img: roundTableImg, height: 150 },
  { name: "Small Table", price: 35, capacity: 8, img: smallTableImg, height: 100 },
];

function Prices() {
  return (
    <div style={{ padding: 20, width: "95%", fontFamily: "Arial", border: "1px solid #ddd", borderRadius: 8 }}>
      <h1>Price List</h1>

      {tables.map((table, idx) => (
        <div key={idx} style={{ display: "flex", gap: 20, marginBottom: 20 }}>
          <div>
            <h3>{table.name}</h3>
            <p>Price: ${table.price} per time slot</p>
            <p>Capacity: Up to {table.capacity} people</p>
          </div>
          <img
            src={table.img}
            alt={table.name}
            style={{
              height: table.height,
              width: "auto",
              marginLeft: 20,
              transform: table.rotate ? "rotate(90deg)" : "none"
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default Prices;