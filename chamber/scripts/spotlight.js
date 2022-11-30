const requestURL = 'scripts/data.json';
const cards = document.querySelector('directory');
let spotlightNumber = 1;

function displayMembers(member) {
    let card = document.createElement('div');
    let title = document.createElement('p');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let hr = document.createElement('hr');


    title.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;


  
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
  
    if (spotlightNumber == 1) {
      card.setAttribute('id', "spotlight-1");
      spotlightNumber = 2;
    } else if (spotlightNumber == 2 ) {
      card.setAttribute('id', "spotlight-2");
      spotlightNumber = 3;
    } else if (spotlightNumber == 3 ) {
      card.setAttribute('id', "spotlight-3");
      spotlightNumber = 4;
    } else {
      card.setAttribute('id', "spotlight-4");
      spotlightNumber = 4;
    }

    card.appendChild(title);
    card.appendChild(logo);
    card.appendChild(hr);
    card.appendChild(address);
    card.appendChild(phone);
      
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div#spotlights').appendChild(card);
}

function findGoldSilver(member) {
  if (member.membership == "Gold") {
    gold_members.push(member)
  } else if (member.membership == "Silver"){
    gold_members.push(member)
  };
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    gold_members = []
    members.forEach(findGoldSilver)
    shuffle(gold_members)
    gold_members.forEach(displayMembers);

});