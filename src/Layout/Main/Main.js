/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import MainStyles from './Main.style';

class Main extends Component {
    render() {
        return (
            <main className="main" css={MainStyles}>
                {this.props.children}
            </main>
        )
    }
}

export default Main;