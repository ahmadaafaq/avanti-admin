import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      from: '',
      from_lat: '',
      to: '',
      to_lat: '',
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
          from: this.props.data.from,
          from_lat: this.props.data.from_lat,
          to: this.props.data.to,
          to_lat: this.props.data.to_lat,
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
            <label>From</label>
            <input name="from" className="input-control" value={this.state.from} onChange={this.handleInputChange} />
            <label className="right-inline">From Latitude</label>
            <input name="from_lat" className="input-control" value={this.state.from_lat} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>To</label>
            <input name="to" className="input-control" value={this.state.to} onChange={this.handleInputChange} />
            <label className="right-inline">To Latitude</label>
            <input name="to_lat" className="input-control" value={this.state.to_lat} onChange={this.handleInputChange} />
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
