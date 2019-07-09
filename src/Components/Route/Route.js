import React, { Component } from 'react'
import Table from '../../Layout/Table/Table'
import { bindClassMethodsToThis, toDateString, isEmpty } from '../../Services/Utils/Utility'
import { fetchData, submitData, updateData } from '../../Services/Api/Api'
import Update from './Update'

class Route extends Component {
  constructor() {
    super();
    this.api = 'get-routes';
    this.method = 'GET';
    this.state = {
      dataArray: [],
      created: false,
      dataToUpdate: {}
    }
    bindClassMethodsToThis(Route.prototype, this)
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
      submitData('create-route', 'POST', dataObj)
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
      updateData('update-route', dataObj, this.state.dataToUpdate.id)
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
          data.from,
          data.to,
          data.status,
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
        from: param
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

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevState) {
    if (prevState.created !== this.state.created && this.state.created === true) {
      this.fetchData();
      this.toggleCreated();
    }
  }

  render() {
    const tableHeaders = [
      'from',
      'to',
      'status',
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

export default Route;
