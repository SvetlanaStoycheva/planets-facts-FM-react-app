import React from 'react';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';
import { RiArrowDropRightLine } from 'react-icons/ri';

const Navbar = () => {
  const {
    planets_names,
    displayPlanet,
    toggleSidebar,
    isSidebarOpen,
  } = useGlobalContext();

  return (
    <>
      <nav className='nav-container'>
        <div className='nav-header'>
          <h2>the planets</h2>
          <button
            type='button'
            className={`${
              isSidebarOpen ? 'nav-toggle-unactive nav-toggle' : 'nav-toggle'
            }`}
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
        <div className='nav-links'>
          {planets_names.map((item, index) => {
            return (
              <button
                key={index}
                className={`nav-link border-${item}`}
                onClick={(e) => displayPlanet(e)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
      <span className='line nav-line'></span>
      {/* sidebar */}
      <aside
        className={`${isSidebarOpen ? 'sidebar, show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-links'>
          {planets_names.map((item, index) => {
            return (
              <div
                className='sidebar-links-container'
                key={index}
                onClick={displayPlanet}
              >
                <div className='sidebar-dot-container'>
                  <span className={`sidebar-circle ${item}`}></span>
                  <h3>{item}</h3>
                </div>
                <span className='sidebar-icon'>
                  <RiArrowDropRightLine />
                </span>
                <span className='line sidebar-line'></span>
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
