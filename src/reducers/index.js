import { combineReducers } from 'redux'

import { 
	cantityCubesActions, 
	categoryActions,
	cubesActions
} from '../actions'

import { getRandomArray } from '../utils'

const TOTAL_IMAGES = 108

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

const cantityCubesReducer = (state=3, action) => {
	if(action.type === cantityCubesActions.UPDATE) {
		return action.cantity
	}
	return state
}


const cubes = [
	{ items: [0, 1, 2, 3, 4, 5], front: 1 },
	{ items: [6, 7, 8, 9, 10, 11], front: 4 },
	{ items: [12, 13, 14, 15, 16, 17], front: 1 }	
]

const randomCubesReducer = (state=cubes, action) => {
	if(action.type === cubesActions.GENERATE_RANDOM_CUBES) {
		let newCubes = []
		const randomCubes = getRandomArray(0, TOTAL_IMAGES, action.cubes * 6)
		for(let i = 0; i < action.cubes; i++)	{
			newCubes.push({
				item: randomCubes.slice(i, i + 6),
				front: Math.floor(Math.random() * 5)
			})
		}
		return newCubes
	}
	return state
}


export default combineReducers({
	cantityCubes: cantityCubesReducer,
	categories: categoryReducer,
	cubes: randomCubesReducer
})