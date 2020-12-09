import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    //RECEBE O RETORNO DO BACKEND
    const serverResponse = await api.post('/users/login', {email, password});
    
    //VERIFICA RETORNO DO BACKEND PARA SABER SE LOGA OU NÃO
    if (serverResponse.data === true) {
      history.push('/')
    } else {
      console.log('Usuário ou senha inválidos')
    }
  }

  return (
    <div className="login-container">
    <div className="login-section">
      <h1>Entre com seu email e senha </h1>

      <div className="login-form">
        <form action="">
          <div className="login-input">
            <label >Email</label>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="login-input">
            <label >Senha</label>
            <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" onClick={e => handleSubmit(e)} className="btn-login">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;

