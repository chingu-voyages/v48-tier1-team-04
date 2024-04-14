import createEle from "../../utils/createEle";
import giveRandomDino from "../../utils/giveRandoDino";
import displayDinosaur from "../displayDinosaur/displayDinosaur.component";
import "./intro-section.styles.scss";
const callToActions = [
  "Learn More",
  "Find More Information",
  "Discover More Clues",
  "Explore Now",
  "Embark on Exploration",
  "Uncover the Secrets",
  "Start Your Adventure",
];
const randomDinos = [];
while (randomDinos.length < 3) {
  const newDino = giveRandomDino();

  if (!randomDinos.includes(newDino)) {
    randomDinos.push(newDino);
  }
}
const randomCallToAction = () =>
  callToActions[Math.floor(Math.random() * callToActions.length)];

const renderImg = (dino, i) => `<img src="${
  dino.imageSrc
}" alt="A drawing representing a ${dino.name}"
class="composition__photo composition__photo--p${i + 1}">`;
const randomDino = randomDinos[Math.floor(Math.random() * randomDinos.length)];
const generateRandomFact = async () =>
  await fetch("https://dinosaur-facts-api.shultzlab.com/dinosaurs/random").then(
    (res) => res.json()
  );
const randomFact = await generateRandomFact();
const renderIntroSection = () => {
  const randomNumber = (num) => Math.floor(Math.random() * num);
  const randomRGBa = () =>
    `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, ${
      Math.random() * 1
    })`;
  const content = `
<div class="u-text-center u-margin-bottom-lg">
  <h2 class="heading-primary">
    ${
      [
        "Dinosaurs are cool",
        "Dinosaurs are awesome",
        "Dinosaurs are amazing",
        "Dinosaurs are fascinating",
        "Fun Facts About Dinosaurs",
        "Who Knew Dinosaurs Were So Interesting?",
        "Give Me More Dinosaurs",
        "Dinosaurs are the best!",
      ][Math.floor(Math.random() * 4)]
    }
  </h2>
</div>
<div class="row">
  <div class="col-1-of-2 col-mn">
    <h3 class="heading-tertiary u-margin-bottom-sm">
      ${randomDino.taxonomy}</h3>
    <p class="paragraph">${randomDino.description.substring(0, 350)}...</p>
    <h3 class="heading-tertiary u-margin-bottom-sm">${randomFact.Name}
      </h3>
    <p class="paragraph">${randomFact.Description}</p>
    <a class="btn-text">${randomCallToAction()} &rarr;</a>
  </div>
  <div class="col-1-of-2">
    <div class="composition">
      ${randomDinos.map((img, i) => renderImg(img, i)).join("")}
    </div>
  </div>
</div>
</div>
`;
  const introSection = createEle(
    "section",
    content,
    document.querySelector("main"),
    "section-intro",
    "about"
  );
  introSection.style.background = `linear-gradient(to right bottom, ${randomRGBa()}, rgba(201,230,94, 0.545),${randomRGBa()}), url(./assets/watercolor/${Math.floor(
    Math.random() * 27
  )}.png) center center/cover`;
  const imgs = introSection.querySelectorAll(".composition__photo");
  imgs.forEach(
    (img, i) => (img.onclick = () => displayDinosaur(randomDinos[i]))
  );
  const button = introSection.querySelector(".btn-text");
  button.addEventListener("click", () => displayDinosaur(randomDino));
  return introSection;
};
export default renderIntroSection;
export { callToActions, randomCallToAction, randomDinos };
