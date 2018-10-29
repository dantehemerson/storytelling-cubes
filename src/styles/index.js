import { createGlobalStyle } from 'styled-components'

const config = {
  buttonSize: '42px',
}

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
    width: ${config.buttonSize};    
    height: ${config.buttonSize};
    right: ${config.buttonSize};
    top: ${config.buttonSize};
    transition: .3s;
    &:hover {
      transform: scale(1.1);
    }
  }  
  
  .bm-cross-button {
    height: ${config.buttonSize} !important;
    width: ${config.buttonSize} !important;
    top: ${config.buttonSize} !important;
    right: ${config.buttonSize} !important;
    transition: .3s;
    &:hover {
      transform: scale(1.1);
    }
  }

  /* General sidebar styles */
  .bm-menu {
    background: #192c56;
    padding: 90px 1.5em 0;
    font-size: 1.15em;
    * {
      box-sizing: border-box;
    }
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #192c56;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    border: 1px solid black;
    padding: 0.8em;    
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }
  
  .bm-overlay {
    background: rgba(0, 0, 0, 0.4);    
  }


  // REACT RANGE SLIDER
  .rangeslider {
    margin: 20px 0;
    position: relative;
    background: #263c6b;
    -ms-touch-action: none;
    touch-action: none;
  }
  .rangeslider,
  .rangeslider .rangeslider__fill {
    display: block;    
  }
  .rangeslider .rangeslider__handle {
    background: white;    
    cursor: pointer;
    display: inline-block;
    position: absolute;
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);
  }
  .rangeslider .rangeslider__handle .rangeslider__active {
    opacity: 1;
  }
  .rangeslider .rangeslider__handle-tooltip {
    width: 43px;
    height: 43px;
    text-align: center;
    position: absolute;
    background-color: #fe6c53;    
    font-size: 17px;
    transition: all .3 ease-in;
    border-radius: 30px 30px;
    display: inline-block;
    color: white;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
  }
  .rangeslider .rangeslider__handle-tooltip span {
    margin-top: 12px;
    display: inline-block;
    line-height: 100%;
  }
  .rangeslider .rangeslider__handle-tooltip:after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
  }
  /**
  * Rangeslider - Horizontal slider
  */
  .rangeslider-horizontal {
    height: 7px;
    border-radius: 5rem;
  }
  .rangeslider-horizontal .rangeslider__fill {
    height: 100%;
    background-color: #00c3e1;
    border-radius: 10px;
    top: 0;
  }
  .rangeslider-horizontal .rangeslider__handle {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 50%;
    transform: translate3d(-48%, -50%, 0);
  }
  .rangeslider-horizontal .rangeslider__handle:after {
    //content: ' ';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 6px;
    left: 6px;
    border-radius: 50%;
    background-color: #dadada;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;
  }
  .rangeslider-horizontal .rangeslider__handle-tooltip {
    top: -55px;
  }
  .rangeslider-horizontal .rangeslider__handle-tooltip:after {
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-top: 17px solid #fe6c53;
    left: 50%;
    bottom: -9px;
    transform: translate3d(-52%, 0, 0);
  }
  /**
  * Rangeslider - Vertical slider
  */
  .rangeslider-vertical {
    margin: 20px auto;
    height: 150px;
    max-width: 10px;
    background-color: transparent;
  }
  .rangeslider-vertical .rangeslider__fill,
  .rangeslider-vertical .rangeslider__handle {
    position: absolute;
  }
  .rangeslider-vertical .rangeslider__fill {
    width: 100%;
    background-color: #7cb342;
    box-shadow: none;
    bottom: 0;
  }
  .rangeslider-vertical .rangeslider__handle {
    width: 30px;
    height: 10px;
    left: -10px;
    box-shadow: none;
  }
  .rangeslider-vertical .rangeslider__handle-tooltip {
    left: -100%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .rangeslider-vertical .rangeslider__handle-tooltip:after {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid rgba(0, 0, 0, 0.8);
    left: 100%;
    top: 12px;
  }
  /**
  * Rangeslider - Reverse
  */
  .rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {
    right: 0;
  }
  .rangeslider-reverse.rangeslider-vertical .rangeslider__fill {
    top: 0;
    bottom: inherit;
  }
  /**
  * Rangeslider - Labels
  */
  .rangeslider__labels {
    position: relative;
  }
  .rangeslider-vertical .rangeslider__labels {
    position: relative;
    list-style-type: none;
    margin: 0 0 0 24px;
    padding: 0;
    text-align: left;
    width: 250px;
    height: 100%;
    left: 10px;
  }
  .rangeslider-vertical .rangeslider__labels .rangeslider__label-item {
    position: absolute;
    transform: translate3d(0, -50%, 0);
  }
  .rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {
    content: '';
    width: 10px;
    height: 2px;
    background: black;
    position: absolute;
    left: -14px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
  }
  .rangeslider__labels .rangeslider__label-item {
    position: absolute;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    top: 10px;
    transform: translate3d(-50%, 0, 0);
  }
`