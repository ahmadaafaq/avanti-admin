import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      route_id: '',
      driver_id: '',
      school_id: '',
      alias: '',
      number: '',
      category: '',
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
          driver_id: this.props.data.driver_id,
          school_id: this.props.data.school_id,
          alias: this.props.data.alias,
          number: this.props.data.number,
          category: this.props.data.category,
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
            <label>School</label>
            <select name="school_id" className="select-control" value={this.state.school_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.schools) && this.props.schools.map(school =>
                <option key={school.id} value={school.id}>{school.name}</option>
              )}
            </select>

            <label className="right-inline">Driver</label>
            <select name="driver_id" className="select-control right-inline-select" value={this.state.driver_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.drivers) && this.props.drivers.map(driver =>
                <option key={driver.id} value={driver.id}>{driver.username}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Route</label>
            <select name="route_id" className="select-control" value={this.state.route_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.routes) && this.props.routes.map(route =>
                <option key={route.id} value={route.id}>{`${route.from} - ${route.to}`}</option>
              )}
            </select>
            <label className="right-inline">Alias</label>
            <input name="alias" className="input-control" value={this.state.alias} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Number</label>
            <input name="number" className="input-control" value={this.state.number} onChange={this.handleInputChange} />

            <label className="right-inline">Category</label>
            <select name="category" className="select-control right-inline-select" value={this.state.category} onChange={this.handleInputChange}>
              <option value="bus">Bus</option>
              <option value="cab">Cab</option>
            </select>
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
