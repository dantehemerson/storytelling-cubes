export const cantityCubesActions = {
	UPDATE: 'UPDATE_CANTITY_CUBES'
}

export const updateCantityCubes = cantity => ({
	type: cantityCubesActions.UPDATE,
	cantity
})

export const categoryActions = {
	TOGGLE_CATEGORY: 'TOGGLE_CATEGORY'	
}

export const toggleCategory = id => ({
	type: categoryActions.TOGGLE_CATEGORY,
	id
})