import data from '../assets/dinosaurs.json' assert { type: 'json'};
import dinoListItem from "./components/dinoListItem.js";
import './utils/hideFooter.js';
import filterDinosaursByName from "./utils/filterDinosaurs.js";

data.forEach((dinosaur) => console.log(dinoListItem(dinosaur))); // loop over the json file and call dinoListItem, passing inthe dinosaur each time resulting in a filled list of dinosaurs on screen

const searchBar = document.getElementById('search-bar')
searchBar.addEventListener('keyup', () => {
    document.getElementById('dino-list').innerHTML = ''
    filterDinosaursByName(searchBar.value).forEach((dinosaur) => console.log(dinoListItem(dinosaur)));
})

// temporary testing (This is a temporary workaround to allow me to test the display data feature -mn)
const modalAnchor = document.createElement("div"); // temporary var for until I know what container that Sebastian creates
Array.from(document.querySelectorAll('li')).forEach((dino, index) => {
    dino.style = "cursor: pointer" // changes the cursor to pointer
    dino.onclick = e => {
        displayDinosaur(data[index], modalAnchor); // adds an event listener to every dinosaur and onclick we call the displayDinosaur function, passing in the data of the dinosaur we clicked on, and the anchor of the modal.
    }
})

const pagesToDisplay = 10 // set number of pages to display, which limits number of dinosaurs per page
const dinosPerPage = Math.ceil(data.length / pagesToDisplay); // calcluates the number of dinos per page

// creates the page navigation menu as a child element to parent ID: dino-list -vinc
const generatePaginationNav = (numPages) =>{
    const pageNavHTML = `
    <ul>
        <li class="prev-btn"><</li>
        <li class="next-btn">></li>
    </ul`;

    const paginationNav = createElement("nav", pageNavHTML, document.querySelector("#dino-list"));
    const prevBtn = document.querySelector('.prev-btn');
    // for every dino page, add it after the prev-btn created (paginationNav)
    // every page number is an HTML element: <li> ${current for loop index} </li>
    for (let i = 0; i < numPages; i++) {
        const pageBtn = document.createElement("li");
        pageBtn.className = `page${i + 1} pageBtn`;
        console.log(pageBtn);
        pageBtn.textContent = i + 1;
        prevBtn.append(pageBtn); 
        console.log(numPages);
    }
    console.log('generated page nav');
}
generatePaginationNav(pagesToDisplay);