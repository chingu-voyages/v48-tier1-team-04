import randomDino from "../../utils/giveRandoDino";
import createEle from "../../utils/createEle";
import "./dino-of-the-day.styles.scss";
import { randomCallToAction } from "../intro-section/intro-section.component";
import displayDinosaur from "../displayDinosaur/displayDinosaur.component";
const setDailyDinosaur = () => {
  // Get the current date
  const today = new Date().toDateString();
  // Get the stored date
  const storedDate = localStorage.getItem("date");

  // Check if the stored date is today's date
  if (storedDate === today) {
    // If it is, get the daily variable
    return JSON.parse(localStorage.getItem("dailyDinosaur"));
  } else {
    // If it's not, update the daily variable and the date
    const dailyDino = randomDino(); // replace this with the new value for the daily variable
    localStorage.setItem("dailyDinosaur", JSON.stringify(dailyDino));
    localStorage.setItem("date", today);
    return JSON.parse(localStorage.getItem("dailyDinosaur"));
  }
};

function renderDinoOfTheDay() {
    const dinosaur = setDailyDinosaur();
  const {
    imageSrc,
    name,
    taxonomy,
    namedBy,
    foundIn,
    typeOfDinosaur,
    length,
    weight,
    diet,
    whenLived,
    typeSpecies,
    description,
  } = dinosaur;
  const innerHTML = `
    <img class="dino-of-the-day__img" src="${imageSrc}" alt="${name}">

    <div class="dino-of-the-day__info">
    <h3 class="heading-secondary u-text-center">Dino of the Day</h3>
    <h2 class="heading-main">${name}</h3>
        <div class="header-flex">
            <h6 class="dinosaur-name">(${taxonomy})</h1>
            <p><strong>Named By:</strong> ${namedBy}</p>
        </div>
        <div class="container">
            <p><strong>Found In:</strong> ${foundIn}</p>
            <p><strong>Type:</strong> ${typeOfDinosaur}</p>
            <p><strong>Length:</strong> ${length}</p>
            ${weight > 0 ? `<p><strong>Weight:</strong> ${weight} Kg</p>` : ``}
            <p><strong>Diet:</strong> ${diet}</p>
            <p><strong>Lived during:</strong> ${whenLived}</p>
            <p><strong>Species Type:</strong> ${typeSpecies}</p>
            <p><strong>Description:</strong> ${description}</p>   
        </div>
        <button class="btn btn--secondary">${randomCallToAction()}</button>
        <div class="share-buttons">
            <a href="http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=Chingu+Raptors&p%5Bsummary%5D=Learn+all+about+dinosaurs" target="_blank" ><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://v48-tier1-team-04.netlify.app&title=Check+out+this+awesome+app+about+learning+all+about+dinosaurs!&summary=Learn+all+about+dinosaurs&source=LinkedIn" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="https://twitter.com/intent/tweet?text=Check+out+this+awesome+app+about+learning+all+about+dinosaurs!&url=https://v48-tier1-team-04.netlify.app" target="_blank"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
        </div>
    </div>
    `;

  const dinoOfTheDay = createEle(
    "section",
    innerHTML,
    document.querySelector("main"),
    "features dino-of-the-day"
  );
  dinoOfTheDay.querySelector('button').onclick = () => displayDinosaur(dinosaur);
  return dinoOfTheDay;
}

export default renderDinoOfTheDay;
