// For loop problem set
// 1. print all numbers between -10 and 19

console.log("1. Print all numbers between -10 and 19");
for (var i = -10; i < 20; i++) {
	console.log(i);
}

console.log("2. Print all the even numbers between 10 and 40");
for (var i = 10; i <= 40; i++) {
	if (i % 2 === 0) {
	console.log(i);
	}
}

//3. Print all odd numbers between 300 and 333
console.log("3. Print odd numbers between 300 and 333");
for (var i = 300; i <= 333; i++) {
	if(i % 2 !== 0) {
		console.log(i);
	}
}

// 4. Print all numberss divisible by 5 and 3 between 5 and 50
console.log("4. Print all numbers divisible by 5 and 3 between 5 and 50");
for (var i = 5; i <= 50; i++) {
	if ( (i % 3 === 0) && (i % 5 === 0) ) {
		console.log(i);
	}
}
