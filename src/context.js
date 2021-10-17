import React, { useContext, useEffect, useReducer, useState } from 'react';
import { dataJson } from './utils/data';

import reducer from './reducer';

const initialState = {
  all_data_set: [],
  planets_names: [],
  active_planet: dataJson[2],
  active_button: 'overview',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(dataJson);

  const getAllPlanets = () => {
    dispatch({ type: 'SET_ALL_PLANETS', payload: dataJson });
  };

  const getPlanetsNames = () => {
    dispatch({ type: 'GET_PLANETS_NAMES', payload: dataJson });
  };

  useEffect(() => {
    getPlanetsNames();
    getAllPlanets();
  }, []);

  const displayPlanet = (e) => {
    const activePlanet = e.target.textContent;
    dispatch({ type: 'SET_ACTIVE_PLANET', payload: activePlanet });
    setIsSidebarOpan(false);
  };

  const [isSidebarOpen, setIsSidebarOpan] = useState(false);
  const toggleSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpan(false);
    } else {
      setIsSidebarOpan(true);
    }
  };

  const setActiveButton = (e) => {
    // console.log(e.target.dataset.lable);
    // console.log(e.target);
    const currentBtnLable = e.target.dataset.lable;
    dispatch({ type: 'SET_ACTIVE_BTN', payload: currentBtnLable });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayPlanet,
        toggleSidebar,
        isSidebarOpen,
        setActiveButton,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
// import { useGlobalContext } from './context'
//  const { handleSearch, query } = useGlobalContext()
