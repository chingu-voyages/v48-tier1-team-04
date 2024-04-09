import createEle from "../utils/createEle.js";
import displayDinosaur from "./displayDinosaur.js";

const dinoListItem = (dinosaur) => {
  const { diet, foundIn, imageSrc, name, typeSpecies, weight } = dinosaur; // destructures the dinosaur object into smaller chunks
  const content = `<li class="dino">
  <div title="${name}"> 
    <img
      src="${imageSrc}" alt="${name}" />
  </div>
  <div class="dino-info">
    <h5 class="dino-info__name">${name}</h5>
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
</li>`; // dynamically generarte the html for a single dinosaur list item
  const parentContainer = document.getElementById('dino-list'); // declares the parent container which is the list of dinosaurs
  const dinoLi = createEle("li", content, parentContainer); // declares a variable to a new `<li>` with the content of `content` and appended  to the parentContainer
  dinoLi.onclick = () => console.log(displayDinosaur(dinosaur)); // adds event listen on click to the list item just created, and calls the `displayDinosaur`, passing in this dinosaur into the function
  return "Dinosaur added of " + name + " to the list"; // returns a log if we wanted to console.log our results
};

export default dinoListItem;
