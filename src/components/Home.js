import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	background: #192c56;
`

class Home extends React.Component {
	render() {
		return(
			<Container>
				Hello World!!!
			</Container>
		)
	}
}

export default Home