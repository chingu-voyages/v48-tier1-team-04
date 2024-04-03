const getFooter = () => document.querySelector("footer"); // declares a function for the finding the footer

// listens for the user to scroll up or down
window.onscroll = () => {
  const footer = getFooter(); // defines footer by running function to find it
  const pageBottom = document.body.offsetHeight - window.innerHeight,
    windowYOffset = window.pageYOffset; // declares the pageBottom to be the value of the offsetHeight of the body subtracted by the inner height of the window
  if (pageBottom == windowYOffset)
    footer.classList.remove(
      "shift-down"
    ); // if we scroll to the bottom of the page, remove the class-list of shift-down from our footer - rendering it on screen
  else footer.classList.add("shift-down"); // if we scroll away, hide it again by adding that class back
};

// https://stackoverflow.com/users/10703934/kia-abdi && https://techstacker.com/javascript-detect-when-scrolled-to-bottom/
window.onwheel = (e) => {
  const footer = getFooter(); // defines footer by running function to find it
  if (
    e.deltaY >= 0 &&
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight
  ) {
    // Scrolling down causes the footer to slide up from the bottom
    footer.classList.remove("shift-down");
  } else {
    // Hides the footer when the user scrolls up
    footer.classList.add("shift-down");
  }
};

