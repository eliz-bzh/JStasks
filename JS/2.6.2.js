function k_diget_1_4(value, k) {
	let str = '';
	for(let i = 0; i != k; ++i)
	{
		str += Math.pow(value, i);
		console.log(str[i]);
	}
	return str[k-1];
}

function k_diget_57(value, k) {
	let str = '';
	for(let i = 1; i != k+1; ++i)
	{
		str += Math.pow(i, value);
	}
	return str[k-1];
}

function k_diget_6(k) {
	let str = '';
	for(let i = 10; i != 100; ++i)
	{
		str += i;
	}
	return str[k-1];
}

/*
console.log(k_diget_1_4(5, 8));
console.log(k_diget_1_4(10, 2));
console.log(k_diget_1_4(2, 8));
console.log(k_diget_1_4(3, 2));
console.log(k_diget_57(1,11));
console.log(k_diget_6(8));*/
console.log(k_diget_57(3,4));