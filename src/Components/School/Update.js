import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      name: '',
      email: '',
      status: '',
      paid: '',
      phone: '',
      address: ''
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
          email: this.props.data.email,
          status: this.props.data.status,
          paid: this.props.data.paid,
          phone: this.props.data.phone,
          address: this.props.data.address,
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

            <label className="right-inline">Email</label>
            <input name="email" type="email" className="input-control" value={this.state.email} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Status</label>
            <select name="status" className="select-control" value={this.state.status} onChange={this.handleInputChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <label className="right-inline">Paid</label>
            <select name="paid" className="select-control right-inline-select" value={this.state.paid} onChange={this.handleInputChange}>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" className="input-control" value={this.state.phone} onChange={this.handleInputChange} />

            <label className="right-inline">Address</label>
            <input name="address" className="input-control" value={this.state.address} onChange={this.handleInputChange} />
          </div>
        </div>
      </form>
    );
  }
}

export default Update;
