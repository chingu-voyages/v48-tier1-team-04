import randomDino from "../utils/giveRandoDino";
import createEle from "../utils/createEle";


const setDailyDinosaur = () => {
// Get the current date
const today = new Date().toDateString();
// Get the stored date
const storedDate = localStorage.getItem('date');

// Check if the stored date is today's date
if (storedDate === today) {
  // If it is, get the daily variable
  return JSON.parse(localStorage.getItem('dailyDinosaur'));
} else {
  // If it's not, update the daily variable and the date
  const dailyDino = randomDino(); // replace this with the new value for the daily variable
  localStorage.setItem('dailyDinosaur', JSON.stringify(dailyDino));
  localStorage.setItem('date', today);
  return JSON.parse(localStorage.getItem('dailyDinosaur'));
}
}


function dinoOfTheDay(parentContainer){
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
        description
    } = setDailyDinosaur()
    const innerHTML = 
    `
    <div>
    <img src="${imageSrc}" alt="${name}">
    </div>
    <div class="dino-of-the-day__info">
    <h2 class="heading-main u-text-center">Dino of the Day</h3>
        <div class="header-flex">
            <h1 class="dinosaur-name">${name} (${taxonomy})</h1>
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

        <div class="share-buttons">
            <a href="http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=Chingu+Raptors&p%5Bsummary%5D=Learn+all+about+dinosaurs" target="_blank" ><i class="fa fa-facebook-f"></i></a>
            <a href="https://twitter.com/intent/tweet?text=Check+out+this+awesome+app+about+learning+all+about+dinosaurs!&url=https://v48-tier1-team-04.netlify.app" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>
    </div>
    `
    createEle('div', innerHTML, parentContainer, "dino-of-the-day")
}


export default dinoOfTheDay