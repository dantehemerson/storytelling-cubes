import React from 'react'
import styled from 'styled-components'

import squareImg from '../assets/images/square.png'

const Container = styled.div`
	width: 100%;	
	border-radius: 10px;
	background: #0e1d3e;
	display: grid;
	img {		
		width: 100%;				
		border: 1px solid yellow;
	}
`

export default props => (
	<Container>
		<img alt='Table' src={squareImg}/>
	</Container>
)