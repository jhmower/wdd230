const fruitListURL = 'scripts/fruit.json'
const fruitSelect1 = document.querySelector('#first-fruit')
const fruitSelect2 = document.querySelector('#second-fruit')
const fruitSelect3 = document.querySelector('#third-fruit')

function addFruitOptions(fruit) {
    let addingOption1 = document.createElement('option');
    addingOption1.setAttribute('value', fruit.name);
    addingOption1.textContent = `${fruit.name}`;
    fruitSelect1.appendChild(addingOption1);
    let addingOption2 = document.createElement('option');
    addingOption2.setAttribute('value', fruit.name);
    addingOption2.textContent = `${fruit.name}`;
    fruitSelect2.appendChild(addingOption2);
    let addingOption3 = document.createElement('option');
    addingOption3.setAttribute('value', fruit.name);
    addingOption3.textContent = `${fruit.name}`;
    fruitSelect3.appendChild(addingOption3);

}

function addFruitOptionsToSelect(select) {
    addFruitOptions(fruit)
}
function testFunction(fruit){
    console.log(fruit)
}

fetch(fruitListURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        jsonObject.forEach(addFruitOptions)
});


