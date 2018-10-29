import React from 'react'
import styled from 'styled-components'

import Toolbar from './Toolbar'
import Table from './Table'
import Logo from './Logo'

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding: 0 15px;
	height: 100%;
`

const Divisor = styled.div`
	max-width: 500px;
	width: 100%;
	display: flex;
`

const LogoWrapper = styled.div`
	text-align: center;
	padding: 45px 0 0;
`
const ToolbarWrapper = styled.div`
	max-width: 300px;
	width: 100%;
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