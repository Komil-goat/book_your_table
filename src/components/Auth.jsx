import { useState } from "react";

function Auth({ show, mode, onClose, users, setUsers, setCurrentUser, onSuccess }) {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [alertMessage, setAlertMessage] = useState ("");

  const showPopup = (msg) => {
    setAlertMessage(msg);
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  }

  if (!show) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      showPopup("Fill all fields");
      return;
    }

    if (mode === "login") {
      const user = users.find(
        (u) => u.name === form.name && u.phone === form.phone
      );

      if (user) {
        setCurrentUser(user);
        onClose();
      } else {
        showPopup("User not found. You have to sign up.");
      }
    } else {
      const exists = users.some(
        (u) => u.name === form.name && u.phone === form.phone
      );

      if (exists) {
        showPopup("User already exists");
        return;
      }

      const newUser = {
        id: Date.now(),
        name: form.name,
        phone: form.phone,
      };

      setUsers([...users, newUser]);
      setCurrentUser(newUser);
      onClose();
      onSuccess("Account created!");
    }

    setForm({ name: "", phone: "" });
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-window"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>{mode === "login" ? "Log In" : "Sign Up"}</h2>

          <form className="modal-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />

            <div className="modal-buttons">
              <button
                type="button"
                className="cancel-btn"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="confirm-btn"
              >
                {mode === "login" ? "Log In" : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {alertMessage && (
        <div className="alert-popup">
          {alertMessage}
        </div>
      )}
    </>
  );
}

export default Auth;
