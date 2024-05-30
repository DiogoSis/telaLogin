import React, { useState } from 'react'
import './style.css'

const RegisterForm = ({ onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }
    console.log('Nome:', name, 'Email:', email, 'Idade:', age, 'Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Idade</label>
        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} required />
      </div>
      <div>
        <label>Senha</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Confirme a Senha</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </div>
      <button type="submit">Cadastrar</button>
      <button type='button' onClick={onBack} >Voltar</button>
    </form>
  );
};

export default RegisterForm;
