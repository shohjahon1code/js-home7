const elForm = document.querySelector("form");
const elInput = document.querySelector("input");
const content = document.querySelector("p");

function identifyWeek() {
  let value = Number(elInput.value);
  switch (value) {
    case 1:
      content.textContent = "Dushanba";
      break;
    case 2:
      content.textContent = "Seshanba";
      break;
    case 3:
      content.textContent = "Chorshanba";
      break;
    case 4:
      content.textContent = "Payshanba";
      break;
    case 5:
      content.textContent = "Juma";
      break;
    case 6:
      content.textContent = "Shanba";
      break;
    case 7:
      content.textContent = "Yakshanba";
      break;
    default:
      content.textContent = "1 dan 7 gacha bo'lgan son kiriting";
      break;
  }
}

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  identifyWeek();
  elInput.value = "";
});

// masala

let arr = [1, 2, 3];

let result = 0;
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  result += element;
}
console.log(result);
