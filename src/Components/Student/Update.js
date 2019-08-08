import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      name: '',
      bus_id: '',
      parent_id: '',
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
          name: this.props.data.name,
          bus_id: this.props.data.bus_id,
          parent_id: this.props.data.parent_id,
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
            <label>Name</label>
            <input name="name" className="input-control" value={this.state.name} onChange={this.handleInputChange} />

            <label className="right-inline">Bus</label>
            <select name="bus_id" className="select-control right-inline-select" value={this.state.bus_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.vehicles) && this.props.vehicles.map(vehicle =>
                <option key={vehicle.id} value={vehicle.id}>{`${vehicle.alias}`}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Parent</label>
            <select name="parent_id" className="select-control" value={this.state.parent_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.parents) && this.props.parents.map(parent =>
                <option key={parent.id} value={parent.id}>{`${parent.username}`}</option>
              )}
            </select>

            <label className="right-inline">Status</label>
            <select name="status" className="select-control right-inline-select" value={this.state.status} onChange={this.handleInputChange}>
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
