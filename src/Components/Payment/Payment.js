import React, { Component } from 'react'
import Table from '../../Layout/Table/Table'
import { bindClassMethodsToThis, toDateString, isEmpty } from '../../Services/Utils/Utility'
import { fetchData, submitData, updateData } from '../../Services/Api/Api'
import Update from './Update'

class Payment extends Component {
  constructor() {
    super();
    this.api = 'get-payments';
    this.method = 'GET';
    this.state = {
      dataArray: [],
      created: false,
      dataToUpdate: {},
      parents: {}
    }
    bindClassMethodsToThis(Payment.prototype, this)
  }

  toggleCreated() {
    this.setState({
      created: false
    })
  }

  submitForm() {
    const formEl = document.querySelector("form");
    const formData = new FormData(formEl);
    let dataObj = {};
    for (var [key, value] of formData.entries()) {
      dataObj[key] = value;
    }

    if (isEmpty(this.state.dataToUpdate)) {
      submitData('create-payment', 'POST', dataObj)
        .then(response => {
          if (response) {
            this.setState({
              created: true
            })
          } else {
            alert('Something went wrong please try again');
          }
        }
        );
    } else {
      updateData('update-payment', dataObj, this.state.dataToUpdate.id)
        .then(response => {
          if (response) {
            this.setState({
              created: true
            })
          } else {
            alert('Something went wrong please try again');
          }
        }
        );
    }
  }

  formatData(response) {
    let dataArray = [];
    if (response) {
      response.map(data =>
        dataArray.push([
          data.id,
          data.parent_id,
          data.subscription,
          data.status,
          data.paid_on,
          toDateString(data.updated_at)
        ])
      );
    }
    this.setState({
      dataArray: dataArray
    });
  }

  fetchData() {
    fetchData(this.api, this.method)
      .then(response => this.formatData(response));
  }

  updateData(id) {
    const params = {
      id
    }
    fetchData(this.api, this.method, params)
      .then(response => this.setState({
        dataToUpdate: response[0]
      }));
  }

  searchData(param) {
    let params = {};
    if (param) {
      params = {
        username: param
      }
    }
    fetchData(this.api, this.method, params)
      .then(response => this.formatData(response));
  }

  closeModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    this.setState({
      dataToUpdate: {}
    })
  }

  getParents() {
    fetchData('get-parents', this.method)
      .then(response => this.setState({
        parents: response
      }));
  }

  componentDidMount() {
    this.fetchData();
    this.getParents();
  }

  componentDidUpdate(prevState) {
    if (prevState.created !== this.state.created && this.state.created === true) {
      this.fetchData();
      this.toggleCreated();
    }
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
        <Table
          screen={this.props.screen}
          tableHeaders={tableHeaders}
          dataArray={this.state.dataArray}
          formData={<Update
            screen={this.props.screen}
            created={this.state.created}
            data={this.state.dataToUpdate}
            parents={this.state.parents}
          />}
          submitForm={this.submitForm}
          created={this.state.created}
          toggleCreated={this.toggleCreated}
          updateData={this.updateData}
          dataToUpdate={this.state.dataToUpdate}
          closeModal={this.closeModal}
          searchData={this.searchData}
        />
      </React.Fragment>
    );
  }
}

export default Payment;
