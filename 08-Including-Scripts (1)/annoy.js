// Are we there yet?
// let answer = "";
// const y1 = "yes";
// const y2 = "yeah";
// while (answer.toLowerCase() !== y1 && answer.toLowerCase() !== y2) {
// 	answer = prompt("Are we there yet");
// }
// alert("Yay!! We made it!!");

let answer = "";
const y1 = "yes";
const y2 = "yeah";
while (answer.toLowerCase().indexOf(y1) < 0) {
	answer = prompt("Are we there yet");
}
alert("Yay!! We made it!!");
