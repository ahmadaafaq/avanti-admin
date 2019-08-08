import React, { Component } from 'react'
import Table from '../../Layout/Table/Table'
import { bindClassMethodsToThis, toDateString, isEmpty } from '../../Services/Utils/Utility'
import { fetchData, submitData } from '../../Services/Api/Api'
import Update from './Update'

class Notification extends Component {
  constructor() {
    super();
    this.api = 'get-notifications';
    this.method = 'GET';
    this.state = {
      dataArray: [],
      created: false,
      dataToUpdate: {},
      schools: {},
      buses: {}
    }
    bindClassMethodsToThis(Notification.prototype, this)
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
      submitData('create-notification', 'POST', dataObj)
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
          data.school,
          data.bus,
          data.message,
          data.status ? 'notified' : 'not notified',
          toDateString(data.created_at)
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

  searchData(param) {
    let params = {};
    if (param) {
      params = {
        location: param
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

  getSchools() {
    fetchData('get-schools', this.method)
      .then(response => this.setState({
        schools: response
      }));
  }

  getBuses(school_id) {
    if (school_id) {
      fetchData('get-vehicles/' + school_id, this.method)
        .then(response => this.setState({
          buses: response
        }));
    } else {
      this.setState({
        buses: {}
      })
    }
  }

  componentDidMount() {
    this.fetchData();
    this.getSchools();
  }

  componentDidUpdate(prevState) {
    if (prevState.created !== this.state.created && this.state.created === true) {
      this.fetchData();
      this.toggleCreated();
    }
  }

  render() {
    const tableHeaders = [
      'school',
      'bus',
      'message',
      'status',
      'created at'
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
            schools={this.state.schools}
            buses={this.state.buses}
            getBuses={this.getBuses}
          />}
          submitForm={this.submitForm}
          created={this.state.created}
          toggleCreated={this.toggleCreated}
          dataToUpdate={this.state.dataToUpdate}
          closeModal={this.closeModal}
          searchData={this.searchData}
          noSearch={true}
        />
      </React.Fragment>
    );
  }
}

export default Notification;
