//
// 1. Write a function that accepts an array, and prints out each element on a separate line
//    in reverse order.
//
// start with an array
function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i-- ) {
		console.log("-> " + array[i]);
	}
}
// 2. Uniform - Check an array for "sameness"
//		quit on first difference

function isUniform(array) {
	var tmp = "";
	for (i = 0; i < array.length; i++) {
		if (i === 0) {
			tmp = array[i];
		}
		if (tmp !== array[i]) {
			console.log("Boo... not uniform");
			return;
		} else if (i === array.length - 1) {
			console.log("Yooray!! It's a uniform array");
		}
	}
}

// 3. Sum Array - Add up the elements of an array
function sumArray(array) {
	var sum = 0;
	array.forEach(function(el) {
		sum += el;
	});
	console.log("Sum of array is " + sum);
}
//
// 4. nax() accept an array of numbers
//	return the element of greatest value
function max(array) {
	array.sort(function(a,b) {
		return a - b;
	});
	console.log("Greatest element in array: " + array[(array.length - 1)]);
}
//
var arrayP1 = [1,2,3,4,5];
var arrayP2a = [1,1,1,1,1];
var arrayP2b = [2,3,"unicorn",4,5];
var arrayP3 = [1,2,3,4,5];
var arrayP4 = [1,2,3,-5,10,100,99];
//
// Simple UI
var input = prompt("what would you like to do?");

while(input !== "quit") {
	// handle input
	if (input === "1") {
		console.log("You asked to reverse an array");
		printReverse(arrayP1);
		console.log("**********");
	} else if (input === "2") {
		console.log("You asked to check for uniformity");
		console.log("for array " + arrayP2a + ":");
		isUniform(arrayP2a);
		console.log("for array " + arrayP2b + ":");
		isUniform(arrayP2b);
		console.log("**********");
	} else if (input === "3") {
		console.log("You asked to Sum an array");
		sumArray(arrayP3);
		console.log("**********");
	} else if (input === "4") {
		console.log("You asked for the biggest number in an array");
		max(arrayP4);
		console.log("**********");
	}
	//ask again for input
	input = prompt("what would you like to do?");
}

console.log("YOU QUIT");