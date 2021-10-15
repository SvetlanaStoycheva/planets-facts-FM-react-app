import React, { useContext, useEffect, useReducer } from 'react';
import { dataJson } from './utils/data';

import reducer from './reducer';

const initialState = {
  all_data_set: [],
  planets_names: [],
  active_planet: {
    name: 'Earth',
    overview: {
      content:
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      source: 'https://en.wikipedia.org/wiki/Earth',
    },
    structure: {
      content:
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
    },
    geology: {
      content:
        'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
      source: 'https://en.wikipedia.org/wiki/Earth#Surface',
    },
    rotation: '0.99 Days',
    revolution: '365.26 Days',
    radius: '6,371 KM',
    temperature: '16°c',
    images: {
      planet: './assets/planet-earth.svg',
      internal: './assets/planet-earth-internal.svg',
      geology: './assets/geology-earth.png',
    },
  },
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
  };
  return (
    <AppContext.Provider value={{ ...state, displayPlanet }}>
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
