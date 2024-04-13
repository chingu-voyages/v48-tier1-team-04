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
      <a href="#about" class="navigation__link">Random Dinosaurs</a>
    </li>
  <li class="navigation__item">
      <a class="navigation__link">Dig (Search) For Dinosaurs</a>
    </li>
    <li class="navigation__item">
      <a href="#all-dinosaurs" class="navigation__link">Dig (Search) For Dinosaurs</a>
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

const toggleDisplay = (ele) =>
  ele.style.display === "none"
    ? (ele.style.display = "block")
    : setTimeout(() => (ele.style.display = "none"), 500); // toggle the display of the navigation items after 500ms to allow the animation to complete
const renderNav = () => {
  const nav = createEle(
    "div",
    content,
    document.body,
    "navigation",
    "nav"
  ); // create the navigation element and appends it to document.body
  const navItems = document.querySelector(".navigation__nav");
  nav.querySelectorAll("li").forEach(
    (li) =>
      (li.onclick = () => {
        document.querySelector(".navigation__checkbox").checked = false;
        toggleDisplay(navItems);
      })
  ); // close the navigation when a link is clicked
  
  document.querySelector("nav").style.display = "none";
  const toTopButton = document.getElementById("toTop");
  toTopButton.onclick = () => window.scrollTo({ top: 0 }); // scroll to the top of the page when the button is clicked
  document.querySelector(".navigation__button").onclick = () =>
    toggleDisplay(navItems); // toggle the display of the navigation items when the button is clicked
  window.addEventListener("scroll", () => {
    // get the current scroll position
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > scrollTop) {
      // downscroll code
      toTopButton.classList.remove("fade-in");
      toTopButton.classList.add("fade-out");
    } else {
      // upscroll code
      toTopButton.classList.add("fade-in");
      toTopButton.classList.remove("fade-out");
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      // bottom of the page
      toTopButton.classList.remove("fade-out");
      toTopButton.classList.add("fade-in");
    }
    // if (window.scrollY > 0) {
    //   // user has scrolled down
    //   nav.classList.remove("fade-out");
    //   nav.classList.add("fade-in");
    // } else {
    //   // user is at the top of the page
    //   nav.classList.remove("fade-in");
    //   nav.classList.add("fade-out");
    // }
    scrollTop = st <= 0 ? 0 : st; // set the scrollTop to 0 if the user is at the top of the page
  });

  return nav;
};
export default renderNav;
