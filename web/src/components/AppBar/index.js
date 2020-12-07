import React from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

import './styles.css'

function AppBar() {  
  return (
    <div className="appbar-container">

      <div className="appbar-content">
        <h1>LOGO</h1>
        <div className="appbar-search">
            <input
            type="text"
            placeholder="O que você está procurando?"          
            />    
        </div>
        <div className="appbar-items">
          <Link to="/"> Home </Link>
          <Link to="login"> Login </Link>
        </div>
      </div>

      {/* MENU */}
      <div className="appbar-menu">
        <nav>
          <ul className="appbar-navigation">
            <li><a href="#">Informática</a></li>
            <li><a href="#">Infantil</a></li>
            <li><a href="#">Esporte</a></li>
            <li><a href="#">Masculino</a></li>
            <li><a href="#">Feminino</a></li>
            <li><a href="#">Acessórios</a></li>
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default AppBar;