// VARIABLES
const minus_btn = document.getElementById("minus-button");
const reset_btn = document.getElementById("reset-button");
const plus_btn = document.getElementById("plus-button");
const counter_txt = document.querySelector(".number-text");

let value = 0;

// FUNCTIONS
const decreaseCounter = () => {
  value--;
  updateText();
};
const resetCounter = () => {
  value = 0;
  updateText();
};
const increaseCounter = () => {
  value++;
  updateText();
};
const updateText = () => {
  counter_txt.innerText = value;

  if (value > 0) {
    counter_txt.style.color = "green";
  } else if (value < 0) {
    counter_txt.style.color = "red";
  } else {
    counter_txt.style.color = "black";
  }
};

// EVENT LISTENERS
minus_btn.addEventListener("click", decreaseCounter);
reset_btn.addEventListener("click", resetCounter);
plus_btn.addEventListener("click", increaseCounter);
