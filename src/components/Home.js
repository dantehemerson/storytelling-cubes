import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Dropdown from './Dropdown'
import Toolbar from './Toolbar'
import Table from './Table'

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 15px;
	height: 100%;
`

const Divisor = styled.div`
	max-width: 500px;
	width: 100%;
	height: auto;
`

class Home extends React.Component {
	state = {
		itemSelected: 'hoa'
	}

	handleSelectDropdown = (item) => {
		this.setState({
			itemSelected: item.title
		})
	}

	render() {
		return(
			<Container>							
				<Divisor>
					<Dropdown
						onSelect={ this.handleSelectDropdown }
						list={[
							{ id: 1, title: 'Item1', key: 'item1' },
							{ id: 2, title: 'Item2', key: 'item2' },
							{ id: 4, title: 'Item4', key: 'item4' },
							{ id: 3, title: 'Item3', key: 'item3' }
						]}/>					
					<Table/>
					<Toolbar/>
				</Divisor>
			</Container>
		)
	}
}

export default Home