/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import HeaderStyles from './Header.style';

class Header extends Component {
    render() {
        const username = sessionStorage.getItem('username');
        return (
            <header className="header" css={HeaderStyles}>
                <div className="header-nav">Hi {username}</div>
                <div className="header-nav" onClick={this.props.logout()}>Logout</div>
            </header>
        )
    }
}

export default Header;