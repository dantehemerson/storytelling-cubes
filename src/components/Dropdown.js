import React from 'react'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'

const Wrapper = styled.div`	
	color: #333;
	cursor: pointer;
	text-transform: uppercase;
`

const Header = styled.div`
	height: 36px;
	display: flex;
	box-shadow: 0 0 2px #111;
	border-radius: 8px;
	background: white;
	align-items: center;
	padding: 0 10px;
	overflow: hidden;
	margin-bottom: 4px;
	border: 1px solid #dedede;
`

const Title = styled.h4`
`

const List = styled.ul`
	background: white;
	border-radius: 8px;
	overflow: hidden;
`

const Item = styled.li`
	padding: 9px 10px;
	&:hover {
		background: #efefef;
	}
`

class Dropdown extends React.Component {
	state = {
		open: false,
		title: 'Item1'
	}

	handleClickOutside(e) {
		this.setState({
			open: false
		})
	}

	selectItem = (title, id, stateKey) => {
		this.setState({
			title,
			open: false
		})
	}

	toggleList = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	render() {
		const { list } = this.props
		console.log(this.state.open)
		return (
			<Wrapper>
				<Header onClick={ this.toggleList }>
					<Title>{ this.state.title }</Title>
				</Header>
				{
					this.state.open &&
					<List>
						{
							list.map(item => 
								<Item 
									onClick={ () => this.selectItem(item.title, item.id, item.key) }
									key={ item.id }>{ item.title }</Item>)							
						}
					</List>
				}
			</Wrapper>
		)
	}
}

export default onClickOutside(Dropdown)