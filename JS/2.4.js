function factorial(k){
	let res = 1;
	for(let i = 2; i<=k; ++i){
		res *= parseInt(i);
	}
	return res;
}

function iterC1(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, (2*(k+1))); 
		let denum = factorial(k)*(2*(k+1)); 
		res += num/denum; 
		++k; 
	} 
	return res; 
}

function iterC2(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, 4*(k+3)); 
		let denum = (4*(k+3)) * factorial(2*(k+1)) 
		res += num/denum; 
		++k; 
	} 
	return res; 
}

function iterC3(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, (4*(k+1))); 
		let denum = (4*(k+1))2*k; 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

function iterC4(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let first = Math.pow(-1, k)/(factorial(k) * factorial(k+1)); 
		let second = Math.pow(x/2, 2*(k+1)); 
		res += (first*second); 
		++k; 
	} 
	return res; 
} 

function iterC5(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let first = Math.pow(-1, k)/(factorial(2*k)); 
		let second = Math.pow(x/3, 4*k); 
		res += (first*second); 
		++k; 
	} 
	return res; 
} 

function iterC6(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k+1) * Math.pow(x, 2*(k-1)); 
		let denum = (2*(k-1)) * factorial(2*(k+1)) 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

function iterC7(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, 2*k); 
		let denum = Math.pow(2, k) k; 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

function iterC8(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let first = Math.pow(-1,k)/(Math.pow(factorial(k+1), 2)); 
		let second = Math.pow(x/2, 2*(k+1)); 
		res += (first*second); 
		++k; 
	} 
	return res; 
} 

function iterC9(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k+1) * Math.pow(x, 2*(k-1)); 
		let denum = factorial(2*(k+1)) 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

function iterC10(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, (k+2)); 
		let denum = factorial(k+2)*(k+1); 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

function iterC11(x, times){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, k) * (k+1); 
		let denum = factorial(2*(k-1)) * Math.pow(3, k); 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

function iterC12(x, times, n){ 
	let k = 1; 
	let res = 0; 
	while(k <= times){ 
		let num = Math.pow(-1, k) * Math.pow(x, 2*(k+n)); 
		let denum = factorial(k+n) * factorial(k); 
		res += num/denum; 
		++k; 
	} 
	return res; 
} 

console.log(iterC1(1, 3));
console.log(iterC2(1, 3)); 
console.log(iterC3(1, 3)); 
console.log(iterC4(1, 3)); 
console.log(iterC5(1, 3)); 
console.log(iterC6(1, 3)); 
console.log(iterC7(1, 3)); 
console.log(iterC8(1, 3)); 
console.log(iterC9(1, 3)); 
console.log(iterC10(1, 3)); 
console.log(iterC11(1, 3)); 
console.log(iterC12(1, 3));