import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai';

import './styles.css'

function AppBar() {
  const history = useHistory();

  return (
    <div className="appbar-container">

      <div className="appbar-content">
        <h1 onClick={() => history.push('/')} >LOGO</h1>
        <div className="appbar-items">
          <Link className="link-nav" to="/"> Home </Link>
          <Link className="link-nav" to="login"> Login </Link>
          <AiOutlineShoppingCart color="#fff" width={100} />
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