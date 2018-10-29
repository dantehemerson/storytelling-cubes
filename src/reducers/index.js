import { combineReducers } from 'redux'

import { cantityCubesActions, categoryActions } from '../actions'

const categories = [
	{
		id: 'general',
		title: 'General',
		color: '#f5bf27',
		selected: true
	},
	{
		id: 'mistery',
		title: 'Mistery',
		color: '#fe842f',
		selected: false
	},
	{
		id: 'games',
		title: 'Games',
		color: '#ef492f',
		selected: false
	},
	{
		id: 'ostia',
		title: 'Ostia pvta',
		color: '#29bda3',
		selected: false
	},
	{
		id: 'hitvalley',
		title: 'Hitvalley',
		color: '#02795b',
		selected: false
	},
	{
		id: 'clock_tower',
		title: 'Clock Tower',
		color: '#feb912',
		selected: false
	},
	{
		id: 'fun',
		title: 'Fun',
		color: '#73489f',
		selected: false
	},
	{
		id: 'instagram',
		title: 'Instagram',
		color: '#d21aab',
		selected: false
	}
]

const categoryReducer = (state=categories, action) => {
	switch(action.type) {
		case categoryActions.TOGGLE_CATEGORY:
			const index = state.findIndex(item => item.id === action.id)			
			const updatedElement = {
				...state[index],
				selected: !state[index].selected
			}			
			return [
				...state.slice(0, index),
				updatedElement,
				...state.slice(index + 1)
			]
		default:
			return state
	}
}

const cantityCubesReducer = (state=4, action) => {
	if(action.type === cantityCubesActions.UPDATE) {
		return action.cantity
	}
	return state
}


export default combineReducers({
	cantityCubes: cantityCubesReducer,
	categories: categoryReducer
})