import React from 'react';
import { useHistory } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';


import CardFeatured from './../../components/CardFeatured'
import 'react-slideshow-image/dist/styles.css'
import './styles.css';

import lobo1 from '../../assets/images/lobo1.jpg'
import lobo2 from '../../assets/images/lobo2.jpg'
import lobo3 from '../../assets/images/lobo3.jpg'
import lobo4 from '../../assets/images/lobo4.jpg'

function Home() {
  const history = useHistory();
  const featureds = [
    {
      image: lobo1,
      title: 'Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo eros, dictum vel mollis sed, accumsan nec libero. Ut non tortor at odio interdum tempor. Donec viverra pharetra lacus vel pretium. Donec at elit non odio accumsan fringilla sed id nunc. Nunc hendrerit risus urna, ac cursus ligula ultricies sit amet. In hac habitasse platea dictumst. Aliquam mattis dignissim magna vitae porta. Morbi aliquet risus vitae lacus convallis, id vestibulum diam tempus. Etiam hendrerit justo est. Nullam sollicitudin mattis maximus. Sed vitae leo et magna vulputate vehicula quis id dolor. Integer vitae risus sed neque ornare aliquet ac sed justo.'
    },
    {
      image: lobo2,
      title: 'Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo eros, dictum vel mollis sed, accumsan nec libero. Ut non tortor at odio interdum tempor. Donec viverra pharetra lacus vel pretium. Donec at elit non odio accumsan fringilla sed id nunc. Nunc hendrerit risus urna, ac cursus ligula ultricies sit amet. In hac habitasse platea dictumst. Aliquam mattis dignissim magna vitae porta. Morbi aliquet risus vitae lacus convallis, id vestibulum diam tempus. Etiam hendrerit justo est. Nullam sollicitudin mattis maximus. Sed vitae leo et magna vulputate vehicula quis id dolor. Integer vitae risus sed neque ornare aliquet ac sed justo.'
    },
    {
      image: lobo3,
      title: 'Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo eros, dictum vel mollis sed, accumsan nec libero. Ut non tortor at odio interdum tempor. Donec viverra pharetra lacus vel pretium. Donec at elit non odio accumsan fringilla sed id nunc. Nunc hendrerit risus urna, ac cursus ligula ultricies sit amet. In hac habitasse platea dictumst. Aliquam mattis dignissim magna vitae porta. Morbi aliquet risus vitae lacus convallis, id vestibulum diam tempus. Etiam hendrerit justo est. Nullam sollicitudin mattis maximus. Sed vitae leo et magna vulputate vehicula quis id dolor. Integer vitae risus sed neque ornare aliquet ac sed justo.'
    },
    {
      image: lobo4,
      title: 'Title 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo eros, dictum vel mollis sed, accumsan nec libero. Ut non tortor at odio interdum tempor. Donec viverra pharetra lacus vel pretium. Donec at elit non odio accumsan fringilla sed id nunc. Nunc hendrerit risus urna, ac cursus ligula ultricies sit amet. In hac habitasse platea dictumst. Aliquam mattis dignissim magna vitae porta. Morbi aliquet risus vitae lacus convallis, id vestibulum diam tempus. Etiam hendrerit justo est. Nullam sollicitudin mattis maximus. Sed vitae leo et magna vulputate vehicula quis id dolor. Integer vitae risus sed neque ornare aliquet ac sed justo.'
    },
  ]

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
          {featureds.map(featured => (
            <CardFeatured image={featured.image} title={featured.title} description={featured.description} />
          ))}
        </div>


      </div>
    </div>
  );
}

export default Home;