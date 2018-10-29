import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'

const Container = styled.li`
	background: ${props => props.color && props.selected ? props.color : '#929292'};
	border: 2px solid ${ props => props.color && props.selected ? darken(0.03, props.color) : '#8c8c8c' };
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