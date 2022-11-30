const requestURL = 'scripts/data.json';
const cards = document.querySelector('directory');

function displayMembers(member) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let url = document.createElement('a');


  
    h2.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;
    url.textContent = `${member.url}`;
    url.setAttribute('href', member.url);

  
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
  
    card.setAttribute('class', "directory-section")
    card.appendChild(h2);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
  
    document.querySelector('div#directory').appendChild(card);
}

function findGold(member) {
  if (member.membership == "Gold") {
    gold_members.push(member)
  };

}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    members.forEach(displayMembers);
    gold_members = []
    members.forEach(findGold)
});



// grid/list switching

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");


gridbutton.addEventListener("click", () => {
	display.classList.add("directory-grid");
	display.classList.remove("directory-list");
});

listbutton.addEventListener("click", showList); 
function showList() {
	display.classList.add("directory-list");
	display.classList.remove("directory-grid");
}
