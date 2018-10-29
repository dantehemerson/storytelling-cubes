import { combineReducers } from 'redux'

import { cantityCubesActions } from '../actions'

const cantityCubesReducer = (state=4, action) => {
	if(action.type === cantityCubesActions.UPDATE) {
		return action.cantity
	}
	return state
}


export default combineReducers({
	cantityCubes: cantityCubesReducer
})