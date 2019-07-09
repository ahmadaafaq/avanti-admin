import { css } from '@emotion/core';
import mq from './Services/StyleHelpers/MediaQueries';

const AppStyles = (login) => css`
.avanti-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas:
    "header"
    "main"
    "footer";
  height: 100vh;
}

// Mobile-first side nav styles
.sidenav {
  grid-area: sidenav;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 200px;
  position: fixed;
  overflow-y: auto;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  z-index: 2;
  background-color: #394263;
  transform: translateX(-245px);
  transition: all .6s ease-in-out;
}

// The active class is toggled on hamburger and close icon clicks
.sidenav.active {
  transform: translateX(0);
}

// Only visible on mobile screens
.sidenav-close-icon {
  position: absolute;
  visibility: visible;
  top: 8px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  color: #ddd;
}

${mq.tabletUp(css`
  .avanti-container {
    ${login === true && css`
      grid-template-rows: 1fr 50px;
      grid-template-areas:
        "main"  
        "footer";
   `}

   ${login === false && css`
      grid-template-columns: 200px 1fr;
      grid-template-areas:
        "sidenav header"
        "sidenav main"
        "sidenav footer";
   `}
  }

  .sidenav {
    position: relative;
    transform: translateX(0);
  }

  .sidenav-close-icon {
    visibility: hidden;
  }
`)}

// Hamburger menu icon, stays fixed on mobile for any possible scrolling
.menu-icon {
  position: fixed;
  display: flex;
  top: 12px;
  left: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
  padding: 5px;
  background-color: #DADAE3;
}

`

export default AppStyles;