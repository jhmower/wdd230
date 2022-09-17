lastmodified = document.querySelector("#last-updated");
lastmodified.textContent = new Date(document.lastModified);
// let lastModified = document.lastModified;
// document.getElementById("#last-updated").textContent = lastModified;

let d = new Date();
let year = d.getFullYear();
console.log(year)
// document.getElementById("#copywriteYear").textContent = year;
let copywrite = document.querySelector("#copywriteYear");
copywrite.insertAdjacentText("beforeend", year)