import createEle from "../../utils/createEle.js";


const dinoListItem = (dinosaur) => {
  const { diet, foundIn, imageSrc, name, typeSpecies, weight } = dinosaur; // destructures the dinosaur object into smaller chunks
  const content = `
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
`; // dynamically generarte the html for a single dinosaur list item
  const randomColor = () => `${Math.floor(Math.random()*16777215).toString(16)}6f`; // generates a random color for the background of the dinosaur card
  const parentContainer = document.getElementById('dino-list'); // declares the parent container which is the list of dinosaurs
  parentContainer.style.background = `url(./assets/watercolor/${Math.floor(Math.random()*58)}.png) fixed`; // sets the background of the parent container to the image of the dinosaur
  const dinoLi = createEle("li", content, parentContainer, 'dino'); // declares a variable to a new `<li>` with the content of `content` and appended  to the parentContainer
  //dinoLi.style.background = randomColor(); // sets the background of the list item to the image of the dinosaur
 // dinoLi.onclick = () => displayDinosaur(dinosaur); // adds event listen on click to the list item just created, and calls the `displayDinosaur`, passing in this dinosaur into the function
  return "Dinosaur added of " + name + " to the list"; // returns a log if we wanted to console.log our results
};

export default dinoListItem;
