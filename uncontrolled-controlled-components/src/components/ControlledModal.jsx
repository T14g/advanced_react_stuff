import React from "react";

const ControlledModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 300 }}>
        <h2>Controlled Modal</h2>
        <p>Este modal é controlado pelo parent (App.jsx)!</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ControlledModal;
