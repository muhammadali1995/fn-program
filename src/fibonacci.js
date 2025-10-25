export const recuresiveFibonacci = (n) => {
	console.log(n)
	if(n == 0) {
		return 0;
	}

	if (n == 1) {
		return 1
	}

	return recuresiveFibonacci(n-1) + recuresiveFibonacci(n-2)

}


export const  imperativeFibonacci = (n) => {

	if(n==0) return 0
	if(n == 1) return 1	

	let prev = 0;
	let curr = 1;
	for(let i = 1; i < n; i++) {
		let temp = curr;
		curr = prev + curr
		prev = temp
	}

	return curr
}


console.log(recuresiveFibonacci(3))