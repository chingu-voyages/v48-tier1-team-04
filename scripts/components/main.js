import createEle from "../utils/createEle";
import randomDino from "../utils/giveRandoDino";
let i = 1;
const renderDinoCard = (dino) => {
  const renderDinoPopup = (dino) =>
    createEle(
      "div",
      `
    <div class="popup__content">
<div class="popup__left"><img src="img/nat-8.jpg" alt="Tour Photo" class="popup__img"><img src="${dino.imageSrc}" alt="Tour Photo" class="popup__img"></div>
    <div class="popup__right">
      <a href="#section-tours" class="popup__close">&times;</a>
      <h2 class="heading-secondary u-margin-bottom-sm">Start booking now!</h2>
      <h3 class="heading-tertiary u-margin-bottom-sm">Important &ndash; Please read these terms before booking</h3>
      <p class="popup__text">
        Garrett County Adventures is just a fictional idea for now. I would personally love to offer services similar to those offered on this website, but my main reason for making this webpage was for practice learning the styling language SASS. If you like what you see, please consider hiring me for a future project =) Or, maybe you are nearby Garrett County and are looking for a tour, I can help with that too xD
      </p>
      <a href="#section-tours" class="btn btn--green">Book Now</a>
    </div>
  </div>
    `,
      document.body,
      "popup",
      `popup`
    );

const generateRandomFact = async () => await fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs/random").then((res) => res.json());  
const randomFact = generateRandomFact();
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1" style="background-image:url(${dino.imageSrc})">
              &nbsp;
            </div>
            <h4 class="card__heading">
              <span class="card__heading-span card__heading-span--1">
                ${dino.name}
              </span>
            </h4>
            <div class="card__details">
              <ul>
                <li>Discovered in ${dino.foundIn}</li>
                <li>Weighed ${dino.weight} tons</li>
                <li>Stood ${dino.length} meters long</li>
                <li>${dino.diet}</li>
               </ul>
            </div>
          </div>
          <div class="card__side card__side--back card__side--back-1" style="background-image:url(${dino.imageSrc})">
            <div class="card__slide card__slide--back card__slide--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-value">${dino.name}</p>
                  <p class="card__price-only">(${dino.taxonomy})</p>
                </div>
                <a href="#popup" class="btn btn--black">Learn More!</a>
              </div>
            </div>
          </div>
        </div>
     `;
  div.classList.add("col-1-of-3");
  renderDinoPopup(dino);
  i++;
  return div.outerHTML;
};

const renderMain = () => {
  const headings = [
    "Random Dinosaurs",
    "Jump Right In",
    "Discover More",
    "Dinosaurs Galore",
  ];
  const randomDinos = [];
  while (randomDinos.length < 3) {
    const newDino = randomDino();

    if (!randomDinos.includes(newDino)) {
      randomDinos.push(newDino);
    }
  }
  const content = `
    <section class="section-tours" >
    <div class="u-text-center u-margin-bottom-lg">
      <h2 class="heading-secondary" id="section-tours">
        ${headings[Math.floor(Math.random() * headings.length)]}
      </h2>
    </div>
    <div class="row">
        ${randomDinos.map((dino) => renderDinoCard(dino)).join("")}
   
    </div>
    <div class="u-text-center u-margin-top-xl">
    <button class="btn btn--black">View All Dinosaurs</button>
  </div>
  </section>


    `;
  const main = createEle("main", content, document.body);
  return main;
};

export default renderMain;
