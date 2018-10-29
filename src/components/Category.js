import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
	background: ${props => props.color ? props.color : 'gray'};
	border: 1px solid darken(${props => props.color ? props.color : 'gray'}, 20%);
	color: white;
	padding: 10px 15px;
	border-radius: 10px;
	margin: 4px 0;
`

const Title = styled.p`
	text-transform: uppercase;
	font-size: 14px;
`

export default props => (
	<Container color={props.color}>
		<Title>{ props.title }</Title>
	</Container>
)