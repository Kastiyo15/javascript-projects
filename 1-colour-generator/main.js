// VARIABLES
const generateColour_btn = document.getElementById("generate-color-button");
const hexcode_txt = document.getElementById("hexcode-text");
const colorPanel = document.getElementById("color-panel");
const copy_btn = document.getElementById("copy-button");

let hexcode = "";
let rgbVal = "";
generateColour();

// FUNCTIONS
function generateColour() {
  hexcode = getHexcode();
  rgbVal = convertHexToRGB(hexcode);
  if (hexcode_txt.innerText.startsWith("#")) {
    hexcode_txt.innerText = hexcode;
  } else {
    hexcode_txt.innerText = hexcode;
    toggleDisplay();
  }
  colorPanel.style.backgroundColor = hexcode;
}

function getHexcode() {
  let hex = ["#"];
  while (hex.length < 7) {
    hex.push(Math.floor(Math.random() * 16).toString(16));
  }
  let code = hex.join("");
  return code;
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(hexcode_txt.innerText);
    alert("Value copied to clipboard");
  } catch (err) {
    alert("Failed to copy: ", err);
  }
}

function toggleDisplay() {
  let display = hexcode_txt.innerText;

  if (display.startsWith("#")) {
    let hex = display.slice(1);
    display = convertHexToRGB(hex);
  } else {
    display = hexcode;
  }

  hexcode_txt.innerText = display;
}

function convertHexToRGB(str) {
  let baseValues = str.split("").map((x) => parseInt(x, 16));
  let rgb = {
    r: `${baseValues[0] * baseValues[1]}`,
    g: `${baseValues[2] * baseValues[3]}`,
    b: `${baseValues[4] * baseValues[5]}`,
  };

  let { r, g, b } = rgb;

  return `rgb(${r}, ${g}, ${b})`;
}

// EVENT LISTENERS
generateColour_btn.addEventListener("click", generateColour);
hexcode_txt.addEventListener("click", toggleDisplay);
copy_btn.addEventListener("click", copyToClipboard);
