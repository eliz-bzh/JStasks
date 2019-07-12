function two_digits_1(number){
	var count = 0;
	var temp = 0;
	var array1 = new Array();
	for(; parseInt(number) != 0; number/=10)
	{
		temp = parseInt(number%10);
		array1.push(temp);
	}
	for(var i = 0; i!=array1.length; ++i){
		for(var j = i+1; j!=array1.length; ++j){
			if(array1[i] == array1[j]){
				++count;
			}
		}
		if(count == 1){
			return true;
		}
	}
	return false;
}

function three_digits_2(number){
	number = String(number);
	var count = 0;
	var temp = 0;
	var array2 = new Array();
	if(number.length != 3){
		return false;
	}
	for(; parseInt(number) != 0; number/=10){
		temp = parseInt(number%10);
		array2.push(temp);
	}
	for(var i = 0; i!=array2.length; ++i){
		for(var j = i+1; j!=array2.length; ++j){
			if(array2[i] == array2[j]){
				++count;
			}
		}
		if(count == 2){
			return true;
		}
	}
	return false;
}

function palindrom_3(number) {
	var i = number;
	var res = 0;
	for(; parseInt(number) != 0; number/=10){
		res*= 10;
		res+= parseInt(number%10);
	}
	if(res == i){
		return true;
	}
	return false;
}

function different_4_6(number){
	var temp = 0;
	var array2 = new Array();
	for(; parseInt(number) != 0; number/=10){
		temp = parseInt(number%10);
		array2.push(temp);
	}
	for(var i = 0; i!=array2.length; ++i){
		for(var j = i+1; j!=array2.length; ++j){
			if(array2[i] == array2[j]){
				return false;
			}
		}
	}
	return true;
}

function k_differese_5(n, k) {
	let temp = 0;
	let arr = new Array();
	for(; parseInt(n) != 0; n /= 10)
	{
		temp = parseInt(n % 10);
		arr.push(temp);
	} 
	let count = 0;
	for(let i = 0; i != arr.length; ++i)
	{
		for(let j = i + 1; j != arr.length; ++j)
		{
			if(arr[i] == arr[j])
			{
				++count;
			}
			if(count == k){
				return true;
			}
		}
	}
	return false;
}

function two_digits_7(number){
	number = String(number);
	var count = 0;
	var temp = 0;
	var array2 = new Array();
	if(number.length != 2){
		return false;
	}
	for(; parseInt(number) != 0; number/=10){
		temp = parseInt(number%10);
		array2.push(temp);
	}
	for(var i = 0; i!=array2.length; ++i){
		for(var j = i+1; j!=array2.length; ++j){
			if(array2[i] == array2[j]){
				++count;
			}
		}
		if(count == 1){
			return true;
		}
	}
	return false;
}

function k_differese_8_10(n, k) {
	let temp = 0;
	let arr = new Array();
	for(; parseInt(n) != 0; n /= 10)
	{
		temp = parseInt(n % 10);
		arr.push(temp);
	} 
	let count = 0;
	for(let i = 0; i != arr.length; ++i)
	{
		for(let j = i + 1; j != arr.length; ++j)
		{
			if(arr[i] == arr[j])
			{
				++count;
			}
			if(count > k){
				return true;
			}
		}
	}
	return false;
}

function k_sum_9(n, k) {
	let sum1 = 0;
	let sum2 = 0;
	let temp = 0;
	let arr = new Array();
	for(; parseInt(n) != 0; n /= 10){
		temp = parseInt(n % 10);
		arr.push(temp);
	}
	for(let i = 0; i!=k; ++i){
		sum1+= arr[i];
	}
	for(let i = arr.length - k; i!=arr.length; ++i){
		sum2+= arr[i];
	}
	if(sum1 == sum2){
		return true;
	}
	return false;
}


function second_9(number, k){
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let temp = 0;
	let arr = new Array();
	for(; parseInt(number) != 0; number /= 10){
		temp = parseInt(number % 10);
		arr.push(temp);
	} 
	let sum1 = arr.slice(0,k).reduce(reducer);
	let size = arr.length - k;
	let sum2 = arr.slice(size, arr.length).reduce(reducer);
	if(sum1 === sum2){
		return true;
	}
	return false;
}

function k_num_less_than_m_11(n, k, m) {
	let sum = 0;
	let temp = 0;
	let arr = new Array();
	for(; parseInt(n) != 0; n /= 10){
		temp = parseInt(n % 10);
		arr.push(temp);
	} 
	for(let i = 0; i != k; ++i){
		sum += arr[i];
	}
	if(sum < m){
		return true;
	}
	return false;
}

function task_12(n, k){
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let temp = 0;
	let arr = new Array();
	for(; parseInt(n) != 0; n /= 10){
		temp = parseInt(n % 10);
		arr.push(temp);
	}
	let sum_k = arr.slice(0, k).reduce(reducer);
	let sum = arr.slice(0, 2).reduce(reducer);
	if(sum < sum_k){
		return true;
	}
	return false;
}



/*console.log(two_digits_1(505));
console.log(three_digits_2(555));
console.log(palindrom_3(505));
console.log(different_4_6(5066));
console.log(k_differese_5(2235, 2));
console.log(two_digits_7(66));
console.log(k_differese_8_10(22335, 2));
console.log(k_sum_9(1221, 2));
console.log(second_9(12621, 2));
console.log(k_num_less_than_m_11(123, 3, 7));
console.log(task_12(125421, 3));*/