import React from 'react'
import styled from 'styled-components'

import Slider from './Slider'
import Category from './Category'
import { media } from '../styles/utils'
import Logo from './Logo'

const Container = styled.div`	
	overflow-y: scroll;
  height: 100%;
`

const Subtitle = styled.h4`
	color: white;
	text-transform: uppercase;
	text-align: center;
	padding-bottom: 16px;
`

const Section = styled.section`
	max-width: ${props => props.width ? props.width : '350px'};
	padding-top: 24px;
	margin: 0 auto;
`

const CategoriesWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	background: white;	
	border-radius: 10px;
	padding: 10px 6px;
`

const CategoryWrapper = styled.div`
	width: 100%;
	padding: 5px;
	${media.tablet`
		width: 50%;
	`}
	${media.desktop`
		width: 33.33333%;
	`}
`

const categories = [
	{
		title: 'General',
		color: '#f5bf27'
	},
	{
		title: 'Mistery',
		color: '#fe842f'
	},
	{
		title: 'Games',
		color: '#ef492f'
	},
	{
		title: '#ff0000s',
		color: '#29bda3'
	},
	{
		title: 'Hitvalley',
		color: '#02795b'
	},
	{
		title: 'Clock Tower',
		color: '#feb912'
	},
	{
		title: 'Fun',
		color: '#73489f'
	},
	{
		title: 'Instagram',
		color: '#d21aab'
	}
]

class MenuContent extends React.Component {
	state = {
		itemSelected: 'Item1'
	}

	handleSelectDropdown = (item) => {
		this.setState({
			itemSelected: item.title
		})
	}

	render() {
		return (
			<Container data-simplebar>
				<Logo/>
				<Section>		
					<Subtitle>Cubes</Subtitle>
					<Slider/>
				</Section>
				<Section>				
				</Section>
				<Section 
					width='900px'
					style={{				
						height: '400px'
					}}>
					<Subtitle>Categories</Subtitle>
					<CategoriesWrapper>
						{
							categories.map((item, id) => <CategoryWrapper><Category {...item}/></CategoryWrapper>)
						}
					</CategoriesWrapper>
				</Section>
			</Container>
		)
	}
}

export default MenuContent