import React, { Component } from "react";

class Update extends Component {
  render() {
    return (
      <div className="form">
        <div className="form-group">
          <label>Name</label>
          <input defaultValue="Rick" className="input-control" />

          <label className="right-inline">Password</label>
          <input defaultValue="Strahl" className="input-control" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input defaultValue="Rick" className="input-control" />

          <label className="right-inline">Status</label>
          <select className="input-control">
            <option value="">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Update;
