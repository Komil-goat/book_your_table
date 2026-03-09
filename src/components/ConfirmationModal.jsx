import React from "react";

function ConfirmationModal({ show, message, onConfirm, onCancel }) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <h2>Confirm</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onCancel}>Cancel</button>
          <button className="confirm-btn" onClick={onConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;