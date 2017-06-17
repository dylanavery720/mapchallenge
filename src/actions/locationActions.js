require('isomorphic-fetch');


const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const addPolygon = (lat, lng) => {
  return {
    type: 'ADD_POLYGON',
    positions: [lat, lng],
  };
};

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

const postNewLocation = (location) => {
  return (dispatch) => {
    return fetch('/locations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(location),
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)))
  }
}


export { fetchAllLocations, postNewLocation, addPolygon }
