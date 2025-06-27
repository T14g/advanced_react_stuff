import React, { useImperativeHandle, useRef, useState, forwardRef } from "react";

const UncontrolledModal = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <button onClick={() => setVisible(true)}>Show Modal</button>
            {visible && (<div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 300 }}>
                <h2>Uncontrolled Modal</h2>
                <p>Este modal é controlado internamente!</p>
                <button  onClick={() => setVisible(false)}>Close Modal</button>
            </div>)}</>
    );
};

export default UncontrolledModal;
