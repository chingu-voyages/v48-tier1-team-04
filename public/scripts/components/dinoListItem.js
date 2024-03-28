import createElement from "../utils/createEle.js";
import displayDinosaur from "./detailsView.js";

const dinoListItem = (dinosaur) => {
  const { diet, foundIn, imageSrc, name, typeSpecies, weight } = dinosaur;
  const content = `<li class="dino">
  <div>
    <img
      src="${imageSrc}" alt="${name}" />
  </div>
  <div class="dino-info">
    <h5>${name}</h5>
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
</li>`;
  const anchor = document.getElementById('dino-list')
  const dinoLi = createElement("li", content, anchor);
  dinoLi.style = "cursor:pointer";
  dinoLi.onclick = () => displayDinosaur(dinosaur);
  return "list item added of " + name + " to the list";
};

export default dinoListItem;
