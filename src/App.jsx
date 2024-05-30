import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
  const [view, setView] = useState(null)
  const [showButtons, setShowButtons] = useState(true)

  const handleViewChange = (newView) => {
    setView(newView)
    setShowButtons(false)
  }
  const handleBack = () =>{
    setView(null)
    setShowButtons(true)
  }

  return (
    <div className='container'>
      <div>
        <img src="../img/dr" alt="doutora" />
      </div>

      <div className='sidebar'>
        <Header setView={handleViewChange} showButtons={showButtons} />
      </div>
      <div className='main-content'>
        {view === 'login' && <LoginForm onBack={handleBack} />}
        {view === 'register' && <RegisterForm onBack={handleBack} />}
      </div>
    </div>
  )
}

export default App
