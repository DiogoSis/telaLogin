import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
  const [view, setView] = useState('login')

  return (
    <div className='container'>
      <div>Imagem aqui</div>
      
      <div className='sidebar'>
        <Header setView={setView} />
      </div>
      <div className='main-content'>
        {view === 'login'? <LoginForm /> : <RegisterForm/>}
      </div>
    </div>
  )
}

export default App
