const hexRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const colorValue = document.querySelector(".colorValue");

btn.addEventListener('click', function() {
    let hexColor = "#";

    for(let counter = 0; counter < 6; counter++) {
        hexColor += hexRange[getRandomNumber()];
        console.log('1')
    }

    colorValue.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexRange.length);
}