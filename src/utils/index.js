export const getRandomArray = (min, max, len) => {
	let nums = []
	let number = 0
	min = Math.ceil(min)
	max = Math.floor(max)
	for(let i = 0; i < len; i++) {
		do {
			number = Math.floor(Math.random() * (max - min)) + min
		} while(nums.includes(number))
		nums.push(number)
	}
	return nums
}

export const beautyDate = () => {
	const d = new Date()
	return `${d.getMonth()}_${d.getDate()}_${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}-${d.getMilliseconds()}`
}