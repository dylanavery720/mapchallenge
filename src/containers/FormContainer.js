import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Form from '../components/Form'
import { postNewLocation } from '../actions/locationActions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postNewLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
