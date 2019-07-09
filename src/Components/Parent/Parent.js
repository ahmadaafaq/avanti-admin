import React, { Component } from 'react'
import Table from '../../Layout/Table/Table'
import { bindClassMethodsToThis } from '../../Services/Utils/Utility'
import { fetchData } from '../../Services/Api/Api'
import Update from './Update'

class Guardian extends Component {
  constructor() {
    super();
    this.api = 'get-parents';
    this.method = 'GET';
    this.state = {
      dataArray: []
    }
    bindClassMethodsToThis(Guardian.prototype, this)
  }

  formatData(response) {
    let dataArray = [];
    if (response) {
      response.map(data =>
        dataArray.push([
          data.username,
          data.email,
          data.status,
          data.phone,
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
      'email',
      'status',
      'phone',
      'updated at'
    ];
    return (
      <React.Fragment>
        <Table screen={this.props.screen} tableHeaders={tableHeaders} dataArray={this.state.dataArray} formData={<Update />} />
      </React.Fragment>
    );
  }
}

export default Guardian;
