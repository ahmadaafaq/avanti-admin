import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      route_id: '',
      location: '',
      latitude: '',
      longitude: '',
      status: ''
    }
    this.state = this.initialData;
    bindClassMethodsToThis(Update.prototype, this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.created !== this.props.created && this.props.created === true) {
      this.setState(this.initialData);
    } else if (prevProps.data !== this.props.data) {
      if (isEmpty(this.props.data)) {
        this.setState(this.initialData);
      } else {
        this.setState({
          route_id: this.props.data.route_id,
          location: this.props.data.location,
          latitude: this.props.data.latitude,
          longitude: this.props.data.longitude,
          status: this.props.data.status
        });
      }
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form id={`${this.props.screen}_form`}>
        <div className="form">
          <div className="form-group">
            <label>Route</label>
            <select name="route_id" className="select-control" value={this.state.route_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.routes) && this.props.routes.map(route =>
                <option key={route.id} value={route.id}>{`${route.from} - ${route.to}`}</option>
              )}
            </select>

            <label className="right-inline">Location</label>
            <input name="location" className="input-control" value={this.state.location} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Latitude</label>
            <input name="latitude" className="input-control" value={this.state.latitude} onChange={this.handleInputChange} />
            <label className="right-inline">Longitude</label>
            <input name="longitude" className="input-control" value={this.state.longitude} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" className="select-control" value={this.state.status} onChange={this.handleInputChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </form>
    );
  }
}

export default Update;
