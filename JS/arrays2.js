function pow (x, n) {
	if(n != 1){
		return x * pow(x, n - 1)
	}
	else {
		return x;
	}
}

let a = [3, 2, 4, 3, 5];

function average (array) {
	let result = 0;
	for(let i = 0; i != array.length; ++i){
		result += array[i];
	}
	return result / array.length;
}

let arrInt = [3, 1, 1, 3];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let f = function fuctorial (n) {
	return n ? n * fuctorial(n - 1) : 1
}


let arrStr = ["Some element", "Another element", "Third element"];

arrStr.forEach( function(element, index) {
	arrStr[index] = element.toUpperCase();
});

arrInt.forEach( function(element, index) {
	if(element % 2 == 0){
		//console.log(element);
	}
});

console.log( arrInt.map(function(argument) {
	return argument % 2 == 0;
}));

console.log(arrStr.map(function(argument){
	return argument.toUpperCase();
}));

let filtered = arrStr.filter(function(e){
	return e.indexOf('S') === -1;
});


console.log(arrInt.every(function(e){
	return e % 2 == 0;
}));

console.log(arrInt.some(function(e){
	return e % 2 == 0;
}));

console.log(arrStr.every(function(e){
	return e.length < 2;
}));

console.log(arrStr.some(function(e){
	return e.indexOf('O') !== -1;
}));

let reducer2 = arrInt.reduce(function(accumulator, currentValue){
	return accumulator + (currentValue % 2 == 0 ? currentValue : 0);
});

let red2 = (acc, curV) => acc + (curV % 2 != 0 ? curV : 0);

let reducer_2 = arrInt.reduce(function(a, b){
	return Math.pow(a, b);
});


//let arrInt = [3, 1, 1, 3];

let example = [{val: 19}, {val: 5}];

let res = arrInt.map((el)=>{
	return {val: el};
})
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

let arr = [0, 1, 1, 1];
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2);
};
console.log(binaryArrayToNumber(arr));

let str = "1001";
console.log(parseInt(str, 16));

var foo = ["one", "two", "three"];

var one   = foo[0];
var two   = foo[1];
var three = foo[2];


let [one1, two1, three1] = foo;
console.log(one1 + ' ' + two1 + ' ' + three1);

let Obj = {Mushroom : 'green', age : 27}

function distructIt({Mushroom, age}){
	console.log(Mushroom);
	console.log(age);
}

distructIt(Obj);


function GetSum( a,b ) {
   let result = 0;
   if(a > b){
   	[a, b] = [b, a];
   }
   for(; a <= b; ++a){
   	result += a;
   }
   return result;
}

const GetSum1 = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

console.log(GetSum(-1, 2));


let arr = [1, 2, 3];
//let arr1 = [...arr]; // глубокое копирывание
let arr1 = arr; // поверхностное
arr1[0] = 100; 

console.log(arr );
console.log(arr1 );

function findNextSquare(sq) {
  let result = Math.sqrt(sq);
  if(Number.isInteger(result)){
  	return Math.pow(result + 1, 2);
  }
  return -1;
}

console.log(findNextSquare(144));

let arr = [ 81, 83, 63, 49, 23, 13, 43, 33, 35, 71, 99 ];

function sortArray(array) {
  let notEven = array.filter(number => number % 2 !== 0).sort((a, b) => a - b);
  for(let i = 0, j = 0; i != array.length; ++i){
  	if(array[i] % 2 !== 0){
  		array[i] = notEven[j++];
  	}
  }
  return array;
}


function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray(arr));

let number = 153;

function narcissistic(value) {
  let size = parseInt(Math.log10(value)) + 1;
  let str = value.toString().split('').map(element => Math.pow(element, size));
  str.reduce((a, b) => a + b);
  return str.reduce((a, b) => a + b) === value;
}

console.log(narcissistic(number));
// array = [,,,,,];
// arro = () => array.fill(1);
//console.log(arro());

// console.log(arrInt + '||' + res[0]);
// console.log(arrInt);


// console.log(arrInt);
// console.log(arrStr);
// console.log(reducer_2);
// console.log(arrInt.indexOf(3));
// console.log(arrInt.lastIndexOf(3));
// console.log(arrInt.reduce(red2));