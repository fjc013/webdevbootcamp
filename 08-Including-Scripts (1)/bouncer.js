var isSquare = function(n) {
	return Math.sqrt(n) % 1 === 0;;
}

function bouncerTest(age) {
	if (age < 0) {
		alert("Be serious...");
	}
	else if (age == 21) {
		console.log("Happy 21st birthday!!");
	}
	else if (age % 2 > 0) {
		console.log("Your age is odd...");
	}
	
	if (isSquare(age)) {
		console.log("Your age is a perfect square!!");
	}
	if (age < 18) {
		console.log("Sorry, you're not old enough to enter the venue");
	}
	else if (age < 21) {
		console.log("You can enter, but can't drink");
	}

	else {
		console.log("Enter, and find the bar!");
	}
}

var age = prompt("Let me see some ID");

bouncerTest(age);