import createEle from "../utils/createEle";

const renderFooter = () => {
  const config = {
    voyage: 48,
    tier: 1,
    team: `04`,
    developers: [
      `JOSIK95`,
      `mnichols08`,
      `sebastianlq`,
      `vinccodes`,
    ],
  };
  const content = `
    <div class="footer__logo-box">
      <img src="./assets/raptors-logo-transparent.png" alt="full logo" class="footer__logo">
    </div>
    <div class="row">
      <div class="col-1-of-2">
        <div class="footer__navigation">
          <ul class="footer__list">
            <li class="footer__item">
              <a href="https://chingu.io" target="_blank" class="footer__link">Chingu</a> | 
              <a href="#" target="_blank" class="footer__link">About Us</a> | 
              <a href="https://chingu-voyages.github.io/v48-tier1-team-04/" target="_blank" class="footer__link">Learn More</a> | 
              <a href="https://github.com/chingu-voyages/v48-tier1-team-04" target="_blank" class="footer__link">View Code</a>
            </li>
          </ul>

        </div>
      </div>
      <div class="col-1-of-2">
        <p class="footer__copyright"> &copy; ${new Date().getFullYear()} &lt; /&gt; with <span class="heart"></span> by <span>
        ${config.developers.map(
          (dev) =>
            `<a href="https://github.com/${dev}" class="footer__link" target="_blank"> ${dev}</a>`
        )}
      </span> for a <a href="https://www.chingu.io/" target="_blank"
            class="footer__link"> another wonderful Chingu Event </a> called <a href="#" href="https://www.chingu.io" target="_blank" class="footer__link">Voyage 48</a>
        </p>
      </div>
    </div>
    `;
  return createEle("footer", content, document.body, "footer");
};

export default renderFooter;
