import React from 'react'
import {useHistory} from 'react-router-dom'
import Footer from '../../components/Footer'

function Home() {
    
    const history = useHistory()

    function navigateToLogin () {
      history.push('login')
    }

    return (
      <div>
        <button className='teste' onClick="navigateToLogin()">Navegar</button>
        <Footer />
      </div>
    );
  }
  
  export default Home;