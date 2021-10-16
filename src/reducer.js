const reducer = (state, action) => {
  if (action.type === 'SET_ALL_PLANETS') {
    return { ...state, all_data_set: action.payload };
  }
  if (action.type === 'GET_PLANETS_NAMES') {
    const planetsNames = action.payload.map((item) => item.name);
    return { ...state, planets_names: planetsNames };
  }
  if (action.type === 'SET_ACTIVE_PLANET') {
    const activePlanet = state.all_data_set.find(
      (item) => item.name === action.payload
    );
    return { ...state, active_planet: activePlanet, active_button: 'overview' };
  }
  if (action.type === 'SET_ACTIVE_BTN') {
    return { ...state, active_button: action.payload };
  }
  throw new Error(`no matching "${action.type}" action type`);
};
export default reducer;
