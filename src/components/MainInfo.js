import React from 'react';
import { CgArrowTopRightR } from 'react-icons/cg';
import { useGlobalContext } from '../context';
import planetEarth from '../utils/assets/planetEarth.svg';

const MainInfo = () => {
  const { active_planet } = useGlobalContext();
  console.log(active_planet);

  if (active_planet) {
    console.log(active_planet);
    const { name, geology, images, overview, structure } = active_planet;
    const {
      internal: intervelImg,
      planet: planetImg,
      geology: geologyImg,
    } = images;

    const { content: overviewContent, source: overviewSource } = overview;

    return (
      <section className='main-info'>
        {/* small screen buttons */}
        <div className='buttons-container-small'>
          <button className={`${name} text-btn-small`}>overview</button>
          <button className={`${name} text-btn-small`}>structure</button>
          <button className={`${name} text-btn-small`}>surface</button>
        </div>
        <hr className='line' />
        {/* big screen */}
        <div className='img-container'>
          <img className='planet-img' src={planetEarth} alt='' />
        </div>
        <div className='info-container'>
          <div className='text-container'>
            <h1>{name}</h1>
            <p>{overviewContent}</p>
            <div className='source'>
              <p>
                Source:{' '}
                <a
                  href={overviewSource}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Wikipedia
                  <span>
                    <CgArrowTopRightR />
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div className='buttons-container'>
            <div className={`${name} single-btn`}>
              {/* <div className='single-btn'> */}
              <button className='number-btn'>01</button>
              <button className='text-btn'>overview</button>
            </div>
            <div className='single-btn'>
              <button className='number-btn'>02</button>
              <button className='text-btn'>internal structure</button>
            </div>
            <div className='single-btn'>
              <button className='number-btn'>03</button>
              <button className='text-btn'>surface geology</button>
            </div>
          </div>
        </div>
      </section>
    );
  } else return [];
};

export default MainInfo;
