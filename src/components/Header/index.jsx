import React from 'react'
import "./style.css"

export const Header = ({setView, showButtons}) => {
  return (
    <div>
        <h1>Bem Vindo</h1>
        {showButtons && (
            <>
                <button onClick={() => setView('login')}>Entrar</button>
                <button onClick={() =>setView('register')} >Cadastrar</button>
            </>
        )
        }
    </div>
  )
}