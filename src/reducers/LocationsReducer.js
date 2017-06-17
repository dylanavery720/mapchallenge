const initialState = {
  data: [],
  positions: []
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      // store an array of locations to state
      return Object.assign({}, state, {
        data: action.data,
      });
    case 'ADD_POLYGON':
      // store an array of locations to state
      return Object.assign({}, state, {
        positions: [...state.positions, action.positions]
      });
    default:
      return state;
  }
};

export default Locations;

