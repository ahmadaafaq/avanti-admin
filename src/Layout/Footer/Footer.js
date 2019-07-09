/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import FooterStyles from './Footer.style';

class Footer extends Component {
    render() {
        return (
            <footer className="footer" css={FooterStyles}>
                <div className="footer-copyright">&copy;2019 AVANTI</div>
                <div className="footer-signature">ASearch Online. All rights reserved</div>
            </footer>
        )
    }
}

export default Footer;