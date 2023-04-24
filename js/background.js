const img = ["0.avif", "1.jpg", "2.jpg"];

const nowImg = img[Math.floor(Math.random() * (img.length))];

const bgImg = document.createElement("img");

bgImg.src = `img/${nowImg}`;

document.body.appendChild(bgImg);