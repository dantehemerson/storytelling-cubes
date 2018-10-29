import React from 'react'
import styled from 'styled-components'

import Toolbar from './Toolbar'
import Table from './Table'
import Logo from './Logo'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 15px;
	height: 100%;
`

const Divisor = styled.div`
	max-width: 500px;
	width: 100%;
	height: auto;
`

class Home extends React.Component {
	render() {
		return(
			<Container>
				<Logo/>								
				<Divisor>									
					<Table/>
					<Toolbar/>
				</Divisor>
			</Container>
		)
	}
}

export default Home