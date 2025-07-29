import { useState } from 'react'
import './App.css'
import { UserInfoForm } from './components/user-form'

function App() {
  const [user, setUser] = useState({
    name: 'Sarah',
    age: 30,
    country: 'Brazil',
    books: ['Book 1', 'Book 2']
  });

  const onChangeUser = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  const onPostUser = () => {
    // Simula um post e salva o usuário (poderia ser um fetch/axios real)
    setTimeout(() => {
      alert('Usuário salvo!');
    }, 500);
  };

  const onResetUser = () => {
    setUser({
      name: 'Sarah',
      age: 30,
      country: 'Brazil',
      books: ['Book 1', 'Book 2']
    });
  };

  return (
    <>
      <UserInfoForm
        user={user}
        onChangeUser={onChangeUser}
        onPostUser={onPostUser}
        onResetUser={onResetUser}
      />
    </>
  )
}

export default App
