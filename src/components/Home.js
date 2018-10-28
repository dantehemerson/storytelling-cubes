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
	state = {
		item: 'hoa'
	}

	handleSelectDropdown = (item) => {
		console.log('Seleccionado')
		console.log(item)
	}

	render() {
		return(
			<Container>
				Home
				<Link to='/about'>Go to About</Link>
				<hr/>
				<Divisor>
					<Dropdown
						onSelect={ this.handleSelectDropdown }
						list={[
							{ id: 1, title: 'Item1', key: 'item1' },
							{ id: 2, title: 'Item2', key: 'item2' },
							{ id: 4, title: 'Item4', key: 'item4' },
							{ id: 3, title: 'Item3', key: 'item3' }
						]}/>
				</Divisor>
			</Container>
		)
	}
}

export default Home