const text = document.querySelector("h1");
const backGround = document.querySelector("div");

function sizeCheck() {
    if (window.innerWidth >= "1000") {
        backGround.classList.add("width_large");
        backGround.classList.remove("width_middle");
        backGround.classList.remove("width_small");
    } else if (window.innerWidth >= "500" && window.innerWidth < "1000") {
        backGround.classList.add("width_middle");
        backGround.classList.remove("width_large");
        backGround.classList.remove("width_small");
    } else {
        backGround.classList.add("width_small");
        backGround.classList.remove("width_large");
        backGround.classList.remove("width_middle");
    }
}

window.addEventListener("resize", sizeCheck);