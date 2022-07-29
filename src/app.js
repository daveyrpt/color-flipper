const colorsRange = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const colorValue = document.querySelector(".colorValue");

btn.addEventListener('click', function(){
    // get number between 0 - 3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colorsRange[randomNumber];     //when clicked background color will change
    colorValue.textContent = colorsRange[randomNumber];                  //when clicked will return value for colorValue
});

function getRandomNumber() {
    return Math.floor(Math.random() * 4);
}