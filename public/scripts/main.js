import data from "./json.js";
import createElement from "./utils/createEle.js";

const displayDinosaur = (dino, anchor = document.createElement("div")) => {
  const {
    description,
    diet,
    foundIn,
    id,
    imageSrc,
    length,
    name,
    namedBy,
    taxonomy,
    typeOfDinosaur,
    typeSpecies,
    weight,
    whenLived,
  } = dino;


  anchor.id = id;
  anchor.className = "modal-container";
  const content = `
    <div class="header-flex">
    <h1 class="dinosaur-name">${name} (${taxonomy})</h1>
    <p><strong>Named By:</strong> ${namedBy}</p>
    <span class="close-btn">&times;</span>
    </div>
    <div class="dinosaur-image-container">
    <img class="dinosaur-detail-image"
      src="${imageSrc}"
      alt="Artwork reperesenting a ${name}}" />
    </div>
    <div class="container">
    <p><strong>Found In:</strong> ${foundIn}</p>
    <p><strong>Type:</strong> ${typeOfDinosaur}</p>
    <p><strong>Length:</strong> ${length}/p>
    <p><strong>Weight:</strong> ${weight}</p>
    <p><strong>Diet:</strong> ${diet}</p>
    <p><strong>Lived during:</strong> ${whenLived}</p>
    <p><strong>Species Type:</strong> ${typeSpecies}</p>
    <p><strong>Description:</strong> ${description}</p>   
    </div>
    `;
  createElement("div", content, anchor);
  document.body.append(anchor);
  const modal = document.querySelector(`.modal-container`);
  const closeBtn = modal.querySelector(".close-btn");
  closeBtn.style = "cursor:pointer";
  closeBtn.onclick = () => modal.remove();
};

displayDinosaur(data[1]);
