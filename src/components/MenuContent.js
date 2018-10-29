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
`

const categories = [
	{
		title: 'General',
		color: '#f5bf27'
	},
	{
		title: 'Mistery',
		color: 'blue'
	},
	{
		title: 'Games',
		color: 'blue'
	},
	{
		title: 'Blues',
		color: 'blue'
	},
	{
		title: 'Hitvalley',
		color: 'blue'
	},
	{
		title: 'Clock Tower',
		color: 'blue'
	},
	{
		title: 'Fun',
		color: 'blue'
	},
	{
		title: 'Instagram',
		color: 'blue'
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
					categories.map((item, id) => <Category {...item}/>)
				}
			</CategoriesWrapper>
		</Section>
	</Container>
)