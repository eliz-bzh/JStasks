function count_9_1 (value, k) {
	let count = 0;
	value1 = parseInt(value);
	value = value - value1;
	value = parseInt(value*Math.pow(10, k));
	for(; value; value/=10)
	{
		value1 = parseInt(value%10);
		if(value1 === 9)
		{
			count++;
		}
	}
	return count;
}

function isEqualSum_2(value, k) { 
	let temp = 0; 
	value1 = parseInt(value); 
	value = value - value1; 
	value = parseInt(value*Math.pow(10, k)); 
	for(; parseInt(value) != 0; value/=10) 
	{ 
		value1 = parseInt(value%10); 
		temp += value1; 
	} 
	return temp; 
}

function isEqualSum_3(value, k, n) { 
	let temp1 = 0; 
	let temp2 = 0;
	value1 = parseInt(value); 
	value = value - value1;
	value = parseInt(value*Math.pow(10, k+n));
	let e = parseInt(value*Math.pow(10, (-k)));
	for(; parseInt(value) != e; value/=10){ 
		value1 = parseInt(value%10); 
		temp1 += value1;
		console.log(value1);
	}
	for(; parseInt(e) != 0; e/=10){
		value1 = parseInt(e%10);
		temp2 += value1;
		console.log(value1);
	}
	if(temp2 == temp1){
		return true;
	}
	return false;
}

console.log(count_9_1(99.3932999, 8));
console.log(isEqualSum_2(231.4567, 2));
console.log(isEqualSum_3(231.453674, 2, 2));