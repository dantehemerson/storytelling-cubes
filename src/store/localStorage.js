export const loadState = () => {
  try {
    const serializableState = localStorage.getItem('state')
		if(serializableState === null) {
			return undefined;
		}
		return JSON.parse(serializableState)
  } catch(e) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializableState = JSON.stringify(state)
    localStorage.setItem('state', serializableState)
  } catch(e) {
    console.log(e)
  }
}