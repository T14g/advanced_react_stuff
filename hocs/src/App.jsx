import { useState } from 'react'
import { logProps } from './components/log-props'
import { includeUser } from './components/include-user'
import './App.css'
import UserInfo from '../../container-pattern/src/components/user-info'

const UserInfoWrapper = logProps(UserInfo)
const UserIncludeWrapper = includeUser(UserInfo, "1234")

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <UserInfoWrapper test="1234" user={{ name: 'Sarah', age: 30, country: 'Brazil', books: ['Book 1', 'Book 2'] }} /> */}
      <UserIncludeWrapper />
    </>
  )
}

export default App
