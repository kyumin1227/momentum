const loginInput = document.querySelector(".login-form Input");
const loginForm = document.querySelector(".login-form");

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저의 기본 동작을 방어
    // const username = loginInput.value;
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);