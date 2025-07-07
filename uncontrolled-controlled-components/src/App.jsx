import './App.css'
import { UncontrolledFlow } from './components/UncontrolledFlow'

const StepOne = ({goNext}) => {
  return (
    <div>
      <h1>I'm step one</h1>
      <button onClick={goNext}>Next</button>
    </div>
  )
}
const StepTwo = ({goNext}) => {
  return (
    <div>
      <h1>I'm step two</h1>
      <button onClick={goNext}>Next</button>
    </div>
  )
}
const StepThree = ({goNext}) => {
  return (
    <div>
      <h1>I'm step three</h1>
      <button onClick={goNext}>Next</button>
    </div>
  )
}
function App() {

  return (
    <>
      <UncontrolledFlow>
        <StepOne/>
        <StepTwo/>
        <StepThree/>
      </UncontrolledFlow>
    </>
  )
}



export default App
