const number = document.getElementById("number");

const buttons = document.querySelectorAll(".btn");

let valueCount = number.innerHTML;

buttons.forEach((button) => {
  console.log(button);

  button.addEventListener("click", function () {
    if (button.classList.contains("decrease")) {
      decrease();
      console.log(valueCount);
    } else if (button.classList.contains("reset")) {
      reset();
    } else if (button.classList.contains("increase")) {
      increase();
    }
  });
});

function decrease() {
    --valueCount;
  number.innerText = valueCount;
  if (valueCount < 0) {
    number.style.color = "red";
  }
  if(valueCount == 0){
    number.style.color = 'black'
  }
}

function reset() {
  valueCount = 0;
  number.innerText = valueCount;
  number.style.color = "black";
}

function increase() {
    ++valueCount;
  number.innerText = valueCount;
  if (valueCount > 0) {
    number.style.color = "green";
  }
  if(valueCount == 0){
    number.style.color = 'black'
  }
}
