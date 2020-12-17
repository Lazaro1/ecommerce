import React from 'react';
import { motion } from "framer-motion";

import './styles.css'

function CardFeatured({ id, image, title, description }) {
  return (
    <motion.div
      className="card-featured-container">
      <img src={image} alt="" />
      <h1> {title} </h1>
      <div className="description-container">
        <p> {description} </p>
      </div>
    </motion.div>
  );
}
export default CardFeatured;