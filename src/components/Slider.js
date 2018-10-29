import React from 'react'
import RangeSlider from 'react-rangeslider'

export default props => (
	<div>
		<RangeSlider
			min={1}
			max={9}
			tooltip={false}
			value={props.value}
		  onChange={props.handleChange}/>
	</div>
)