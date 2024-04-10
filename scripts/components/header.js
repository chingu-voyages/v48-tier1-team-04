import createEle from "../utils/createEle";
import dinosaurs from "../data/dinosaurs.json";
import randomPhrase from "../utils/randomPhrase";
import renderNav from "./nav";


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
          dinosaurs[Math.floor(Math.random() * dinosaurs.length)]
        )}</span>
      </h1>

      <a href="#" class="btn btn--white btn--animated">
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
  renderNav();
  return header;
};

export default renderHeader;
