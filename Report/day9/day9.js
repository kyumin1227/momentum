const day = document.querySelector("span");

function timer() {
    const date = new Date();
    let christmas = new Date(date.getFullYear(), 11, 25);
    if (christmas.getTime() < date.getTime()) {
        // 12월 25일 ~ 12월 31일 까지의 예외 처리
        christmas = new Date(date.getFullYear() + 1, 11, 25);
    }
    const seconds = (christmas - date) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    const s = String(Math.floor(seconds % 60, 1)).padStart(2, "0");
    const m = String(Math.floor(minutes % 60, 1)).padStart(2, "0");
    const h = String(Math.floor(hours % 24, 1)).padStart(2, "0");
    const d = String(Math.floor(days, 1)).padStart(3, "0");

    day.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

timer();
setInterval(timer, 1000);