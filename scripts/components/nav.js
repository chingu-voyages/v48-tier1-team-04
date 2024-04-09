import createEle from "../utils/createEle";
const content = `
<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
<label for="navi-toggle" class="navigation__button">
  <span class="navigation__icon">&nbsp;</span>
</label>
<div class="navigation__background">&nbsp;</div>
<nav class="navigation__nav">
  <ul class="navigation__list">
    <li class="navigation__item">
      <a href="#" class="navigation__link">Dig Up Some Dinosaurs</a>
    </li>
    <li class="navigation__item">
      <a href="#" class="navigation__link">View Some Charts</a>
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
