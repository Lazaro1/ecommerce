import React from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css';
import AppBar from '../../components/AppBar';

function Home() {
    
    const history = useHistory()

    function navigateToLogin () {
      history.push('login')
      console.log('ola')
    }

    return (
      <div className="home-container">
        <h1> Home </h1>
        <button className='teste' onClick={()=> navigateToLogin()}> Navegar </button>
      </div>
    );
  }
  
  export default Home;