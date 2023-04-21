const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  MouseEnter: () => {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },

  MouseLeave: () => {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },

  WindowResize: () => {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },

  MouseRight: () => {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

const title = document.querySelector("h2");

title.addEventListener("mouseenter", superEventHandler.MouseEnter);
title.addEventListener("mouseleave", superEventHandler.MouseLeave);

window.addEventListener("resize", superEventHandler.WindowResize);
window.addEventListener("contextmenu", superEventHandler.MouseRight);
