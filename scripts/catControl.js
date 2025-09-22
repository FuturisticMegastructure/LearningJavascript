const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat1.jpg") {
    myImage.setAttribute("src", "images/cat2.jpg");
  } else {
    myImage.setAttribute("src", "images/cat1.jpg");
  }
});