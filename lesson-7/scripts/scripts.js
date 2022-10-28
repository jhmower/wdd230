const chapInput = document.getElementById('favchap');
const addButton = document.getElementById('addChap');
const chapList = document.getElementById('list');

addButton.addEventListener("click", function () {
    if (chapInput.value.length > 0) {
        const newChapter = document.createElement('li');
        const newText = document.createElement('span');
        const newButton = document.createElement('button');
        
        newText.innerHTML = chapInput.value;
        newButton.textContent = 'X'
        newChapter.appendChild(newText)
        newChapter.appendChild(newButton)

        chapList.appendChild(newChapter);
        
        newButton.addEventListener("click", function() {
            chapList.removeChild(newChapter)
        })
    }
    chapInput.value = ""
    chapInput.focus()

});
// function addLi() {
//     chapInputValue = chapInput.value;
//     if (chapInput != "") {
//         console.log(chapInput.value)
//         const newChapter = document.createElement('li');
//         chapList.appendChild(newChapter);
//         newChapter.innerHTML = chapInputValue; 
//     };
// };

// function consoleTest() {
//     console.log('test')
// }
// addButton.addEventListener("click", addLi);
