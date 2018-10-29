import React from 'react'
import styled from 'styled-components'

import Slider from './Slider'
import Category from './Category'

const Container = styled.div`	
`

const Subtitle = styled.h4`
	color: white;
	text-transform: uppercase;
	text-align: center;
`

const Section = styled.section`
	max-width: ${props => props.width ? props.width : '350px'};
	margin: 0 auto;
`

const CategoriesWrapper = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`

const CategoryWrapper = styled.div`
	width: 33.3333%;
	padding: 5px;
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

export default props => (
	<Container>
		<Section>		
			<Subtitle>Cubes</Subtitle>
			<Slider/>
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