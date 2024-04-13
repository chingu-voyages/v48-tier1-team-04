import './card.styles.scss'  
import createEle from "../../../utils/createEle";
import displayDinosaur from '../../displayDinosaur/displayDinosaur.component';
import { randomCallToAction } from '../../intro-section/intro-section.component';

const renderDinoCard = (dino, i) => {
    const content = `
          <div class="card" style"background: blue">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--${i}" style="background-image:url(${
                dino.imageSrc
              })">
                &nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--${i}">
                  ${dino.name}
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Discovered in ${dino.foundIn}</li>
                  ${dino.weight !== 'N/A' ? `<li>Weighed ${dino.weight} tons</li>` : ``}
                  <li>Stood ${dino.length} meters long</li>
                  <li>${dino.diet}</li>
                 </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-${i}" >
              <div class="card__slide card__slide--back card__slide--back-${i}">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-value">${dino.name}</p>
                    <p class="card__price-only">(${dino.taxonomy})</p>
                  </div>
                  <a class="btn btn--black cta">${
                    randomCallToAction()
                  }</a>
                </div>
              </div>
            </div>
          </div>
       `;
       const card = createEle("div", content, document.getElementById('random-dinos'), "col-1-of-3");
    card.querySelector('.btn.cta').addEventListener('click', () => displayDinosaur(dino))
    return card
  };

  export default renderDinoCard;