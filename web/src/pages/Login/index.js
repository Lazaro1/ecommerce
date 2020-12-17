import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';
import CardFeatured from '../../components/CardFeatured';

function Login() {
  const history = useHistory();
  const [screenState, setScreenState] = useState('signin');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [users, setUsers] = useState([]);


  useEffect(() => {
    getAll();
  }, [])


  const getAll = async (e) => {
    const serverResponse = await api.get('/users'); //GetAll
    setUsers(serverResponse.data)
  }

  const handleSignin = async (e) => {
    e.preventDefault();

    //RECEBE O RETORNO DO BACKEND
    try {
      const serverResponse = await api.post('/users/login', { email, password });

      //VERIFICA RETORNO DO BACKEND PARA SABER SE LOGA OU NÃO
      if (serverResponse.data !== '') {
        localStorage.setItem('@ecommerce/user/id', serverResponse.data.id);
        localStorage.setItem('@ecommerce/user/name', serverResponse.data.name);
        history.push('/')
      } else {
        alert('Usuário ou senha inválidos')
      }
    } catch (error) {
      alert('Houve um erro: ' + error.message)
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      //VERIFICA SE OS CAMPOS FORAM PREENCHIDOS E RETORNA DO BACKEND
      if (name === '' || email === '' || password === '') {
        alert('favor preencher todos os dados')
        return
      }

      const serverResponse = await api.post('/users', { name, email, password })

      console.log(serverResponse)

      if (serverResponse.data === true) {
        history.push('/')
      } else {
        alert(Error)
      }

    } catch (error) {
      alert('Houve um erro: ' + error.message)
    }
  }


  if (screenState === 'signin')
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
              <div className='login-btn'>
                <button type="submit" onClick={e => handleSignin(e)} >Login</button>
              </div>
            </form>
            <div className='login-link'>
              <a href="#" onClick={() => setScreenState('signup')}> Ainda não tenho uma conta </a>
            </div>
            

            {users.map((user) => (
              <CardFeatured 
                image="https://scontent.fplu21-1.fna.fbcdn.net/v/t1.0-9/37223220_2014289588615316_1402173394689982464_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfCToNOK7EFV8urDbWND5ax6Z1xjnO28rHpnXGOc7byhEf3vfPju8nh_R4vl9Ysd7TTEf5Ll1vyM78VISjRJeF&_nc_ohc=q-6_IFYObCIAX8MVTIp&_nc_ht=scontent.fplu21-1.fna&oh=5e4bbe1b5eef34359530aebaeae3aacf&oe=5FFCFE1D"
                title={user.email} 
                description={user.password} />
            ))}
          </div>
        </div>
      </div>
    )

  else if (screenState === 'signup')
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
              <button type="submit" className="btn-login" onClick={e => handleSignup(e)}>Cadastrar</button>
            </form>
            <div className='login-link'>
              <a href="#" onClick={() => setScreenState('signin')}> Fazer login. </a>
            </div>
            
          </div>
        </div>
      </div>
    )
}

export default Login;

