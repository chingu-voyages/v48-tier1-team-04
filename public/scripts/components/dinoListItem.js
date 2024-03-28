import createElement from "../utils/createEle.js";

const dinoListItem = (dinosaur, anchor) => {
    const {
      diet,
      foundIn,
      imageSrc,
      name,
      typeSpecies,
      weight,
    } = dinosaur;
  const content = ` <li class="dino">
  <a>
    <img
      src="${imageSrc}" alt="${name}" />
  </a>
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
    ${weight > 0 ? `</div>
    <div class="weight"> Weight:
      <span>${weight} Kg</span>
    </div>`: " "}
</li>`;
createElement("li", content, anchor);
return "list item added of " + name + " to the list"
}

export default dinoListItem;