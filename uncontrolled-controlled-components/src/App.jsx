import './App.css'
import { ControlledFlow } from './components/ControlledFlow'
import React, { useState } from 'react';

const StepOne = ({goNext}) => {
  return (
    <div>
      <h1>Name Step</h1>
      <button onClick={()=>goNext({name: 'My name'})}>Next</button>
    </div>
  )
}
const StepTwo = ({goNext}) => {
  return (
    <div>
      <h1>Age Step</h1>
      <button onClick={()=>goNext({age: 30})}>Next</button>
    </div>
  )
}
const StepThree = ({goNext}) => {
  return (
    <div>
      <h1>Country Step</h1>
      <button onClick={()=>goNext({country: 'Brazil'})}>Finish</button>
    </div>
  )
}
function App() {
  const [data, setData] = useState({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const steps = [<StepOne />, <StepTwo />, <StepThree />];

  const goNext = (dataFromStep = {}) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = {
      ...data,
      ...dataFromStep,
    };
    setData(newData);
    if (nextStepIndex < steps.length) {
      setCurrentStepIndex(nextStepIndex);
    } else {
      console.log('Final Data:', newData);
      alert('You made it to the end! Check the console for data.');
      setCurrentStepIndex(0);
      setData({});
    }
  };

  return (
    <>
      <ControlledFlow
        goNext={goNext}
        currentStepIndex={currentStepIndex}
      >
        <StepOne />
        <StepTwo />
        {data.age > 10 && <StepThree />}
      </ControlledFlow>
    </>
  )
}

export default App
