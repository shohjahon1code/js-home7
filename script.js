const elForm = document.querySelector("form");
const elInput = document.querySelector("#input");
const elTodoItem = document.querySelector(".todo__item");
const elClearAll = document.querySelector(".clear");
const elTotal = document.querySelector("span");

let items = [];

const createElement = () => {
  items.forEach((item) => {
    const elem = document.createElement("div");
    elem.classList.add("items");

    elTodoItem.appendChild(elem);
    elem.textContent += item;
  });
};

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = elInput.value;
  if (value == "") {
    alert("Insert Something");
  } else {
    elTodoItem.textContent = "";

    items.push(value);
    elTodoItem.style.display = "block";
    createElement();
    elTotal.textContent = items.length;
    elInput.value = "";
  }
});

elClearAll.addEventListener("click", deleteItems);

function deleteItems() {
  items = [];
  elTodoItem.style.display = "none";
  elTotal.textContent = items.length;
}
