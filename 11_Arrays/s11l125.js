var todos = ["Buy new turtle"];
var input = prompt("what would you like to do?");

while(input !== "quit") {
	// handle input
	if (input === "list") {
		if (todos.length === 0) {
			console.log("No to dos yet...");
		} else
		console.log("**********");
		todos.forEach(function(todo, i) {
			console.log(i + ": " + todo);
		});
		console.log("**********");
	} else if (input === "new") {
		//ask for new todo
		var newToDo = prompt("Enter a new todo");
		//add to todo array
		todos.push(newToDo);
		console.log("Added new ToDo");
	} else if (input === "delete") {
		// ask for todo number to delete
		var index = prompt("What is the index of the todo to delete?");
		// delete that todo
		// splice(start, length)
		todos.splice(index, 1);
		console.log("Deleted ToDo");
	}
	//ask again for input
	input = prompt("what would you like to do?");
}

console.log("YOU QUIT");