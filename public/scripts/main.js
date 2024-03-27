import data from './json.js'
import displayDinosaur from './components/details.view.js';

const anchor = document.getElementById('dino-list')

data.map(dinosaur => {
    const li = document.createElement('li')
    li.innerHTML = dinosaur.name
anchor.append(li)
return "list item added of " + dinosaur.name + " to the list"
});

// temporary testing (This is a temporary workaround to allow me to test the display data feature -mn)

const modalAnchor = document.createElement("div"); // temporary var for until I know what container that Sebastian creates
Array.from(document.querySelectorAll('li.dino')).forEach((dino, index) => {
    dino.style = "cursor: pointer" // changes the cursor to pointer
    dino.onclick = e => {
        displayDinosaur(data[index], modalAnchor); // adds an event listener to every dinosaur and onclick we call the displayDinosaur function, passing in the data of the dinosaur we clicked on, and the anchor of the modal.
    }
})

