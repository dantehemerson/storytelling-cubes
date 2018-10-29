import React from 'react'
import styled from 'styled-components'

import Toolbar from './Toolbar'
import Table from './Table'
import Logo from './Logo'
import { mediaHeight } from '../styles/utils'

const Container = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	${mediaHeight.tablet`
		flex-direction: column;
	`}
	padding: 0 15px;
	height: 100%;
`

const Divisor = styled.div`
	max-width: 400px;
	width: 100%;
	display: flex;
`

const LogoWrapper = styled.div`
	text-align: center;
	padding: 35px 0 0;
	display: none;
	${mediaHeight.tablet`
		display: inherit;
	`}
`
const ToolbarWrapper = styled.div`
	max-width: 300px;
	${mediaHeight.tablet`		
		width: 100%;
	`}
	height: auto;
	padding-bottom: 10px;
`
class Home extends React.Component {
	render() {
		return(
			<Container>
				<LogoWrapper>			
					<Logo/>			
				</LogoWrapper>					
				<Divisor>									
					<Table/>
				</Divisor>
				<ToolbarWrapper>
					<Toolbar/>
				</ToolbarWrapper>
			</Container>
		)
	}
}

export default Home