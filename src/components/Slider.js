import React from 'react'
import styled from 'styled-components'
import RangeSlider from 'react-rangeslider'

const Container = styled.div`

`

class Slider extends React.Component {
	state = {
	  value: 5
	}
	
	handleChangeStart = () => {
	  console.log('Change event started')
	}

	handleChange = value => {
	  this.setState({
	    value: value
	  })
	}

	handleChangeComplete = () => {
	  console.log('Change event completed')
	}

	render() {
		const { value } = this.state
		return (
			<Container>
				<RangeSlider
		      min={1}
		      max={9}
		      value={value}
		      onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}/>
			</Container>
		) 
	}
}

export default Slider