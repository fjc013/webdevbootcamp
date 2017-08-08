// Section 10, Lecture 116 Function Problem Set
//1. isEven() - Write a function that takes a single numeric arg
// and returns true if the number is even, false otherwise
function isEven(num) {
	console.log(">>> isEven " + num);
	return (num %2 === 0);
}
//
// 2. factorial() take a single numeric arg and return it's factorial
function factorial(num) {
	console.log(">>> factorial " + num);
	if (num === 0 || num === 1) {
		return 1;
	}
	var retval = 1;
	for (var i = 2; i <= num; i++) {
		retval = retval * i;
		//console.log("retval " + retval);
	}
	return retval;
}
// Same as 2 - using recursion
function factRecursion(num) {
	//console.log(">>> factRecursion " + num);
	if (num === 0) {
		return 1;
	}
	return num * factRecursion(num - 1);
}
// Accept a string in kebab-case, return as snake_case
function kebabToSnake(str) {
	var kebab = '-';
	var regexp = new RegExp(kebab, "g");
	var snake = '_';
	var newStr = str.replace(regexp, snake); //replace doesn't change str
	return newStr;
}
// Ensure the response from prompt is a number
var num = parseInt(prompt("Is it even? Give me just one number"), 10);
console.log ("Is it even? " + isEven(num));
//
console.log("What's it's factorial? " + factorial(num));
//
console.log("Factorial with fancy recursion " + factRecursion(num));
//
// Prompt always returns a string
var str = prompt("Enter some kebab-cased string");
console.log("Started with " + str + " returned with " + kebabToSnake(str));



