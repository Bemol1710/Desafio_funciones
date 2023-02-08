
let cuadrado;
let color;

const select = document.querySelector(".selector_color");
const first = document.getElementById("primero");
const second = document.getElementById("segundo");
const third = document.getElementById("tercero");
const four = document.getElementById("cuarto");


document.addEventListener("keydown", function (event) {
    if (event.key == "A" || event.key == "a") {
        color = "purple";
    } else if (event.key == "S" || event.key == "s") {
        color = "grey";
    } else if (event.key == "D" || event.key == "d") {
        color = "pink";
    }
    select.style.backgroundColor = color;
})



cambiaColor = (cuadrado, color) => { cuadrado.style.backgroundColor = color };

first.addEventListener("click", function () {
    cambiaColor(first, color);
})
second.addEventListener("click", function () {
    cambiaColor(second, color);
})
third.addEventListener("click", function () {
    cambiaColor(third, color);
})
four.addEventListener("click", function () {
    cambiaColor(four, color);
})