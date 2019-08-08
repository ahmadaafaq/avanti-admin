/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { bindClassMethodsToThis } from '../../Services/Utils/Utility'
import { fetchData } from '../../Services/Api/Api'
import DashboardStyles from './Dashboard.style';
import {
    FaBus,
    FaStreetView,
    FaBook,
    FaUser,
    FaRoute,
    FaPaypal,
    FaArrowDown,
    FaUserCircle,
    FaSchool
} from 'react-icons/fa';

class Dashboard extends Component {
    constructor() {
        super();
        this.api = 'get-table-count';
        this.method = 'GET';
        this.state = {
            dataArray: {
                user: 0,
                vehicle: 0,
                driver: 0,
                student: 0,
                parent: 0,
                school: 0,
                pickup: 0,
                route: 0,
                payment: 0
            }
        }
        bindClassMethodsToThis(Dashboard.prototype, this)
    }

    fetchData(table) {
        const params = {
            table: table
        }
        fetchData(this.api, this.method, params)
            .then(response => {
                if (response.length > 0) {
                    this.setState({
                        [table]: response[0].count
                    })
                }
            });
    }

    componentDidMount() {
        this.fetchData('user');
        this.fetchData('vehicle');
        this.fetchData('driver');
        this.fetchData('student');
        this.fetchData('parent');
        this.fetchData('pickup');
        this.fetchData('route');
        this.fetchData('payment');
        this.fetchData('school');
    }

    render() {
        return (
            <div className="dashboard" css={DashboardStyles}>
                <div className="dashboard-overview">
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaUser size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>User</span>
                            <span>{this.state.user}</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaBus size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Bus</span>
                            <span>{this.state.vehicle}</span>
                        </div>
                    </div>

                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaStreetView size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Driver</span>
                            <span>{this.state.driver}</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaBook size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Student</span>
                            <span>{this.state.student}</span>
                        </div>

                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaUserCircle size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Parent</span>
                            <span>{this.state.parent}</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaArrowDown size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Pickup</span>
                            <span>{this.state.pickup}</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaRoute size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Route</span>
                            <span>{this.state.route}</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaPaypal size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Payment</span>
                            <span>{this.state.payment}</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaSchool size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>School</span>
                            <span>{this.state.school}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;