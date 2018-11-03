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

export const cubesActions = {
	GENERATE_RANDOM_CUBES: 'GENERATE_CUBES'
}

export const generateRandomCubes = (cubes) => ({
	type: cubesActions.GENERATE_RANDOM_CUBES,
	cubes
})