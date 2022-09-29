const sumOddLengthSubarrays = function(arr) {
	let res = arr.reduce((prev, curr) => prev + curr, 0)
	let range = 3

	while(arr.length >= range) {
		for(let i = 0; i < arr.length - range + 1; i++) {
			for(let j = i; j < i + range; j++) {
				res += arr[j]
			}
		}

		range += 2
	}

	return res
};