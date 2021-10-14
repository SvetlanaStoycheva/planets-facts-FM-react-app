const reducer = (state, action) => {
  if (action.type === 'GET_PLANETS_NAMES') {
    const planetsNames = action.payload.map((item) => item.name);
    return { ...state, planets_names: planetsNames };
  }
  throw new Error(`no matching "${action.type}" action type`);
};
export default reducer;
