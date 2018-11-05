import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.li`
	background: ${props => props.color};
	border: 2px solid ${ props => darken(0.03, props.color) };
	opacity: ${props => props.selected ? '1' : '.5'};
	color: white;
	cursor: pointer;
	padding: 9px 15px;	
	border-radius: 5px;
`

const Title = styled.p`
	text-transform: uppercase;
	font-size: 15px;
`

export default props => (
	<Container 
		onClick={ () => props.onClick(props.id)}
		selected={props.selected}
		color={props.color}>
		<Title>{ props.title }</Title>		
	</Container>
)