lastmodified = document.querySelector("#last-updated");
lastmodified.textContent = new Date(document.lastModified);
// let lastModified = document.lastModified;
// document.getElementById("#last-updated").textContent = lastModified;

let d = new Date();
let year = d.getFullYear();
// console.log(year)
// document.getElementById("#copywriteYear").textContent = year;
let copywrite = document.querySelector("#copywrite-year");
copywrite.insertAdjacentText("beforeend", year)

function toggleMenu() {
    document.getElementById("primary-nav").classList.toggle("open")
    document.getElementById("hamburger-btn").classList.toggle("open")
}

const x = document.getElementById("hamburger-btn")

x.onclick = toggleMenu


const datefield = document.querySelector("#current-date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

const upperHeader = document.getElementById('upper-header')
if (d.getDay() == 1 || d.getDay() == 2) {
    upperHeader.style.display = "block"
}
console.log(d.getDay())