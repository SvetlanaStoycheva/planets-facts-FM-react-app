import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';
import { RiArrowDropRightLine } from 'react-icons/ri';

const Navbar = () => {
  const { planets_names, displayPlanet } = useGlobalContext();
  const [isSidebarOpen, setIsSidebarOpan] = useState(false);

  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpan(false);
    } else {
      setIsSidebarOpan(true);
    }
  };

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
                className={`nav-link ${item}`}
                onClick={(e) => displayPlanet(e)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </nav>
      <hr className='line' />
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
                <hr className='sidebar-line' />
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
