const fruitListURL = 'scripts/fruit.json'
const fruitSelect1 = document.querySelector('#first-fruit')
const fruitSelect2 = document.querySelector('#second-fruit')
const fruitSelect3 = document.querySelector('#third-fruit')
const orderButton = document.querySelector('#order-button')
const inputName = document.querySelector('#input-name')
const inputEmail = document.querySelector('#input-email')
const inputPhone = document.querySelector('#input-phone')

function convertUnix(unix_timestamp) {
    const date = new Date(unix_timestamp)
    return date
}

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

function createOrder() {
    if (inputName.value != null && inputEmail.value != null && inputPhone.value != null) {
        // create order object
        let orderObject = []
        let date = Date.now()
        orderObject.push(date)
        let name = inputName.value
        orderObject.push(name)
        let fruit1 = fruitSelect1.value
        orderObject.push(fruit1)
        let fruit2 = fruitSelect2.value
        orderObject.push(fruit2)
        let fruit3 = fruitSelect3.value
        orderObject.push(fruit3)
        
        localStorage.setItem("last-order", JSON.stringify(orderObject))

        let previousOrders = JSON.parse(localStorage.getItem("previous-orders"))
        if (previousOrders == null) {
            previousOrders = []
        }
        previousOrders.unshift(orderObject)
        localStorage.setItem("previous-orders", JSON.stringify(previousOrders))
    }
}
function displayLastOrder() {
    let lastOrder = JSON.parse(localStorage.getItem("last-order"))
    if  (lastOrder == null) {
        let card = document.createElement('div')
        let orderName = document.createElement('h3')

        orderName.textContent = `This is your first order!`
        card.appendChild(orderName)
        document.querySelector("#order").appendChild(card)

    } else {
        // create elements
        let card = document.createElement('div')
        let orderDate = document.createElement('h3')
        let orderName = document.createElement('h3')
        let order = document.createElement('p')
        

        // display order
        previousOrderDate = convertUnix(lastOrder[0])
        orderDate.textContent = previousOrderDate.toDateString()
        orderName.textContent = lastOrder[1]
        order.textContent = `${lastOrder[2]} and ${lastOrder[3]} and ${lastOrder[4]}`
        
        card.setAttribute('id', "previous-order")
        card.appendChild(orderDate)
        card.appendChild(orderName)
        card.appendChild(order)
        document.querySelector("#order").appendChild(card)
    }
}

fetch(fruitListURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        jsonObject.forEach(addFruitOptions)
});

orderButton.addEventListener('click', createOrder)

displayLastOrder()