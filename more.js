function initialize() {
    setColors();
}

function setColors() {
    for(let i = 1; i <= 5; i++) {
        let colorSquareElement = document.getElementById("colorsquare"+i);
        colorSquareElement.style.backgroundColor = localStorage.getItem("color"+i);
    }
}