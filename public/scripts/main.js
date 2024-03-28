import data from './json.js'
import displayDinosaur from './components/details.view.js';
import dinoListItem from './components/dinoListItem.js';

const anchor = document.getElementById('dino-list')

data.map(dinosaur => 
   dinoListItem(dinosaur, anchor)
  );


// temporary testing (This is a temporary workaround to allow me to test the display data feature -mn)
const modalAnchor = document.getElementById("dinosaur-modal"); // temporary var for until I know what container that Sebastian creates
Array.from(document.querySelectorAll('li')).forEach((dino, index) => {
    dino.style = "cursor: pointer" // changes the cursor to pointer
    dino.onclick = e => {
        displayDinosaur(data[index], modalAnchor); // adds an event listener to every dinosaur and onclick we call the displayDinosaur function, passing in the data of the dinosaur we clicked on, and the anchor of the modal.
    }
})

