import React, { Component } from 'react'
import Table from '../../Layout/Table/Table'
import { bindClassMethodsToThis } from '../../Services/Utils/Utility'
import { fetchData } from '../../Services/Api/Api'
import Update from './Update'

class Payment extends Component {
  constructor() {
    super();
    this.api = 'get-payments';
    this.method = 'GET';
    this.state = {
      dataArray: []
    }
    bindClassMethodsToThis(Payment.prototype, this)
  }

  formatData(response) {
    let dataArray = [];
    if (response) {
      response.map(data =>
        dataArray.push([
          data.parent_id,
          data.subscription,
          data.status,
          data.paid_on,
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
      'parent',
      'subscription',
      'status',
      'paid on',
      'updated at'
    ];
    return (
      <React.Fragment>
        <Table screen={this.props.screen} tableHeaders={tableHeaders} dataArray={this.state.dataArray} formData={<Update />} />
      </React.Fragment>
    );
  }
}

export default Payment;
