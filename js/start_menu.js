let startButton = document.getElementById("startButton");
let startMenu = document.getElementById("startMenu");
let myComputer = document.getElementById("myComputer");
let myComputerWindow = document.getElementById("computerWindow");
let windowTop = document.getElementById("myComputerPanel");
let closeWindowButton = document.getElementById("clodeMyComputerButton");

startButton.addEventListener("click", function () {
  startMenu.classList.toggle("is-active");
});

myComputer.addEventListener("click", function () {
  myComputerWindow.classList.add("active");
  windowTop.classList.add("active");
});

closeWindowButton.addEventListener("click", function () {
  myComputerWindow.classList.remove("active");
  windowTop.classList.remove("active");
});
