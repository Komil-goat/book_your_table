function BookingPopup({ message, day, time, onConfirm, onCancel }) {
  return (
    <div className="popup-overlay" onClick={onCancel}>
      <div className="popup-window" onClick={(e) => e.stopPropagation()}>
        <h3>{message}</h3>
        <p><strong>Day:</strong> {day}</p>
        <p><strong>Time:</strong> {time}</p>
        <div className="popup-buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default BookingPopup;