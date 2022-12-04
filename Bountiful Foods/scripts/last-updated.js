lastUpdated = document.querySelector("#last-updated");
updatedDate = new Date(document.lastModified);
lastUpdated.textContent = updatedDate.toDateString();

let copywriteDate = new Date();
let year = copywriteDate.getFullYear();
let copywrite = document.querySelector("#copywrite");
copywrite.insertAdjacentText("beforeend", year);