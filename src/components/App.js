import React, { Component } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
  }

  render() {
    const { locations } = this.props
    return (
      <div className="App">
        <FormContainer />
        {locations.length > 1 && <LeafletMap locations={this.props.locations} />}
      </div>
    );
  }
}

export default App;
