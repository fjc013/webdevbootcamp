//
// 1. Write a function that accepts an array, and prints out each element on a separate line
//    in reverse order.
//
// start with an array
var arrayP1 = [1,2,3,4,5];
function printReverse(array) {
	for (var i = array.length - 1; i >= 0; i-- ) {
		console.log("-> " + array[i]);
	}
}
// 2. Uniform - Check an array for "sameness"
//		quit on first difference
