import createEle from "../../../utils/createEle";
const hideNav = () => {
    // listens for the user to scroll up or down
    const getNav = () => document.querySelector("nav");
    window.onscroll = () => {
      const nav = getNav();
      const pageTop = 0; // declares the pageTop to be 0
        windowYOffset = window.pageYOffset; // declares the pageTop to be the value of the offsetHeight of the body subtracted by the inner height of the window
      if (pageTop == windowYOffset) nav.classList.remove("shift-up");
      // if we scroll to the bottom of the page, remove the class-list of shift-down from our footer - rendering it on screen
      else nav.classList.add("shift-up"); // if we scroll away, hide it again by adding that class back
    };
  
    // https://stackoverflow.com/users/10703934/kia-abdi && https://techstacker.com/javascript-detect-when-scrolled-to-bottom/
    window.onwheel = (e) => {
      const footer = getFooter(); // defines footer by running function to find it
      if (
        e.deltaY >= 0 &&
        window.innerHeight + window.pageYOffset >= document.body.offsetHeight
      ) {
        // Scrolling down causes the footer to slide up from the bottom
        footer.classList.remove("shift-up");
        
      } else {
        // Hides the footer when the user scrolls up
        footer.classList.add("shift-up");
      }
    };
  };
const content = `
<input type="checkbox" class="navigation__checkbox shift-up" id="navi-toggle">
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
`;
const renderNav = () => createEle("div", content, document.body, "navigation");
export default renderNav;
