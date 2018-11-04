import React from 'react'
import styled from 'styled-components'

import DicesImage from '../assets/icons/dices.svg'
import VolumeOn from '../assets/icons/volume.svg'
import { mediaHeight } from '../styles/utils'

const Container = styled.div`
	background: #263c6b;	
	border-radius: 10px;
	overflow: hidden;
`

const Items = styled.ul`
	list-style: none;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	${mediaHeight.tablet`
		flex-direction: row;
	`}
`

const Item = styled.li`	
	display: flex;
	cursor: pointer;
	padding: 3px 0;
	align-items: center;

	img {
		padding: 6px;
		width: 50px;
		height: 50px;
		transition: .3s;
		border-radius: 50%;
		&:hover{
			background: #102044;
		}
	}
`

export default props => (
	<Container>
		<Items>
			<Item>
				<img alt='Random' src={ VolumeOn } style={{
					width: '30px',
					height: '30px',
					padding: '16px'

				}}/>
			</Item>
			<Item>			
				<img onClick={() => props.generate(props.cantity)} alt='Random' src={ DicesImage }/>
			</Item>
			<Item>
				<img alt='Random' src={ DicesImage }/>
			</Item>
		</Items>
	</Container>
)