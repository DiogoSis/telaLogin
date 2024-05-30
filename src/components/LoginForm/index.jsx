import React, { useState } from 'react'
import "./style.css"

const LoginForm = ({ onBack }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email, password)
    }

  return (
    <form action={handleSubmit}>
        <div>
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label>Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.password)} />
        </div>
        <button type='submit'>Entrar</button>
        <button type='button' onClick={onBack} >Voltar</button>
    </form>
  )
}

export default LoginForm
