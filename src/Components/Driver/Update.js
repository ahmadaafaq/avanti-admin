import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      username: '',
      password: '',
      phone: '',
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
          username: this.props.data.username,
          password: '',
          phone: this.props.data.phone,
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
            <input name="username" className="input-control" value={this.state.username} onChange={this.handleInputChange} />

            <label className="right-inline">Password</label>
            <input name="password" type="password" className="input-control" value={this.state.password} onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input name="phone" className="input-control" value={this.state.phone} onChange={this.handleInputChange} />

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
