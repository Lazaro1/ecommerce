import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import { motion } from "framer-motion";

import CardFeatured from './../../components/CardFeatured';
import LoaderPage from './../../components/LoaderPage';
import 'react-slideshow-image/dist/styles.css';
import './styles.css';
import api from '../../services/api';

import lobo1 from '../../assets/images/lobo1.jpg';
import lobo2 from '../../assets/images/lobo2.jpg';
import lobo3 from '../../assets/images/lobo3.jpg';
import lobo4 from '../../assets/images/lobo4.jpg';


function Home() {
  const [products, setProducts] = useState([]);
  const [isReady, setIsReady] = useState(false);

  // VARIÁVEIS DO MOTION //
  const motionUl = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const motionLi = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  useEffect(() => {
    console.log(localStorage.getItem('@ecommerce/user/id'), localStorage.getItem('@ecommerce/user/name'));
    getProducts();
  }, [])

  const getProducts = async () => {
    const serverResponse = await api.get('/products');
    setProducts(serverResponse.data);


    setIsReady(true);
  }

  if (!isReady)
    return <LoaderPage />
  else
    return (
      <div className="home-container">
        <div className="slide-container">
          <Slide>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url("https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url("https://images.unsplash.com/photo-1582167371270-68a4c033e732?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")` }}>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ 'backgroundImage': `url("https://images.unsplash.com/photo-1594750018712-77643025beb6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9")` }}>
              </div>
            </div>
          </Slide>
        </div>
        <div className="featured-container">
          <h1> Alguns de nossos destaques </h1>

          <div className="cards-featured-container">
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={motionUl}>
              {products.map((product) => (
                <motion.li
                  animate="visible"
                  variants={motionLi}>
                  <CardFeatured id={product.id} image={product.image} title={product.tittle} description={product.description} />
                </motion.li>
              ))}
            </motion.ul>

          </div>
        </div>
      </div >
    );
}

export default Home;