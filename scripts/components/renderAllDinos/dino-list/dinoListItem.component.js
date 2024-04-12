import "./dinoListItem.styles.scss";
import createEle from "../../../utils/createEle.js";
import displayDinosaur from "../../displayDinosaur/displayDinosaur.component.js";


const dinoListItem = (dinosaur) => {
  const { diet, foundIn, imageSrc, name, typeSpecies, weight } = dinosaur; // destructures the dinosaur object into smaller chunks
  const content = `
  <div title="${name}"> 
    <img
      src="${imageSrc}" alt="${name}" />
  </div>
  <div class="dino-info">
    <h5 class="dino-info__name" >${name}</h5>
    <div class="region">Found in:
      <span>${foundIn}</span>
    </div>
    <div class="diet"> Diet:
      <span>${diet}</span>
    </div>
  </div>
  <div class="species-type">Species Type:
      <span>${typeSpecies}</span>
    </div>
    ${
      weight > 0
        ? `</div>
    <div class="weight"> Weight:
      <span>${weight} Kg</span>
    </div>`
        : " "
    }
`;
  const randomHue = Math.floor(Math.random() * 360); // generates a random hue
  const parentContainer = document.getElementById('dino-list'); // declares the parent container which is the list of dinosaurs
  const dinoLi = createEle("li", content, parentContainer, 'dino show'); // declares a variable to a new `<li>` with the content of `content` and appended  to the parentContainer
  dinoLi.style.filter = `hue-rotate(${randomHue}deg)` // sets the background color of the list item to a random hue
  dinoLi.onhover = () => dinoLi.style.filter = `hue-rotate(${randomHue} saturate(5))`; // adds an event listener to the list item to rotate the hue randomly on hover
  dinoLi.onclick = () => displayDinosaur(dinosaur); // adds event listen on click to the list item just created, and calls the `displayDinosaur`, passing in this dinosaur into the function
  return "Dinosaur added of " + name + " to the list"; // returns a log if we wanted to console.log our results
};

export default dinoListItem;
