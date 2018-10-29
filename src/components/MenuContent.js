import React from 'react'
import styled from 'styled-components'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'

import Slider from './Slider'
import Category from './Category'
import { media } from '../styles/utils'
import Logo from './Logo'

const Subtitle = styled.h4`
	color: white;
	text-transform: uppercase;
	text-align: center;
	padding-bottom: 16px;
`

const Section = styled.section`
	max-width: ${props => props.width ? props.width : '350px'};
	padding: 12px 0;	
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

const LogoWrapper = styled.div`
	text-align: center;
	padding: 35px 0 55px;
`

const Info = styled.p`
	color: #556b9c;
	font-size: 14px;
	text-align: center;
	a {
		color: #7185B3;
		text-decoration: none;
		&:hover{
			color: #738FCC;
		}
	}
	.heart {
		color: #C76767;
	}
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
	render() {
		return (
			<SimpleBar style={{
				paddingRight: '14px',
				paddingTop: '10px'				
			}}>
				<LogoWrapper>
					<Logo/>
					<Info>Made with <span className='heart'>❤</span> by <a target='__blank' href='https://dantecalderon.com'>@dantehemerson</a>. Fork me on <a target='__blank' href='https://github.com/dantehemerson/storytelling-cubes'>Github</a>.</Info>
				</LogoWrapper>
				<Section>		
					<Subtitle>Cubes</Subtitle>
					<Slider/>
				</Section>
				<Section>				
				</Section>
				<Section 
					width='900px'>
					<Subtitle>Categories</Subtitle>
					<CategoriesWrapper>
						{
							categories.map((item, id) => 
								<CategoryWrapper key={id}>
									<Category {...item}/>
								</CategoryWrapper>)
						}
					</CategoriesWrapper>
				</Section>
			</SimpleBar>
		)
	}
}

export default MenuContent