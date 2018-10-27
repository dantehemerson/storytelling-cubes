import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
	
`

class About extends React.Component {
	render() {
		return(
			<Container>
				About
				<Link to='/'>Go to Home</Link>
			</Container>
		)
	}
}

export default About