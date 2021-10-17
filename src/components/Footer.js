import React from 'react';
import { useGlobalContext } from '../context';

const Footer = () => {
  const { active_planet } = useGlobalContext();
  console.log(active_planet);

  const { rotation, revolution, radius, temperature } = active_planet;
  return (
    <section className='footer-container'>
      <div className='footer-single-value'>
        <h4>rotation time</h4>
        <h2>{rotation}</h2>
      </div>
      <div className='footer-single-value'>
        <h4>revolution time</h4>
        <h2>{revolution}</h2>
      </div>
      <div className='footer-single-value'>
        <h4>radius</h4>
        <h2>{radius}</h2>
      </div>
      <div className='footer-single-value'>
        <h4>average temp.</h4>
        <h2>{temperature}</h2>
      </div>
    </section>
  );
};

export default Footer;
