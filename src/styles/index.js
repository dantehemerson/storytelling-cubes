import { createGlobalStyle } from 'styled-components'

const buttonSize = '42px';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
	}
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    color: white;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  .pure-g, .pure-g [class*=pure-u] {  
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }

  // BURGER MENU CUSTOM STYLES  
  .bm-burger-button {
    position: fixed;
    width: ${buttonSize};    
    height: ${buttonSize};
    right: ${buttonSize};
    top: ${buttonSize};
    transition: .3s;
    &:hover {
      transform: scale(1.1);
    }
  }  
  
  .bm-cross-button {
    height: ${buttonSize} !important;
    width: ${buttonSize} !important;
    top: ${buttonSize} !important;
    right: ${buttonSize} !important;
    transition: .3s;
    &:hover {
      transform: scale(1.1);
    }
  }

  /* General sidebar styles */
  .bm-menu {
    background: #192c56;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #192c56;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }
  
  .bm-overlay {
    background: rgba(0, 0, 0, 0.4);    
  }
`