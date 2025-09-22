let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (myName=="null"){
    myHeading.textContent = `Magic is happening here`;
  }else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Magic is happening here, ${myName}`;
  }
}

if (localStorage.getItem("name")=="null"){
  localStorage.setItem("name", "Guest");
} else if(!localStorage.getItem("name")) {
  setUserName();
 }else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Magic is happening here, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});