import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	width: 33.33333%;
	height: 33.33333%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2%;
	box-sizing: border-box;
	img {
		width: 100%;
		height: 100%;		
	}
`
export default props => (
	<Container>		
		<img alt={`Dice ${props.front}`} src={`/static/icons/dado${props.items[props.front]}.png`}/>	
	</Container>
)