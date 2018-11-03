import React from 'react'
import styled from 'styled-components'

import squareImg from '../assets/images/square.png'
import Cube from './Cube'

const Container = styled.div`
	width: 100%;	
	border-radius: 10px;
	background: #0e1d3e;
	display: grid;
	position: relative;
	& > img {		
		width: 100%;						
	}
`
const CubesContainer = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	height: 100%;

`

export default props => (
	<Container>
		<img alt='Table' src={squareImg}/>
		<CubesContainer>		
			{
				props.cubes.map((cube, index) => <Cube { ...cube } key={ index }/>)
			}
		</CubesContainer>
	</Container>
)