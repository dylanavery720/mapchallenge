import React, { Component } from 'react';


class Form extends Component {
  submitForm(e, data) {
    e.preventDefault();
    if ((data.lat > -90 && data.lat < 90) && (data.lng > -180 && data.lng < 180)) {
      this.props.postNewLocation(data);
    } else {
      alert('PLEASE ENTER VALID LAT AND LNG')
    }
  }
  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"/>
        </label>
        <button
          type="submit"
          onClick={e => this.submitForm(e, {
            name: this.name.value,
            lat: Number(this.lat.value),
            lng: Number(this.lng.value),
          })}
        >
            Save
        </button>
      </form>
    );
  }
}


export default Form;
