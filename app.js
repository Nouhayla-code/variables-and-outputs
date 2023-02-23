"use strict";
let number = 0;

// en funktion som sætter alt i gang
window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp-app is running");
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementNumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementNumber);
}
// function som ved klik på knap så går den op (+)
function incrementNumber() {
  console.log("Plus-knap");
  console.log(number);
  number++;
  console.log(number);
  displaynumber();
}
// function som ved klik på knap så går den ned (-)
function decrementNumber() {
  console.log("minus-knap");
  console.log(number);
  number--;
  console.log(number);
  displaynumber();
}

function displaynumber() {
  console.log("displayNumber");
  document.querySelector("#number").textContent = number;
  let message = `The number is:${number}`;
  console.log(message);
  document.querySelector("#message").textContent = message;
}
