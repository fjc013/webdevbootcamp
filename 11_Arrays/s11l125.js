var todos = [];
var input = prompt("what would you like to do?");

while(input !== "quit") {
	// handle input
	if (input === "list") {
		console.log(todos);
	} else if (input === "new") {
		//ask for new todo
		var newToDo = prompt("Enter a new todo");
		//add to todo array
		todos.push(newToDo);
	}
	//ask again for input
	var input = prompt("what would you like to do?");
}

console.log("YOU QUIT");