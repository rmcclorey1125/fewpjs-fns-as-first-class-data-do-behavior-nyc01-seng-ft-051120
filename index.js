/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeS) {
  let time = parseInt(timeS, 10);
  if (time < 12) return "Good Morning"
  if (time > 17) return "Good Evening"
  else return "Good Afternoon"
 }

 function displayMessage(str) {
  document.getElementById("greeting").innerText = str;
 }