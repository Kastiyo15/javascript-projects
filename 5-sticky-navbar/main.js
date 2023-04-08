// DOCUMENT VARIABLES
const el_header = document.querySelector(".header"); // navbar element
const el_spaceList = document.querySelectorAll(".space"); // list of spaces before the navbar
const el_lastSpace = el_spaceList[el_spaceList.length - 1]; // get the final space element

// constants which can be changed
const distance = 200; // number of pixels from bottom of space

// FUNCTIONS
function updateNavbarWithSpace() {
  // bottom of the last space element
  let distToBtmOfSpaceDiv = el_lastSpace.getBoundingClientRect().bottom;
  // top of the header element
  // let distanceToTopOfHeaderDiv = el_header.getBoundingClientRect().top;

  // when user scrolls within 'distance' pixels of the header div, run this code:
  if (distToBtmOfSpaceDiv <= distance) {
    // how much space from the distance, to the bottom of the space div (in %)
    let percentOfGapToTopOfHeader = clamp(
      (distToBtmOfSpaceDiv / distance).toFixed(4),
      0,
      1
    );

    // CREATE VARIABLES FOR WHATEVER YOU WANT TO DYNAMICALLY CHANGE WITH SCROLL (min, max, gapPercentageVariable)
    let headerScale = getVariableScale(0, 1, percentOfGapToTopOfHeader, true);
    let opacityScale = getVariableScale(0, 1, percentOfGapToTopOfHeader, true);

    /*     // TESTING
      console.log(
      `Distance to Bottom: ${distToBtmOfSpaceDiv}`,
      `Distance to Top of Header: ${distanceToTopOfHeaderDiv}`,
      `Gap Percentage ${percentageOfGapToTopOfHeader}%`,
      `Header Scale Value: ${headerScale}`,
      `Opacity Scale Value ${opacityScale}`
    ); */

    // Set header styles
    setHeaderStyles(el_header, false, headerScale, opacityScale);
  }
  // if the user scrolls up and away from the distance, then run this code instead
  else {
    setHeaderStyles(el_header, true);
  }
}

function updateNavbarNoSpace() {
  // top of the header element
  let positionOnScreen = window.scrollY;

  // hide navbar when scroll distance is 0
  if (positionOnScreen == 0) {
    setHeaderStyles(el_header, true);
  }
  // show default navbar when scrolled past distance
  else if (positionOnScreen >= distance) {
    setHeaderStyles(el_header, false, 1, 1);
  }
  // from 0 to the distance, run this code
  else {
    let percentage = (positionOnScreen / distance).toFixed(3);

    // CREATE VARIABLES FOR WHATEVER YOU WANT TO DYNAMICALLY CHANGE WITH SCROLL (min, max, gapPercentageVariable)
    let headerScale = getVariableScale(0, 1, percentage, false);
    let opacityScale = getVariableScale(0, 1, percentage, false);

    // Set header styles
    setHeaderStyles(el_header, false, headerScale, opacityScale);
  }
}

// enter header variable as the input to apply styles, run this function when you want default styles to show
// add default styles to the function
// true - MEANS HIDE | false - MEANS SHOW
function setHeaderStyles(element, hidden, scaleVar, opacityVar) {
  if (hidden) {
    // element.style.display = "none";
    element.style.transform = `scale(0)`;
    element.style.opacity = `0`;
  } else {
    // element.style.display = "block";
    element.style.transform = `scale(${scaleVar})`;
    element.style.opacity = `${opacityVar}`;
  }
}

// Clamp a value between min and max
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// Return the value of the gap percentage * 'scale you want'
// true - MEANS SPACE BEFORE | false - MEANS NO SPACE BEFORE
function getVariableScale(min, max, gapVariable, space) {
  if (space) {
    return clamp((max - gapVariable * max).toFixed(4), min, max);
  } else {
    return clamp((gapVariable * max).toFixed(4), min, max);
  }
}

// ADD EVENT LISTENERS
// if there is no space before
if (el_spaceList.length == 0) {
  setHeaderStyles(el_header, true);
  window.addEventListener("scroll", updateNavbarNoSpace);
}
// if there is space before
else {
  setHeaderStyles(el_header, true);
  window.addEventListener("scroll", updateNavbarWithSpace); // Speed adjusted with CSS style transition time
}
