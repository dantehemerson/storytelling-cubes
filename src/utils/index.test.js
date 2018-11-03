import { getRandomArray } from './index'

const nonReapeatingElements = (arr) => {
	for(let i = 0; i < arr.length; i++) {		
		for(let j = i + 1; j < arr.length; j++) {
			if(arr[i] === arr[j]) return false
		}
	}
	return true
}

test('Non-repeating elements in Array', () => {
	expect(nonReapeatingElements(getRandomArray(0, 108, 54))).toBe(true)
})

