import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

function AppBar() {
  return (
    <div className="appbar-container">

      <div className="appbar-content">
        <h1>LOGO</h1>

        <div className="appbar-items">
          <Link to="/"> Home </Link>
          <Link to="/"> Home </Link>
          <Link to="/"> Home </Link>
          <Link to="login"> Login </Link>
        </div>

      </div>

    </div>
  );
}

export default AppBar;