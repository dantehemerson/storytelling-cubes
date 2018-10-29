import { combineReducers } from 'redux'

import { cantityCubesActions } from '../actions'

const cantityCubesReducer = (state=1, action) => {
	if(action.type === cantityCubesActions.UPDATE) {
		return action.value
	}
	return state
}


export default combineReducers({
	cantity: cantityCubesReducer
})