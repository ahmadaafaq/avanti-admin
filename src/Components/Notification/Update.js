import React, { Component } from 'react';
import { bindClassMethodsToThis, isEmpty } from '../../Services/Utils/Utility'

class Update extends Component {
  constructor(props) {
    super(props);
    this.initialData = {
      school_id: '',
      vehicle_id: '',
      message: '',
    }
    this.state = this.initialData;
    bindClassMethodsToThis(Update.prototype, this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    }, () => {
      if (name === 'school_id') {
        this.props.getBuses(value);
      }
    });
  }

  render() {
    return (
      <form id={`${this.props.screen}_form`}>
        <div className="form">
          <div className="form-group">
            <label>School</label>
            <select name="school_id" className="select-control" value={this.state.school_id} onChange={this.handleInputChange}>
              <option key="select_school" value="">Select School</option>
              {!isEmpty(this.props.schools) && this.props.schools.map(school =>
                <option key={school.id} value={school.id}>{school.name}</option>
              )}
            </select>

            <label className="right-inline">Bus</label>
            <select name="vehicle_id" className="select-control right-inline-select" value={this.state.vehicle_id} onChange={this.handleInputChange}>
              {!isEmpty(this.props.buses) && this.props.buses.map(bus =>
                <option key={bus.id} value={bus.id}>{bus.number}</option>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Message</label>
            <input name="message" className="input-control" value={this.state.message} onChange={this.handleInputChange} />
          </div>
        </div>
      </form>
    );
  }
}

export default Update;
