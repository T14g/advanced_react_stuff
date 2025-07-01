import './App.css'
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import UncontrolledModal from './components/UncontrolledModal';
import ControlledModal from './components/ControlledModal';
import React, { useRef, useState } from 'react';

function App() {
  const modalRef = useRef();
  const [showControlledModal, setShowControlledModal] = useState(false);

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, background: '#fafafa', borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
      <h1>Exemplos de Componentes React</h1>
      <section style={{ marginBottom: 32 }}>
        <h2>Controlled Form</h2>
        <ControlledForm />
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2>Uncontrolled Form</h2>
        <UncontrolledForm />
      </section>
      <section style={{ marginBottom: 32 }}>
        <h2>Uncontrolled Modal</h2>
        <UncontrolledModal/>
      </section>
      <section>
        <h2>Controlled Modal</h2>
        <button onClick={() => setShowControlledModal(true)} style={{ padding: '8px 16px', fontSize: 16 }}>Show Controlled Modal</button>
        <ControlledModal open={showControlledModal} onClose={() => setShowControlledModal(false)} />
      </section>
    </div>
  )
}

export default App
