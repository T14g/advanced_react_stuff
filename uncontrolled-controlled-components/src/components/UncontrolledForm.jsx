import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Nome: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" ref={nameRef} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" ref={emailRef} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default UncontrolledForm;
