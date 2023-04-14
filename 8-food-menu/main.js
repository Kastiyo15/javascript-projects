/* List of food items */
const list_of_items = [
  {
    name: "ebi prawn with rice",
    price: 14.5,
    description:
      "Nullam ornare urna ut arcu mollis, sed facilisis leo malesuada. Cras eget turpis id eros tristique varius. Donec pharetra nisl accumsan urna eleifend, quis pulvinar mi consectetur.",
    image: "./images/adhitya-rizky.webp",
    tags: ["mains"],
  },
  {
    name: "buttermilk pancakes",
    price: 14,
    description:
      "Nullam ornare urna ut arcu mollis, sed facilisis leo malesuada. Cras eget turpis id eros tristique varius. Donec pharetra nisl accumsan urna eleifend, quis pulvinar mi consectetur.",
    image: "./images/ash.webp",
    tags: ["mains"],
  },
  {
    name: "fried viet. spring roll",
    price: 9.5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porttitor vitae risus ac vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum volutpat malesuada.",
    image: "./images/bich-tran.webp",
    tags: ["appetisers"],
  },
  {
    name: "lamb chops",
    price: 19.5,
    description:
      "Nam a dolor vel elit consectetur fermentum eget at tortor. Etiam quis libero semper tellus semper tristique a quis urna. Aliquam id eros sed elit hendrerit egestas.",
    image: "./images/chevanon-photo.webp",
    tags: ["mains"],
  },
  {
    name: "stir fried noodles",
    price: 15,
    description:
      "Vivamus vulputate lacus at massa ultrices rhoncus. Nunc varius lectus in dignissim scelerisque. Donec a dui hendrerit, elementum arcu quis, fermentum magna. In sagittis magna sed laoreet viverra.",
    image: "./images/engin-akyurt.webp",
    tags: ["mains"],
  },
  {
    name: "spicy prawn pho",
    price: 15.5,
    description:
      "Ut porta metus congue gravida sagittis. Nam consectetur leo ac magna cursus, nec egestas ligula gravida. Donec sodales ex at euismod scelerisque. Donec sodales ex at euismod scelerisque.",
    image: "./images/jan-nguyen.webp",
    tags: ["mains"],
  },
  {
    name: "poached egg on toast",
    price: 12.5,
    description:
      "Cras id eros pharetra, aliquet enim quis, luctus nunc. Vivamus suscipit massa sed lorem accumsan, a aliquet velit sollicitudin. Duis ac lorem auctor, euismod leo ut, congue risus.",
    image: "./images/kyle-roxas.webp",
    tags: ["mains"],
  },
  {
    name: "soup dumplings",
    price: 9.5,
    description:
      "Donec at diam at velit tincidunt dictum et in metus. Suspendisse sed sem at dolor interdum congue quis ac tortor. Duis ac massa nec augue molestie malesuada in eget enim.",
    image: "./images/natalie-bond.webp",
    tags: ["appetisers", "sale"],
  },
  {
    name: "bacon cheeseburger",
    price: 17.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/robin-stickel.webp",
    tags: ["mains", "sale"],
  },
  {
    name: "beer",
    price: 4.0,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/beer.webp",
    tags: ["drinks"],
  },
  {
    name: "bellini",
    price: 8.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/bellini.webp",
    tags: ["drinks"],
  },
  {
    name: "berry tart",
    price: 8.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/berry-tart.webp",
    tags: ["dessert"],
  },
  {
    name: "brownie",
    price: 4,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/brownie.webp",
    tags: ["dessert"],
  },
  {
    name: "coconut smoothie",
    price: 4.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/coconut-smoothie.webp",
    tags: ["drinks"],
  },
  {
    name: "macarons",
    price: 6,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/macarons.webp",
    tags: ["dessert"],
  },
  {
    name: "mimosa",
    price: 8.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/mimosa.webp",
    tags: ["drinks"],
  },
  {
    name: "mojito",
    price: 7.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/mojito.webp",
    tags: ["drinks"],
  },
  {
    name: "oreo milkshake",
    price: 4.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/oreo-milkshake.webp",
    tags: ["drinks", "sale"],
  },
  {
    name: "raspberry cheesecake",
    price: 6.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/raspberry-cheesecake.webp",
    tags: ["dessert"],
  },
  {
    name: "strawberry daquiri",
    price: 9.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/strawberry-daiquiri.webp",
    tags: ["drinks"],
  },
  {
    name: "strawberry milkshake",
    price: 3.5,
    description:
      "Vivamus vitae tortor suscipit, ullamcorper magna vel, sodales urna. Nullam eu lectus pulvinar, faucibus purus vel, dictum magna. Suspendisse gravida tellus ac nisi molestie, vitae accumsan nunc lobortis. Pellentesque in nisi eleifend diam scelerisque tincidunt.",
    image: "./images/strawberry-milkshake.webp",
    tags: ["drinks"],
  },
];

// Current food items array
let current_food_items = [];

// Current sort by filter applied
let current_filter = "name-desc";

// Container to add items to
const el_item_container = document.querySelector(".items-container");

// Drop down menu
const el_dropdown_box = document.querySelector(".dropdown-box");

// List of filter buttons
const el_filter_buttons = document
  .querySelector(".filter-container")
  .querySelectorAll(".filter");

// List of sorting options
const el_dropdown_list = el_dropdown_box
  .querySelector(".sort-dropdown")
  .querySelectorAll(".item");

// Item counter
const el_item_counter = document.querySelector(".item-counter");

// Add to cart container
const el_add_to_cart = document.querySelector(".add-to-cart-container");
let itemVolume = 1; // quantity of selected item
let itemPrice = 0; // total price of selected item
let itemName = ""; // name of selected item
const el_cart_item_name = el_add_to_cart.querySelector(".selected-item-name"); // selected item name
const el_cart_item_price = el_add_to_cart.querySelector(".selected-item-price"); // selected item price
const el_cart_item_quantity =
  el_add_to_cart.querySelector(".cart-item-counter"); // quantity text
const el_minus_btn = el_add_to_cart.querySelector(".minus-cart-button");
const el_plus_btn = el_add_to_cart.querySelector(".plus-cart-button");

// Value for the discount
const discountValue = 2; // 1 = 0%, 2 = 50%

// Load more button
const el_load_more_btn = document.querySelector(".load-more");
let itemsToShow = 5; // default value

/* FUNCTIONS */
// Create a blank menu item template
function addMenuItem(image, name, price, description, tags) {
  // create all elements
  const el_menuItem = document.createElement("article");
  const el_photo = document.createElement("img");
  const el_itemInfo = document.createElement("div");
  const el_header = document.createElement("header");
  const el_itemName = document.createElement("h4");
  const el_priceContainer = document.createElement("div");
  const el_itemPrice = document.createElement("h4");
  const el_saleFullPrice = document.createElement("h4");
  const el_itemDesc = document.createElement("p");

  // add class names to elements
  addClassName(el_menuItem, "menu-item");
  addClassName(el_photo, "photo");
  addClassName(el_itemInfo, "item-info");
  addClassName(el_itemPrice, "price");
  addClassName(el_saleFullPrice, "sale-full-price");
  addClassName(el_itemDesc, "item-text");
  addClassName(el_priceContainer, "price-container");

  // display appropriate data
  el_photo.src = image;
  el_itemName.textContent = name;
  el_itemPrice.textContent = "£" + price;
  el_saleFullPrice.textContent =
    "£" +
    (
      list_of_items.filter((x) => x.name == name)[0].price * discountValue
    ).toFixed(2);
  el_itemDesc.textContent = description;

  el_menuItem.value = 0;
  el_itemName.classList.add("name");

  // append the children
  el_menuItem.appendChild(el_photo);
  el_menuItem.appendChild(el_itemInfo);
  el_itemInfo.appendChild(el_header);
  el_header.appendChild(el_itemName);
  el_priceContainer.appendChild(el_itemPrice);
  el_header.appendChild(el_priceContainer);
  el_itemInfo.appendChild(el_itemDesc);

  // add Classes and values
  if (tags.includes("sale")) {
    el_menuItem.classList.add("item-sale");
    el_priceContainer.appendChild(el_saleFullPrice);
  }

  // Add to the item container
  el_item_container.appendChild(el_menuItem);
}

// Quick way to add a class name
function addClassName(element, className) {
  return element.classList.add(`${className}`);
}

// Create and display the list of food items
function displayItemList(arr, filter, value) {
  el_item_container.innerHTML = "";

  // Create a copy of array, sorted alphabetically
  current_food_items = Array.from(arr);

  // Make food with sale tag, half price
  current_food_items.forEach((x) => {
    if (
      x.price == list_of_items[list_of_items.indexOf(x)].price &&
      x.tags.includes("sale")
    ) {
      x.price = list_of_items[list_of_items.indexOf(x)].price / discountValue;
    }
  });

  // Sort list
  const sortedList = sortItemList(current_food_items, filter);

  // add an item for each item in array
  sortedList.forEach((x) => {
    let { name, price, description, image, tags } = x;
    price = price.toFixed(2);

    addMenuItem(image, name, price, description, tags);
  });

  updateItemCounter(sortedList); // update item counter
  addMenuItemSelectedListener(); // add appropriate event listeners

  // Make food with sale tag, full price, so no endless loop
  current_food_items
    .filter((x) => x.tags.includes("sale"))
    .forEach((x) => (x.price *= discountValue));
}

// Return a sorted array
function sortItemList(arr, method) {
  switch (method) {
    case "name-desc":
      return sortMethod(arr, -1, "name");
    case "name-asc":
      return sortMethod(arr, 1, "name");
    case "price-desc":
      return sortMethod(arr, 1, "price");
    case "price-asc":
      return sortMethod(arr, -1, "price");
  }
}

// Return a sorted array based on inputted variable
function sortMethod(arr, dir = 1, variable) {
  let sortedArr = arr.sort((a, b) => {
    if (a[variable] < b[variable]) {
      return 1 * dir;
    }
    if (a[variable] > b[variable]) {
      return -1 * dir;
    } else {
      return 0;
    }
  });
  return sortedArr;
}

// Reset display of all filter buttons
function resetSelectedDisplays(list) {
  list.forEach((button) => (button.value = 0));
}

function toggleSelectValue(button) {
  button.value == 0 ? (button.value = 1) : (button.value = 0);
}

// Change display of filter button
function updateSelectDisplay(list, className) {
  list.forEach((button) => {
    button.value == 1
      ? button.classList.add(className)
      : button.classList.remove(className);
  });
}

// Update item counter
function updateItemCounter(arr) {
  el_item_counter.textContent = ` ${arr.length} `;
}

// Add item-selected class to all menu items
function addMenuItemSelectedListener() {
  const temp_list_of_items = document.querySelector(".items-container");
  const el_menu_item_list = temp_list_of_items.querySelectorAll(".menu-item");

  el_menu_item_list.forEach((item) => {
    item.addEventListener("click", () => {
      // When clicked, toggled selected item display
      if (item.value == 0) {
        resetSelectedDisplays(el_menu_item_list);
      }
      toggleSelectValue(item);
      updateSelectDisplay(el_menu_item_list, "item-selected");

      // When clicked, update add to cart interface
      displayAddToCart(item);
    });
  });

  // If click anywhere but item, it deselects it
  const el_menu = document.querySelector(".menu");
  el_menu.addEventListener("click", (e) => {
    if (
      e.target == el_menu ||
      e.target == el_item_container ||
      e.target == document.querySelector("body")
    ) {
      resetSelectedDisplays(el_menu_item_list);
      toggleSelectValue(document.getElementsByClassName(".item-selected"));
      updateSelectDisplay(el_menu_item_list, "item-selected");

      // hide add to cart display
      el_add_to_cart.style.bottom = "-14rem";
    }
  });
}

// Update add to cart display
function displayAddToCart(item) {
  // show add to cart display
  item.value == 1
    ? (el_add_to_cart.style.bottom = "0")
    : (el_add_to_cart.style.bottom = "-14rem");

  itemVolume = 1; // set quantity to 1

  // store data of selected item
  let currentItem = current_food_items.filter(
    (x) => x.name == item.querySelector(".name").textContent
  );

  // store current item price
  currentItem[0].tags.includes("sale")
    ? (itemPrice = currentItem[0].price / discountValue)
    : (itemPrice = currentItem[0].price);
  itemName = currentItem[0].name;

  // Update display
  updateAddToCart();
}

function updateAddToCart() {
  // display current item info
  el_cart_item_quantity.textContent = itemVolume;
  el_cart_item_name.textContent = itemName;
  el_cart_item_price.textContent = `£ ${(itemPrice * itemVolume).toFixed(2)}`;
}

/* EVENT LISTENERS */
// Display all items on page load
document.addEventListener("DOMContentLoaded", () => {
  displayItemList(list_of_items, current_filter); // display list of items
  updateSelectDisplay(el_filter_buttons, "selected"); // show selected filter button
  updateItemCounter(current_food_items); // update item counter
  el_load_more_btn.disabled = true;
});

// Add functionality to the filter buttons
el_filter_buttons.forEach((button) => {
  button.addEventListener("click", function () {
    resetSelectedDisplays(el_filter_buttons); // make all values of buttons 0
    toggleSelectValue(button); // make selected button, value 1
    updateSelectDisplay(el_filter_buttons, "selected"); // if has value 1, add selected class

    // Get the tag to filter the items by
    let tag = button.id;

    // create a new filtered array, if includes tag of button
    current_food_items = list_of_items.filter((item) => {
      if (tag == "all") {
        return list_of_items;
      } else {
        return item.tags.includes(tag);
      }
    });

    displayItemList(current_food_items, current_filter);
  });
});

// Change drop down list height on click
el_dropdown_box.addEventListener("click", function () {
  const dropdownOptions = el_dropdown_box.querySelector(".sort-dropdown");

  const numOfOptions = dropdownOptions.querySelectorAll(".item").length;

  // height = 3rem * how many options
  let height = 3 * numOfOptions;

  // change height when clicked
  if (dropdownOptions.style.height == `${height}rem`) {
    dropdownOptions.style.height = 0;
  } else {
    dropdownOptions.style.height = `${height}rem`;
  }
});

// Add functionality to the sort by buttons
el_dropdown_list.forEach((option) => {
  option.addEventListener("click", function () {
    el_dropdown_box.querySelector(".default-text").textContent =
      option.textContent;

    // when clicked update the display list
    current_filter = option.getAttribute("data-value");
    displayItemList(current_food_items, current_filter);
  });
});

// Add functionality to the add to cart buttons
el_minus_btn.addEventListener("click", () => {
  itemVolume >= 1 ? itemVolume-- : (itemVolume = 0);
  updateAddToCart();
});

el_plus_btn.addEventListener("click", () => {
  itemVolume++;
  updateAddToCart();
});

// Add functionality to load more button
el_load_more_btn.addEventListener("click", () => {
  itemsToShow += 5;
  displayItemList(current_food_items, current_filter);
});
