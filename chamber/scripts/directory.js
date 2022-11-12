const requestURL = 'scripts/data.json';
const cards = document.querySelector('directory');

function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');


  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;
    url.setAttribute('href', member.url);

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div#directory').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    console.table(members)
    members.forEach(displayMembers);
});



// grid/list switching

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
}
