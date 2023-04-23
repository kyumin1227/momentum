const playButton = document.querySelector("form > button");
const machineMaxNum = document.querySelector("main > input");
const hiddenText = document.querySelector(".hidden");
const result = document.querySelector(".result");
let randomNum = 0;

playButton.addEventListener("click", startRandomNumber);

function startRandomNumber(event) {
    const choseNum = document.querySelector("form > input").valueAsNumber;
    event.preventDefault();
    randomNum = Math.ceil(Math.random() * machineMaxNum.valueAsNumber, 1);
    hiddenText.classList.remove("hidden");
    document.querySelector(".chose_number").innerText = choseNum;
    document.querySelector(".random_number").innerText = randomNum;
    if (choseNum === randomNum) {
        result.innerText = "You won!";
    } else {
        result.innerText = "You lost!";
    }
}