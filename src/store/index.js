import { createStore } from 'redux'

import { loadState, saveState } from './localStorage'
import reducer from '../reducers'

const persistedState = loadState()

const store = createStore(
	reducer,
	persistedState
)

store.subscribe(() => {
	saveState(store.getState())
})

export default store