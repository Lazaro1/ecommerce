import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai';

import './styles.css'

function AppBar() {
  const history = useHistory();

  return (
    <div className="appbar-container">

      <div className="appbar-content">
        <h1 onClick={() => history.push('/')} >LOGO</h1>
        <div className="appbar-items">
          <label for="toogle">&#9776;</label>
          <Link className="link-nav" to="/"> Home </Link>
          <Link className="link-nav" to="login"> Login </Link>
          <AiOutlineShoppingCart className="link-nav" color="#fff" size={30} />
          <div> {localStorage.getItem('@ecommerce/user/id') > 0 ? <div className="user-logged">  <img src="https://scontent.fplu21-1.fna.fbcdn.net/v/t1.0-9/37223220_2014289588615316_1402173394689982464_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeFfCToNOK7EFV8urDbWND5ax6Z1xjnO28rHpnXGOc7byhEf3vfPju8nh_R4vl9Ysd7TTEf5Ll1vyM78VISjRJeF&_nc_ohc=q-6_IFYObCIAX8MVTIp&_nc_ht=scontent.fplu21-1.fna&oh=5e4bbe1b5eef34359530aebaeae3aacf&oe=5FFCFE1D" alt="" /> </div> : <></>} </div>
        </div>
      </div>

      {/* MENU */}
      <div className="category-container">
        <Link className="category-item" to="category">Informática</Link>
        <Link className="category-item" to="category">Infantil</Link>
        <Link className="category-item" to="category">Esporte</Link>
        <Link className="category-item" to="category">Masculino</Link>
        <Link className="category-item" to="category">Feminino</Link>
        <Link className="category-item" to="category">Acessórios</Link>
      </div>

    </div>
  );
}

export default AppBar;