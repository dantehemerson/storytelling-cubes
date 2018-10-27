import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-components'

import GlobalStyles from '../styles'
import Home from './Home'

const Container = styled.div`
	height: 100vh;
	background: #192c56;
`

export default props => (
	<Container>
		<GlobalStyles/>
		<Provider store={{}}>
			<HashRouter>
				<Route exact path='/' component={ Home }/>
			</HashRouter>
		</Provider>
	</Container>
)