import React, { Component } from 'react'
import Table from '../../Layout/Table/Table'
import { bindClassMethodsToThis } from '../../Services/Utils/Utility'
import { fetchData } from '../../Services/Api/Api'
import Update from './Update'

class Student extends Component {
  constructor() {
    super();
    this.api = 'get-students';
    this.method = 'GET';
    this.state = {
      dataArray: []
    }
    bindClassMethodsToThis(Student.prototype, this)
  }

  formatData(response) {
    let dataArray = [];
    if (response) {
      response.map(data =>
        dataArray.push([
          data.name,
          data.bus_id,
          data.parent_id,
          data.status,
          data.updated_at
        ])
      );
    }
    this.setState({
      dataArray: dataArray
    });
  }

  componentDidMount() {
    fetchData(this.api, this.method)
      .then(response => this.formatData(response));
  }

  render() {
    const tableHeaders = [
      'name',
      'bus',
      'parent',
      'status',
      'updated at'
    ];
    return (
      <React.Fragment>
        <Table screen={this.props.screen} tableHeaders={tableHeaders} dataArray={this.state.dataArray} formData={<Update />} />
      </React.Fragment>
    );
  }
}

export default Student;
