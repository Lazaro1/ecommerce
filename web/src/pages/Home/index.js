import React from 'react';
import {useHistory} from 'react-router-dom';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import './styles.css';

const slideImages = [
  './images/slide_2.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

function Home() {
    
    const history = useHistory()

    function navigateToLogin () {
      history.push('login')
      console.log('ola')
    }
    return (
      <div className="home-container">
        <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url("https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
        {/* <h1> Home </h1>
        <button className='teste' onClick={()=> navigateToLogin()}> Navegar </button> */}
      </div>
    );
  }
  
  export default Home;

  // <div style={{'backgroundImage': `url("https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")`}}>
