const loginInput = document.querySelector(".login-form Input");
const loginButton = document.querySelector(".login-form button");

function handleLoginBtnClick() {
    userName = loginInput.value;
    if (userName == "") {
        alert("Please write your name!");
    } else if (userName.length > 15) {
        alert("Your name is too long");
    } else {
    console.log("Hello", userName);
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);