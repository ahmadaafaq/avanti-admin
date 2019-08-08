/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { Component, lazy, Suspense } from "react";
import AppStyles from "./App.styles";
import Header from "./Layout/Header/Header";
import SideNav from "./Layout/Navigation/Navigation";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";
import Loader from "../src/Components/LoadingIcon/LoadingIcon";
import { FaBars } from "react-icons/fa";
import {
  bindClassMethodsToThis,
  hasClass,
  addClass,
  removeClass
} from "./Services/Utils/Utility";

const Login = lazy(() => import("./Components/Login/Login"));
const LazyDashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const LazyDriver = lazy(() => import("./Components/Driver/Driver"));
const LazyBus = lazy(() => import("./Components/Bus/Bus"));
const LazyParent = lazy(() => import("./Components/Parent/Parent"));
const LazyPayment = lazy(() => import("./Components/Payment/Payment"));
const LazyPickup = lazy(() => import("./Components/Pickup/Pickup"));
const LazyRoute = lazy(() => import("./Components/Route/Route"));
const LazyStudent = lazy(() => import("./Components/Student/Student"));
const LazyUser = lazy(() => import("./Components/User/User"));
const LazySchool = lazy(() => import("./Components/School/School"));
const LazyNotification = lazy(() => import("./Components/Notification/Notification"));

/**
 * App.
 *
 * @class
 * @copyright 2019 Asearch.  All Rights Reserved.
 * @extends {Component}
 */
class App extends Component {
  /**
   * Create an instance of App.
   *
   * @param {object} props
   * @memberof App
   */
  constructor(props) {
    super(props);
    this.state = {
      screen: ''
    };
    bindClassMethodsToThis(App.prototype, this);
  }

  componentDidMount() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.switchScreen('dashboard');
    } else {
      this.switchScreen('login');
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.screen && prevState.screen !== this.state.screen) {
      this.setState({
        screen: this.state.screen
      })
    }
  }

  logout() {
    sessionStorage.setItem('loggedIn', false);
    sessionStorage.setItem('username', '');
    this.switchScreen('login');
  }

  /**
   * toggleSideNav
   *
   * @param {Node} el Element to toggle
   * @param {string} className Name of class
   * @returns {void}
   * @memberof App
   */
  toggleSideNav(className = "active") {
    const sidenavEl = document.querySelector(".sidenav");
    if (hasClass(sidenavEl, className)) {
      removeClass(sidenavEl, className);
    } else {
      addClass(sidenavEl, className);
    }
  }

  /**
   * activeNav
   *
   * @param {string} screen Selected screen
   * @returns {void}
   * @memberof App
   */
  activeNav(screen) {
    const sideNavElems = document.querySelectorAll(".sidenav-list-item");
    const selectedElem = document.querySelector(`.${screen}`);
    if (sideNavElems && selectedElem) {
      sideNavElems.forEach(elem => {
        removeClass(elem, "active");
      });
      addClass(selectedElem, "active");
    }
  }

  /**
   * switchScreen
   *
   * @param {string} screen Selected screen
   * @returns {void}
   * @memberof App
   */
  switchScreen(screen) {
    this.activeNav(screen);
    const mobileMenu = document.querySelector(".menu-icon");
    if (mobileMenu) {
      this.toggleSideNav();
    }
    this.setState({
      screen
    });
  }

  /**
   * switchComponent
   *
   * @param {string} screen Selected screen
   * @returns {Component}
   * @memberof App
   */
  switchComponent(screen) {
    switch (screen) {
      case "login":
        return <Login screen={screen} switchScreen={this.switchScreen} />;
      case "dashboard":
        return <LazyDashboard screen={screen} />;
      case "bus":
        return <LazyBus screen={screen} />;
      case "driver":
        return <LazyDriver screen={screen} />;
      case "parent":
        return <LazyParent screen={screen} />;
      case "payment":
        return <LazyPayment screen={screen} />;
      case "pickup":
        return <LazyPickup screen={screen} />;
      case "route":
        return <LazyRoute screen={screen} />;
      case "student":
        return <LazyStudent screen={screen} />;
      case "user":
        return <LazyUser screen={screen} />;
      case "school":
        return <LazySchool screen={screen} />;
      case "notification":
        return <LazyNotification screen={screen} />;
      default:
        return <LazyDashboard screen={screen} />;
    }
  }

  render() {
    const LazyComponent = this.switchComponent(this.state.screen);
    return (
      <div css={AppStyles(this.state.screen === 'login')}>
        <div className="avanti-container">
          {/* mobile menu icon */}
          {this.state.screen !== 'login' &&
            <React.Fragment>
              <div className="menu-icon" onClick={() => this.toggleSideNav()}>
                <FaBars size="15" />
              </div>
              <Header logout={() => this.logout} />
              <SideNav
                closeSideNav={this.toggleSideNav}
                switchScreen={this.switchScreen}
              />
            </React.Fragment>
          }
          <Main>
            <Suspense fallback={<Loader />}>
              {LazyComponent}
            </Suspense>
          </Main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
