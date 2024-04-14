import "./header.styles.scss";
import createEle from "../../utils/createEle";
import dinosaurs from "../../data/dinosaurs.json";
import randomPhrase from "../../utils/randomPhrase";
import renderNav from "./nav/nav.component";
import displayDinosaur from "../displayDinosaur/displayDinosaur.component";


const renderHeader = () => {
  const greetings = [
    "Welcome To Dinosauria",
    "Discover Something New About Dinosaurs",
    "Explore The Past",
    "Dinosauria Awaits",
    "Chingu Raptors presents: Dinosauria",
  ];
  const callToActions = [
    "Learn more",
    "Discover",
    "Explore",
    "Get Started",
    "Find Out More",
  ];
  const randomDinosaur = dinosaurs[Math.floor(Math.random() * dinosaurs.length)];
  const headerContent = `
  <div class="bg-video">
    <video class="bg-video__content" autoplay muted loop>
      <source src="./assets/dino-video-tiny.mp4" type="video/mp4">
      <!-- <source src="./dino-video-tiny.mp4" type="video/webm"> -->
      A video is being played in the background here, but unfortunately your browser is not supported!
    </video>
  </div>
    <div class="header__logo-box">
      <img src="assets/raptors-logo-transparent.png" class="header__logo" alt="Logo">
    </div>

    <div class="header__text-box">

      <h1 class="heading-primary">
        <span class="heading-primary--main">${
          greetings[Math.floor(Math.random() * greetings.length)]
        }</span>
        <span class="heading-primary--sub">${randomPhrase(
          randomDinosaur
        )}</span>
      </h1>

      <a class="btn btn--white btn--animated" id="first-cta">
        ${callToActions[Math.floor(Math.random() * callToActions.length)]}
      </a>

    </div>
    `;
  const header = createEle(
    "header",
    headerContent,
    document.body,
    "header",
    null,
    true
  );
  const firstCta = document.getElementById("first-cta");
    firstCta.style.hover = "cursor: pointer";
    firstCta.onclick = () => displayDinosaur(randomDinosaur);
  renderNav();
  return header;
};

export default renderHeader;
