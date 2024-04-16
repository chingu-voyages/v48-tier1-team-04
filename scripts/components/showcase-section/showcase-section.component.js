import createEle from "../../utils/createEle";
import {
  callToActions,
  randomCallToAction,
  randomDinos,
} from "../intro-section/intro-section.component";
import renderDinoCard from "./card/card.component";

const renderShowcase = () => {
  const headings = [
    "Random Dinosaurs",
    "Jump Right In",
    "Discover More",
    "Dinosaurs Galore",
  ];
  const content = `<div class="u-text-center u-margin-bottom-lg">
    <h2 class="heading-secondary"
      ${headings[Math.floor(Math.random() * headings.length)]}
    </h2>
  </div>
  <div class="row" id="random-dinos">
  </div>
  <div class="u-text-center u-margin-top-xl">
  <a class="btn btn--white" href="#all-dinosaurs">View All Dinosaurs</a>
</div>`;
  const randomSatLight = () => Math.floor(Math.random() * (66 - 33 + 1)) + 33;

  const randomHsla = () =>
    `hsla(${Math.floor(
      Math.random() * 360
    )}, ${randomSatLight()}%, ${randomSatLight()}%,${
      Math.random() * 0.8 + 0.2
    })`;
  const showcaseSection = createEle(
    "section",
    content,
    document.querySelector("main"),
    "section-features section-showcase"
  );
  showcaseSection.style.background = `linear-gradient(to bottom, ${randomHsla()}, rgba(255,255,255,255.9)), url(./assets/watercolor/${Math.floor(
    Math.random() * 58+1
  )}.png) center/cover no-repeat`;
  randomDinos.forEach((dino, i) =>
    renderDinoCard(dino, i+1)
  );
  return showcaseSection;
};

export default renderShowcase;
