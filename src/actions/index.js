export const cantityCubesActions = {
	UPDATE: 'UPDATE_CANTITY_CUBES'
}

export const updateCantityCubes = cantity => ({
	type: cantityCubesActions.UPDATE,
	cantity
})