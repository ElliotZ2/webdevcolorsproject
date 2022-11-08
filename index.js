function initialize(){
    if(localStorage.getItem("color1") !== null) {
        setColors();
    }
    changeColor();
}

function changeColor(){
    for(let i = 1; i <= 5; i++) {
        let colorInputElement = document.getElementById("colorinput"+i);
        let colorRgbElement = document.getElementById("colorrgb"+i);
        let colorHexElement = document.getElementById("colorhex"+i);
        let colorSquareElement = document.getElementById("colorsquare"+i);
        let hexValue = colorInputElement.value;
        colorRgbElement.innerHTML = hexToRGB(hexValue);
        colorHexElement.innerHTML = hexValue;
        colorSquareElement.style.backgroundColor = hexValue;
        localStorage.setItem("color"+i, hexValue);
    }
}

function setColors() {
    for(let i = 1; i <= 5; i++) {
        let colorInputElement = document.getElementById("colorinput"+i);
        colorInputElement.value = localStorage.getItem("color"+i);
    }
}

function hexToRGB(hex) {
    hex = hex.substring(1);
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);
    return r + ", " + g + ", " + b;
}