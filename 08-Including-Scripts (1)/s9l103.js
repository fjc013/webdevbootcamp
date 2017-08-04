// While loop problem set
// 1. print all numbers between -10 and 19
const term = 20;
let num1 = -10;
console.log("1. Print all numbers between -10 and 19");
while (num1 < term) {
	console.log(num1);
	num1++;
}

// 2. Print al even numbers between 10 and 40
const term2 = 40;
let num2 = 10;
console.log("2. Print even numbers between 10 and 40");
while (num2 <= term2) {
	if (num2 % 2 === 0) {
		console.log(num2);
	}
	num2 ++;
}
// 3. Print all odd numbers between 300 and 333
const term3 = 333;
let num3 = 300;
console.log("3. Print odd numbers between 300 and 333");
while (num3 <= term3) {
	if (num3 % 2 !== 0) {
		console.log(num3);
	}
	num3++;
}
// 4. Print all numberss divisible by 5 and 3 between 5 and 50
const term4 = 50;
let num4 = 5;
console.log("4. Print all numberss divisible by 5 and 3 between 5 and 50");
while (num4 <= term4) {
	if ( (num4 % 3 === 0) && (num4 % 5 === 0) ) {
		console.log(num4);
	}
	num4++;
}