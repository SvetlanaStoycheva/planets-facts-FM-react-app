import React from 'react';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const {
    planets_names,
    toggleSidebar,
    displayPlanet,
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
              isSidebarOpen ? 'nav-toggle-unactive' : 'nav-toggle'
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
                onClick={displayPlanet}
              >
                {item}
              </button>
            );
          })}
        </div>
        <hr className='line' />
      </nav>
      <aside
        className={`${isSidebarOpen ? 'sidebar, show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-links'>
          {planets_names.map((item, index) => {
            return (
              <button
                key={index}
                className={`sidebar-link ${item}`}
                onClick={displayPlanet}
              >
                {item}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
