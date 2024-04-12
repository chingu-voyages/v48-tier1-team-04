import createEle from "../../utils/createEle";
import { callToActions, randomCallToAction, randomDinos } from "../intro-section/intro-section.component";
import renderDinoCard from "./card/card.component";



const renderShowcase = () => {
    const headings = [
        "Random Dinosaurs",
        "Jump Right In",
        "Discover More",
        "Dinosaurs Galore",
      ];
    const content = `<div class="u-text-center u-margin-bottom-lg">
    <h2 class="heading-secondary" id="section-tours">
      ${headings[Math.floor(Math.random() * headings.length)]}
    </h2>
  </div>
  <div class="row">
      ${randomDinos
        .map((dino, i) =>
          renderDinoCard(dino, callToActions, randomCallToAction, i)
        )
        .join("")}
 
  </div>
  <div class="u-text-center u-margin-top-xl">
  <a class="btn btn--white" href="#all-dinosaurs">View All Dinosaurs</a>
</div>`
    return createEle('section', content, document.querySelector('main'), 'section-features')
}

export default renderShowcase;