import React from 'react'
import styled from 'styled-components'
import RangeSlider from 'react-rangeslider'

const Container = styled.div`

`

class Slider extends React.Component {
	handleChangeStart = () => {
	  console.log('Change event started')
	}	

	handleChangeComplete = () => {
	  console.log('Change event completed')
	}

	render() {
		return (
			<Container>
				<RangeSlider
		      min={1}
		      max={9}
		      tooltip={false}
		      value={this.props.value}
		      onChangeStart={this.handleChangeStart}
          onChange={this.props.handleChange}
          onChangeComplete={this.handleChangeComplete}/>
			</Container>
		) 
	}
}

export default Slider