// GET HTML ELEMENTS
const el_image = document.querySelector(".image");
const el_name = document.querySelector(".name");
const el_occupation = document.querySelector(".occupation");
const el_review = document.querySelector(".review");
const prev_btn = document.getElementById("prev-button");
const next_btn = document.getElementById("next-button");
const surprise_btn = document.getElementById("surprise");

// REVIEWS OBJECT
const reviews = [
  {
    id: 0,
    image: "./images/maria-orlova.jpg",
    name: "Susan Smith",
    occupation: "Web Developer",
    review:
      "Proin sit amet eros at nunc faucibus fermentum vel sed erat. Aenean ac lectus ullamcorper lorem vestibulum interdum et in augue. Donec fermentum dui id mollis consectetur. Quisque vel est a enim viverra imperdiet.",
  },
  {
    id: 1,
    image: "./images/longxiang-qian.jpg",
    name: "Steve Smith",
    occupation: "Dark Lord",
    review:
      "Donec vitae lacus lacinia, lacinia nisi vel, hendrerit ligula. Fusce ac ipsum sed lacus cursus condimentum. Pellentesque in nisi eleifend diam scelerisque tincidunt. Nam ac mauris bibendum, eleifend lacus id, finibus justo. Vestibulum venenatis dolor hendrerit lectus malesuada imperdiet.",
  },
  {
    id: 2,
    image: "./images/pixabay.jpg",
    name: "Tom Clarke",
    occupation: "Famous YouTuber",
    review:
      "Mauris eget ex et mauris dignissim vulputate. Pellentesque imperdiet arcu sit amet dictum facilisis. Nunc id est facilisis, aliquam mauris vel, pretium neque. Vestibulum euismod diam sed mauris aliquam, sed imperdiet metus consequat. Aliquam imperdiet mauris vitae pretium faucibus. Curabitur ac libero a eros iaculis tempus a nec elit.",
  },
  {
    id: 3,
    image: "./images/tony-jamesandersson.jpg",
    name: "Rachel Johnson",
    occupation: "Business Partner",
    review:
      "Nulla dictum nisi nec arcu suscipit, quis pellentesque ipsum tempor. Integer in nibh non nisi semper mattis ut ac lectus. Suspendisse non tortor consectetur, pulvinar felis et, sodales ipsum. Donec semper mi id lorem tempor suscipit.",
  },
  {
    id: 4,
    image: "./images/vazhnik.jpg",
    name: "Jason Jasons",
    occupation: "Financial Advisor",
    review:
      "Mauris aliquet ipsum nec tortor efficitur, fringilla porta nunc tristique. Sed convallis enim ut quam euismod malesuada. Aenean nec enim ac enim bibendum sollicitudin. Etiam varius felis sit amet tempor feugiat. Nam eleifend mi iaculis tellus tincidunt, ac efficitur metus vulputate.",
  },
];

// VARIABLES
let currentID = 0;
const arrayLength = reviews.length;

// ADD EVENT LISTENERS
next_btn.addEventListener("click", nextReview);
prev_btn.addEventListener("click", previousReview);
surprise_btn.addEventListener("click", randomReview);

// FUNCTIONS
function previousReview() {
  currentID = getCurrentID(-1);
  updateDisplayInfo();
}

function randomReview() {
  currentID = getCurrentID(0);
  updateDisplayInfo();
}

function nextReview() {
  currentID = getCurrentID(1);
  updateDisplayInfo();
}

function getCurrentID(type) {
  let value = currentID;
  switch (type) {
    // previous
    case -1:
      if (currentID > 0) {
        value--;
      } else {
        value = arrayLength - 1;
      }
      break;

    // random
    case 0:
      let randNum = Math.floor(Math.random() * arrayLength);
      while (randNum == value) {
        randNum = Math.floor(Math.random() * arrayLength);
      }
      value = randNum;
      break;

    // next
    case 1:
      if (currentID < arrayLength - 1) {
        value++;
      } else {
        value = 0;
      }
      break;
  }

  return value;
}

function updateDisplayInfo() {
  let { image, name, occupation, review } = reviews[currentID];
  el_image.src = image;
  el_name.textContent = name;
  el_occupation.textContent = occupation;
  el_review.textContent = review;
}
