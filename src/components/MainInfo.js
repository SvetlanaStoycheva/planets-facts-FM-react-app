import React from 'react';
import { CgArrowTopRightR } from 'react-icons/cg';
import { useGlobalContext } from '../context';
import planetEarth from '../utils/assets/planetEarth.svg';

const MainInfo = () => {
  const { active_planet, setActiveButton, active_button } = useGlobalContext();

  if (active_planet) {
    // console.log(active_planet);
    const {
      name,
      geology: geologyContent,
      images,
      overview: overviewContent,
      structure: structureContent,
    } = active_planet;
    const {
      internal: intervelImg,
      planet: planetImg,
      geology: geologyImg,
    } = images;

    console.log(planetImg);

    const { content: overview, source: overviewSource } = overviewContent;
    const { content: geology, source: geologySource } = geologyContent;
    const { content: structure, source: structureSource } = structureContent;

    return (
      <section className='main-info'>
        {/* small screen buttons */}
        <div className='buttons-container-small'>
          <button className={`${name} text-btn-small`}>overview</button>
          <button className={`${name} text-btn-small`}>structure</button>
          <button className={`${name} text-btn-small`}>surface</button>
        </div>
        <hr className='line line-main' />
        {/* big screen */}
        <div className='img-container'>
          <img
            className='planet-img'
            src={`${
              active_button === 'overview'
                ? planetImg
                : active_button === 'structure'
                ? intervelImg
                : geologyImg
            }`}
            alt=''
          />
        </div>
        <div className='info-container'>
          <div className='text-container'>
            <h1>{name}</h1>
            <p>{`${
              active_button === 'overview'
                ? overview
                : active_button === 'structure'
                ? structure
                : geology
            }`}</p>
            <div className='source'>
              <p>
                Source:{' '}
                <a
                  href={`${
                    active_button === 'overview'
                      ? overviewSource
                      : active_button === 'structure'
                      ? structureSource
                      : geologySource
                  }`}
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
            <div
              className={`${
                active_button === 'overview'
                  ? `${name} single-btn`
                  : 'single-btn'
              }`}
            >
              {/* <div className='single-btn'> */}
              <button className='number-btn'>01</button>
              <button
                className='text-btn'
                onClick={(e) => setActiveButton(e)}
                data-lable='overview'
              >
                overview
              </button>
            </div>
            <div
              className={`${
                active_button === 'structure'
                  ? `${name} single-btn`
                  : 'single-btn'
              }`}
            >
              <button className='number-btn'>02</button>
              <button
                className='text-btn'
                onClick={(e) => setActiveButton(e)}
                data-lable='structure'
              >
                internal structure
              </button>
            </div>
            <div
              className={`${
                active_button === 'geology'
                  ? `${name} single-btn`
                  : 'single-btn'
              }`}
            >
              <button className='number-btn'>03</button>
              <button
                className='text-btn'
                onClick={(e) => setActiveButton(e)}
                data-lable='geology'
              >
                surface geology
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } else return [];
};

export default MainInfo;
