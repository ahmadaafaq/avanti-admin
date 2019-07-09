/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import DashboardStyles from './Dashboard.style';
import {
    FaBus,
    FaStreetView,
    FaBook,
    FaUser,
    FaRoute,
    FaPaypal,
    FaArrowDown,
    FaUserCircle
} from 'react-icons/fa';

class Dashboard extends Component {
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
                            <span>500</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaBus size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Bus</span>
                            <span>500</span>
                        </div>
                    </div>

                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaStreetView size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Driver</span>
                            <span>500</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaBook size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Student</span>
                            <span>500</span>
                        </div>

                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaUserCircle size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Parent</span>
                            <span>500</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaArrowDown size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Pickup</span>
                            <span>500</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaRoute size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Route</span>
                            <span>500</span>
                        </div>
                    </div>
                    <div className="overviewcard">
                        <div className="card-icon">
                            <FaPaypal size="40" color="white" />
                        </div>
                        <div className="card-info">
                            <span>Payment</span>
                            <span>500</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;