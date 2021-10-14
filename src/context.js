import React, { useContext, useEffect, useReducer } from 'react';
import { dataJson } from './data';

import reducer from './reducer';

const initialState = {
  planets_names: [],
  active_planet: {},
  isSidebarOpen: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(dataJson);

  const getPlanetsNames = () => {
    dispatch({ type: 'GET_PLANETS_NAMES', payload: dataJson });
  };

  useEffect(() => {
    getPlanetsNames();
  }, []);

  const toggleSidebar = () => {};
  const displayPlanet = () => {};
  return (
    <AppContext.Provider value={{ ...state, toggleSidebar, displayPlanet }}>
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
