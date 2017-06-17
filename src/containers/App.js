import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations, addPolygon } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data, positionArray: state.Locations.positions };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchAllLocations, addPolygon }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
