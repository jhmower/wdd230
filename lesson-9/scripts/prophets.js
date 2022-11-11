const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let length = document.createElement('p');

  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Birthdate: ${prophet.birthdate}`;
    birthplace.textContent = `Place of birth: ${prophet.birthplace}`;
    length.textContent = `Time as President: ${prophet.length}`;

  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} President of the Church`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(length);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(prophets)
    prophets.forEach(displayProphets);
});


