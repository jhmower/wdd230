const requestURL = 'scripts/data.json';
const cards = document.querySelector('directory');
let spotlightNumber = 1;

function displayMembers(member) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let title = document.createElement('p');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let hr = document.createElement('hr');


    // Change the textContent property of the h2 element to contain the prophet's full name
    title.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = `${member.phone}`;


  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    logo.setAttribute('src', member.logo);
    logo.setAttribute('alt', `Logo of ${member.name}`);
    logo.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
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
    
    // card.appendChild(url);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div#spotlights').appendChild(card);
}

function findGold(member) {
  if (member.membership == "Gold") {
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
    console.table(members)
    // const member1 = jasonObject['members.']
    // console.table(member1)
    gold_members = []
    members.forEach(findGold)
    shuffle(gold_members)
    console.log(gold_members)
    gold_members.forEach(displayMembers);

});