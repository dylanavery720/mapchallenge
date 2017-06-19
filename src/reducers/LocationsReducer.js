const initialState = {
  data: [],
  positions: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: action.data,
      });
    case 'ADD_POLYGON':
      for (let i = 0; i < state.positions.length; i++) {
        if (state.positions[i][0] === action.positions[0]) {
          return Object.assign({}, state, {
            positions: state.positions.filter((arr, i) => state.positions[i][0] !== action.positions[0]),
          })
        }
      }
      return Object.assign({}, state, {
        positions: [...state.positions, action.positions],
      });
    default:
      return state;
  }
};

export default Locations;

