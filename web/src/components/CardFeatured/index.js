import React from 'react';

import './styles.css'

function CardFeatured({ image, title, description }) {
  return (
    <div className="card-featured-container">
      <img src={image} alt="" />
      <h1> {title} </h1>
      <div className="description-container">
        <p> {description} </p>
      </div>
    </div>
  );
}
export default CardFeatured;