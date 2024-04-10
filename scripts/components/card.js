import createEle from "../utils/createEle";

const renderDinoCard = (dino, callToActions, randomCallToAction, i) => {
    const renderDinoPopup = (dino) =>
      createEle(
        "div",
        `
      <div class="popup__content">
  <div class="popup__left"><img src="${dino.imgSrc}" alt="Tour Photo" class="popup__img"><img src="${
          dino.imageSrc
        }" alt="Tour Photo" class="popup__img"></div>
      <div class="popup__right">
        <a href="#section-tours" class="popup__close">&times;</a>
        <h2 class="heading-secondary u-margin-bottom-sm">Start booking now!</h2>
        <h3 class="heading-tertiary u-margin-bottom-sm">Important &ndash; Please read these terms before booking</h3>
        <p class="popup__text">
          Garrett County Adventures is just a fictional idea for now. I would personally love to offer services similar to those offered on this website, but my main reason for making this webpage was for practice learning the styling language SASS. If you like what you see, please consider hiring me for a future project =) Or, maybe you are nearby Garrett County and are looking for a tour, I can help with that too xD
        </p>
      <a href="#section-tours" class="btn btn--green">${randomCallToAction()}</a>
      </div>
    </div>
      `,
        document.body,
        "popup",
        `popup`
      );
  
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1" style="background-image:url(${
                dino.imageSrc
              })">
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
            <div class="card__side card__side--back card__side--back-1" style="background-image:url(${
              dino.imageSrc
            })">
              <div class="card__slide card__slide--back card__slide--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-value">${dino.name}</p>
                    <p class="card__price-only">(${dino.taxonomy})</p>
                  </div>
                  <a href="#popup" class="btn btn--black">${
                    callToActions[
                      Math.floor(Math.random() * callToActions.length)
                    ]
                  }</a>
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

  export default renderDinoCard;