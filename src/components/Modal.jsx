import { useState } from "react";

function Modal({ show, onClose, onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!show) return null;

  const handleConfirm = () => {
    onConfirm({ name, phone });
    setName("");
    setPhone("");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <h2>Log In</h2>

        <div className="modal-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
