import { combineReducers } from 'redux'

import { 
	cantityCubesActions, 
	categoryActions,
	cubesActions,
	soundActions
} from '../actions'

import { getRandomArray } from '../utils'

const TOTAL_IMAGES = 106

const categories = [
	{
		id: 'horror',
		title: 'Horror',
		color: '#f5bf27',
		selected: true
	},
	{
		id: 'mistery',
		title: 'Mistery',
		color: '#fe842f',
		selected: true
	},
	{
		id: 'games',
		title: 'Games',
		color: '#ef492f',
		selected: true
	},
	{
		id: 'movies',
		title: 'Movies',
		color: '#29bda3',
		selected: true
	},
	{
		id: 'animals',
		title: 'Animals',
		color: '#02795b',
		selected: true
	},
	{
		id: 'science',
		title: 'Science',
		color: '#feb912',
		selected: true
	},
	{
		id: 'sports',
		title: 'Sports',
		color: '#73489f',
		selected: true
	},
	{
		id: 'history',
		title: 'History',
		color: '#d21aab',
		selected: true
	},
	{
		id: 'mythic',
		title: 'Mythic',
		color: '#795548',
		selected: true
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

const cantityCubesReducer = (state=9, action) => {
	if(action.type === cantityCubesActions.UPDATE) {
		return action.cantity
	}
	return state
}


const cubes = [
	{ items: [54, 1, 2, 3, 4, 5], front: 1 },
	{ items: [6, 7, 8, 9, 10, 11], front: 4 },
	{ items: [12, 13, 14, 15, 16, 17], front: 5 },
	{ items: [18, 19, 20, 21, 22, 23], front: 3 },
	{ items: [24, 25, 26, 27, 28, 29], front: 2 },
	{ items: [30, 31, 32, 33, 34, 35], front: 4 },
	{ items: [36, 37, 38, 39, 40, 41], front: 3 },
	{ items: [42, 43, 44, 45, 46, 47], front: 2 },
	{ items: [48, 49, 50, 51, 52, 53], front: 1 },
]

const randomCubesReducer = (state=cubes, action) => {
	if(action.type === cubesActions.GENERATE_RANDOM_CUBES) {
		let newCubes = []
		const randomCubes = getRandomArray(0, TOTAL_IMAGES, action.cubes * 6)		
		for(let i = 0; i < action.cubes; i++)	{
			newCubes.push({
				items: randomCubes.slice(i * 6, (i * 6) + 6),
				front: Math.floor(Math.random() * 5)
			})
		}
		return newCubes
	}
	return state
}

const soundReducer = (state=false, action) => {
	if(action.type === soundActions.TOGGLE_SOUND) {
		return !state
	}
	return state
}


export default combineReducers({
	cantityCubes: cantityCubesReducer,
	categories: categoryReducer,
	cubes: randomCubesReducer,
	sound: soundReducer
})