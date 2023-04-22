const loginInput = document.querySelector(".login-form Input");
const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault(); // 브라우저의 기본 동작을 방어
    console.log(username);
    loginForm.classList.add("hidden");
    greeting.classList.remove("hidden");
    // greeting.innerText = "Hello, " + username;
    greeting.innerText = `Hello, ${username}`;
    localStorage.setItem("username", username);
}

loginForm.addEventListener("submit", onLoginSubmit);