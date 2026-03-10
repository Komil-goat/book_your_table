function PopupMessage({ 
  show, 
  type,
  message,     
  day,
  time,
  onConfirm, 
  onCancel 
}) {
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onCancel}>
      <div className="popup-window" onClick={(e) => e.stopPropagation()}>
        <h2>Confirm</h2>
        <p>{message}</p>
        
        {type === 'booking' && (
          <>
            <p><strong>Day:</strong> {day}</p>
            <p><strong>Time:</strong> {time}</p>
          </>
        )}

        <div className="popup-buttons">
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="confirm-btn" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default PopupMessage;