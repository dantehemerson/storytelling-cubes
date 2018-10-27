import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import GlobalStyles from '../styles'
import Home from './Home'
import About from './About'

const Container = styled.div`
	height: 100vh;
	background: #192c56;
`

export default props => (
	<Container>
		<GlobalStyles/>
		<Provider store={{}}>
			<HashRouter>
				<Switch>
					<Route exact path='/' component={ Home }/>
					<Route exact path='/about' component={ About }/>
				</Switch>
			</HashRouter>
		</Provider>
	</Container>
)