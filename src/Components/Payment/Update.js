import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      parent_id: '',
      subscription: '',
      paid_on: '',
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
            <label>Parent</label>
            <select name="parent_id" className="select-control" value={this.state.parent_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.parents) && this.props.parents.map(parent =>
                <option key={parent.id} value={parent.id}>{`${parent.username}`}</option>
              )}
            </select>

            <label className="right-inline">Subscription</label>
            <select name="subscription" className="select-control right-inline-select" value={this.state.subscription} onChange={this.handleInputChange}>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>
          <div className="form-group">
            <label>Paid on</label>
            <input name="paid_on" type="date" className="input-control" value={this.state.paid_on} onChange={this.handleInputChange} />

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
