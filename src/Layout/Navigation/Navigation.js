/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import SideNavStyles from "./Navigation.style";
import {
  FaTimes,
  FaBus,
  FaStreetView,
  FaBook,
  FaUser,
  FaRoute,
  FaPaypal,
  FaArrowDown,
  FaLocationArrow,
  FaUserCircle,
  FaSchool
} from "react-icons/fa";
import { bindClassMethodsToThis } from "../../Services/Utils/Utility";
import logo from '../../Public/images/app_icon.png';

/**
 * Navigation.
 *
 * @class
 * @copyright 2019 Asearch.  All Rights Reserved.
 * @extends {Component}
 */
class Navigation extends Component {
  constructor(props) {
    super(props);
    bindClassMethodsToThis(Navigation.prototype, this);
  }

  render() {
    return (
      <aside className="sidenav" css={SideNavStyles}>
        {/* mobile close icon */}
        <div
          className="sidenav-close-icon"
          onClick={() => this.props.closeSideNav()}
        >
          <FaTimes size="20" />
        </div>
        <div className="sidenav-logo">
          <figure>
            <img src={logo} alt="logo" />
          </figure>
        </div>
        <ul className="sidenav-list">
          <li
            className="sidenav-list-item active dashboard"
            onClick={() => this.props.switchScreen("dashboard")}
          >
            <FaLocationArrow />
            <span>Dashboard</span>
          </li>
          <li
            className="sidenav-list-item user"
            onClick={() => this.props.switchScreen("user")}
          >
            <FaUser />
            <span>User</span>
          </li>
          <li
            className="sidenav-list-item bus"
            onClick={() => this.props.switchScreen("bus")}
          >
            <FaBus />
            <span>Bus</span>
          </li>
          <li
            className="sidenav-list-item driver"
            onClick={() => this.props.switchScreen("driver")}
          >
            <FaStreetView />
            <span>Driver</span>
          </li>
          <li
            className="sidenav-list-item student"
            onClick={() => this.props.switchScreen("student")}
          >
            <FaBook />
            <span>Student</span>
          </li>
          <li
            className="sidenav-list-item parent"
            onClick={() => this.props.switchScreen("parent")}
          >
            <FaUserCircle />
            <span>Parent</span>
          </li>
          <li
            className="sidenav-list-item school"
            onClick={() => this.props.switchScreen("school")}
          >
            <FaSchool />
            <span>School</span>
          </li>
          <li
            className="sidenav-list-item pickup"
            onClick={() => this.props.switchScreen("pickup")}
          >
            <FaArrowDown />
            <span>Pickup</span>
          </li>
          <li
            className="sidenav-list-item route"
            onClick={() => this.props.switchScreen("route")}
          >
            <FaRoute />
            <span>Route</span>
          </li>
          <li
            className="sidenav-list-item payment"
            onClick={() => this.props.switchScreen("payment")}
          >
            <FaPaypal />
            <span>Payment</span>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Navigation;
