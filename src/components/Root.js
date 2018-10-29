import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { push as Menu } from 'react-burger-menu'

import store from '../store'
import GlobalStyles from '../styles'
import Home from './Home'
import MenuClose from '../assets/icons/menu_close.svg'
import MenuOpen from '../assets/icons/menu_open.svg'
import MenuContent from './MenuContent'

const Container = styled.div`
	height: 100vh;
	background: #192c56;
`

const PageWrapper = styled.main`
	height: 100%;
`

export default props => (
	<Provider store={ store }>
		<Container id='global-container'>
				<Menu 			
					right			
					customBurgerIcon={ <img alt='Menu Open' src={MenuOpen}/>}
					customCrossIcon={ <img alt='Menu Close' src={MenuClose}/>}
					width={ '100%' }
					pageWrapId={'page-main'} 
					outerContainerId={'global-container'}>
			    <MenuContent/>
		    </Menu>	
				<GlobalStyles/>
				<PageWrapper id='page-main'>
						<HashRouter>
							<Switch>
								<Route exact path='/' component={ Home }/>						
							</Switch>
						</HashRouter>
				</PageWrapper>
		</Container>
	</Provider>
)