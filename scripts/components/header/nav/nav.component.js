import createEle from "../../../utils/createEle";
import "./nav.styles.scss";

const content = `
<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
<label for="navi-toggle" class="navigation__button">
  <span class="navigation__icon">&nbsp;</span>
</label>
<div class="navigation__background">&nbsp;</div>
<nav class="navigation__nav">
  <ul class="navigation__list">
    <li class="navigation__item">
      <a href="#all-dinosaurs" class="navigation__link">Dig Up Some Dinosaurs</a>
    </li>
    <li class="navigation__item">
      <a href="#charts" class="navigation__link">View Some Charts</a>
    </li>
    <li class="navigation__item">
      <a href="#" class="navigation__link">Learn More about Chingu</a>
    </li>
    <li class="navigation__item">
      <a href="#" class="navigation__link">About The Chingu Raptors</a>
    </li>
  </ul>
</nav>
<button id="toTop" class="fade-out"></button>
`;
let scrollTop = 0;

const renderNav = () => {
  createEle("div", content, document.body, "navigation fade-out", "nav"); // create the navigation element and appends it to document.body
  const nav = document.getElementById("nav");
  const toTopButton = document.getElementById("toTop");
  toTopButton.onclick = () => window.scrollTo({ top: 0 });

  window.addEventListener("scroll", () => {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > scrollTop) {
      toTopButton.classList.remove("fade-in");
      toTopButton.classList.add("fade-out");
    } else {
      toTopButton.classList.add("fade-in");
      toTopButton.classList.remove("fade-out");
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("you're at the bottom of the page");
      toTopButton.classList.remove("fade-out");
      toTopButton.classList.add("fade-in");
    }
    if (window.scrollY > 0) {
      nav.classList.remove("fade-out"); // show the navigation when the user scrolls down
      nav.classList.add("fade-in");
    } else {
      nav.classList.remove("fade-in"); // removes fade-in class
      nav.classList.add("fade-out"); // hide the navigation when the user reaches the top of the page
    }
    scrollTop = st <= 0 ? 0 : st;
  });

  return nav;
};
export default renderNav;
