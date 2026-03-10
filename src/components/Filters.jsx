import React from 'react';

function Filters(props) {
  const days = [0, 1, 2, 3, 4].map((offset) => {
    const date = new Date();
    date.setDate(date.getDate()+1 + offset);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
  });

  const timeSlots = ['Morning', 'Afternoon', 'Evening'];

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px', background: '#f4f4f4', borderRadius: '8px' }}>
      <div>
        <label>Select Day: </label>
        <select value={props.currentDay} onChange={(e) => props.onDayChange(e.target.value)}>
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Select Time: </label>
        <select value={props.currentTime} onChange={(e) => props.onTimeChange(e.target.value)}>
          {timeSlots.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;