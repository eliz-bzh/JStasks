function simplD_1(n){
	for(i = 1; i <= n; ++i){
		if(parseInt(n % i) == 0){
			console.log(i);
		}
	}
}

function simpleNumber(value){
	if((value % 2 == 0 && value != 2) || value <= 1){
		return false;
	}
	return true; 
}

function reverseNumber(value){
	let temp = 0;
	while(parseInt(value)){
		value = parseInt(value);
		temp *= 10;
		temp += parseInt(value%10);
		value = value/10;
	}
	return parseInt(temp);
}

function svSimpleNumber_2(a, b){
	for(let i = a; i!=b; ++i){
		if(simpleNumber(i) && simpleNumber(reverseNumber(i))){
			console.log(i);
		}
	}
}

function canonicalDecomposition_3(value){
	for(let i = 0; value!=1; ++i){
		if(simpleNumber(i) && value%i == 0){
			console.log(i);
			value /= i;
			i = 0;
		}
	}
}


function sum_digits(number){
	var res = 0;
	for(; parseInt(number) != 0; number/=10){
		res+= parseInt(number%10);
	}
	return res;
}

function sumSimpleNumber_7(n, m){
	for(let i = 0; i != n; ++i){
		if(simpleNumber(i)){
			if(sum_digits(i) < m){
				console.log(i);
			}
		}
	}
}



/*simplD_1(6);
svSimpleNumber_2(11, 32);
canonicalDecomposition_3(83600);*/
//sumSimpleNumber_7(50, 7);