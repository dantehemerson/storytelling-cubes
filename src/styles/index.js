import { createGlobalStyle } from 'styled-components'

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
`