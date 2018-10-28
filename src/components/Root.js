import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'

import GlobalStyles from '../styles'
import Home from './Home'
import About from './About'

const Container = styled.div`
	height: 100vh;
	background: #192c56;
`

const PageWrapper = styled.main`
	height: 100%;
`

export default props => (
	<Container id='global-container'>
		<Menu 			
			right
			width={ 280 }
			pageWrapId={'page-main'} 
			outerContainerId={'global-container'}>
	        <a id="home" className="menu-item" href="/">Home</a>
	        <a id="about" className="menu-item" href="/about">About</a>
	        <a id="contact" className="menu-item" href="/contact">Contact</a>
    </Menu>	
		<GlobalStyles/>
		<PageWrapper id='page-main'>
			<Provider store={{}}>
				<HashRouter>
					<Switch>
						<Route exact path='/' component={ Home }/>
						<Route exact path='/about' component={ About }/>
					</Switch>
				</HashRouter>
		</Provider>
		</PageWrapper>
	</Container>
)