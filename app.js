const h1 = document.querySelector(".hello h1")

console.dir(h1);

function handleTitleClick() {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);