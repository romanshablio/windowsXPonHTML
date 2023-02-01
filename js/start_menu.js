let startButton = document.getElementById("startButton");
let startMenu = document.getElementById("startMenu");
let myComputer = document.getElementById("myComputer");
let myComputerWindow = document.getElementById("computerWindow");
let windowTop = document.getElementById("myComputerPanel");
let closeWindowButton = document.getElementById("closeMyComputerButton");
let myGamesFolder = document.getElementById("myGames");
let gamesWindow = document.getElementById("gamesWindow");
let closeGames = document.getElementById("closeGamesFolderButton");
//обработчик кнопки открытия меню пуск
startButton.addEventListener("click", function () {
  startMenu.classList.toggle("is-active");
});
// обработчик открытия папки мой компьютер
myComputer.addEventListener("click", function () {
  myComputerWindow.classList.add("active");
  windowTop.classList.add("active");
});
// обработчик закрытия окна мой компьютер
closeWindowButton.addEventListener("click", function () {
  myComputerWindow.classList.remove("active");
  windowTop.classList.remove("active");
});

myGamesFolder.addEventListener("click", function () {
  gamesWindow.classList.add("active");
});

closeGames.addEventListener("click", function () {
  gamesWindow.classList.remove("active");
});
