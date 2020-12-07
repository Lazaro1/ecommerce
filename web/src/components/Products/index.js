import React from 'react'
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

import lobo1 from './images/lobo1.jpg'
import lobo2 from './images/lobo2.jpg'
import lobo3 from './images/lobo3.jpg'
import lobo4 from './images/lobo4.jpg'


import './styles.css'

function Products() {  
  return (
    <div className="products-container">

      <h1>Product Pages</h1>

     {/* <div className="products-items"> 
        <div>
          <a href="#"><img src={lobo1}/></a>
          <p>Legenda 1</p>
        </div>
        <div>
          <a href="#"><img src={lobo2}/></a>
          <p>Legenda 2</p>
        </div>
        <div>
          <a href="#"><img src={lobo4}/></a>
          <p>Legenda 3</p>
        </div>
        <div>
          <a href="#"><img src={lobo4}/></a>
          <p>Legenda 4</p>
        </div>
        <div>
          <a href="#"><img src={lobo3}/></a>
          <p>Legenda 1</p>
        </div>
        <div>
          <a href="#"><img src={lobo1}/></a>
          <p>Legenda 1</p>
        </div>
      </div> *
      
        <h1>Product GRID </h1> */}

         {/* css grid */}
       
       <div className="products-items-grid"> 
      
          <div>
            <a href="#"><img src={lobo1}/></a>
            <p>Camisa 1</p>
          </div>
          <div>
            <a href="#"><img src={lobo2}/></a>
            <p>Camisa 2</p>
          </div>
          <div>
            <a href="#"><img src={lobo4}/></a>
            <p>Camisa 3</p>
          </div>
          <div>
            <a href="#"><img src={lobo4}/></a>
            <p>Camisa 4</p>
          </div>
          <div>
            <a href="#"><img src={lobo3}/></a>
            <p>Camisa 1</p>
          </div>
          <div>
            <a href="#"><img src={lobo1}/></a>
            <p>Camisa 1</p>
          </div>     
          <div>
            <a href="#"><img src={lobo4}/></a>
            <p>Camisa 4</p>
          </div>
          <div>
            <a href="#"><img src={lobo3}/></a>
            <p>Camisa 1</p>
          </div>
          <div>
            <a href="#"><img src={lobo1}/></a>
            <p>Legenda 1</p>
          </div>            
          <div className="anuncio">
            <a href="#"><img src={lobo1}/></a>
            <p>Anuncio</p>
          </div> 
       </div>

    </div>
  );
}

export default Products;