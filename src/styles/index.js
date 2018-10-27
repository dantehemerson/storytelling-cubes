import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
	}
  body {
    font-family: sans-serif;
    color: white;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  .pure-g, .pure-g [class*=pure-u] {  
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
  }
`