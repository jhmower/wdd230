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
// console.log(d.getDay())






// // Home page spotlight

// const requestURL = 'scripts/data.json';
// const cards = document.querySelector('spotlights');

// function displayMembers(member) {
//     // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');
//     let logo = document.createElement('img');
//     let address = document.createElement('p');
//     let phone = document.createElement('p');
//     let url = document.createElement('a');


  
//     // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.textContent = `${member.name}`;
//     address.textContent = `${member.address}`;
//     phone.textContent = `${member.phone}`;
//     url.textContent = `${member.url}`;
//     url.setAttribute('href', member.url);

  
//     // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
//     logo.setAttribute('src', member.logo);
//     logo.setAttribute('alt', `Logo of ${member.name}`);
//     logo.setAttribute('loading', 'lazy');
  
//     // Add/append the section(card) with the h2 element
//     card.setAttribute('class', "directory-section")
//     card.appendChild(h2);
//     card.appendChild(logo);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(url);
  
//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div#directory').appendChild(card);
// }

// fetch(requestURL)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     const members = jsonObject['members'];
//     console.table(members)
//     const member1 = jasonObject['members[0]']
//     console.table(member1)
//     members.forEach(displayMembers);
// });