import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Dropdown from './Dropdown'

const Container = styled.div`
	
`

const Divisor = styled.div`
	max-width: 300px;
	margin: 100px auto;
`

class Home extends React.Component {
	render() {
		return(
			<Container>
				Home
				<Link to='/about'>Go to About</Link>
				<hr/>
				<Divisor>
					<Dropdown
						list={[
							{ id: 1, title: 'Item1' },
							{ id: 2, title: 'Item2' },
							{ id: 4, title: 'Item4' },
							{ id: 3, title: 'Item3' }
						]}/>
				</Divisor>
			</Container>
		)
	}
}

export default Home