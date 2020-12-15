import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

function CreateUsers() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const register = async (e) => {
    e.preventDefault();

    //VERIFICA SE OS CAMPOS FORAM PREENCHIDOS E RETORNA DO BACKEND
    if (name === '' || email === '' || password === '') {
      alert('favor preencher todos os dados')
    } else {
        const serverResponse = await api.post('/users/create', {name, email, password})  

        if (serverResponse.data === true) {
          history.push('/')
        } else {
          alert(Error)
        }
    }
  }

  return (
    <div className="login-container">
    <div className="login-section">
      <h1>Cadastre-se </h1>

      <div className="login-form">
        <form action="">
          <div className="login-input">
            <label >Nome</label>
            <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
          </div>
          <div className="login-input">
            <label >Email</label>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="login-input">
            <label >Senha</label>
            <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn-login" onClick={e => register(e)}>Cadastrar</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreateUsers;

