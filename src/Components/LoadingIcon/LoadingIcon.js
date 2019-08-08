/** @jsx jsx */
// @flow
import { jsx } from '@emotion/core';
import loadingIconStyles from './LoadingIcon.styles';

const LoadingIcon = () => (
    <div className="loading-icon-container" css={loadingIconStyles}>
        <div className="loading-icon" />
    </div>
);

export default LoadingIcon;
