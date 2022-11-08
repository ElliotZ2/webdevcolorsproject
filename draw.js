function initialize() {
    if(localStorage.getItem("color1") !== null) {
        setColors();
    }
    populateCanvas();
    addToolbarListeners();
}

function setColors() {
    for(let i = 1; i <= 5; i++) {
        let colorSquareElement = document.getElementById("colorsquare"+i);
        let colorSelectorElement = document.getElementById("colorselector"+i);
        colorSquareElement.style.backgroundColor = localStorage.getItem("color"+i);
        colorSelectorElement.style.backgroundColor = localStorage.getItem("color"+i);
    }
    document.getElementById("selectedcolor").style.backgroundColor = localStorage.getItem("selectedcolor");
}

let mouseDown = false;
window.addEventListener("mousedown", function(){
    mouseDown = true;
})
window.addEventListener("mouseup", function(){
    mouseDown = false;
})

function populateCanvas() {
    canvasElement = document.getElementById("canvas");
    for(let i = 0; i < 10000; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", function() {
            if(mouseDown) {
                pixel.style.backgroundColor = localStorage.getItem("selectedcolor");
            }
        })
        pixel.addEventListener("mousedown", function() {
            pixel.style.backgroundColor = localStorage.getItem("selectedcolor");
        })
        canvasElement.appendChild(pixel);
    }
}

function addToolbarListeners() {
    for(let i = 1; i <= 5; i++) {
        document.getElementById("colorselector" + i).addEventListener("click", function(){
            let c = document.getElementById("colorselector" + i).style.backgroundColor;
            localStorage.setItem("selectedcolor", c);
            let selectedColorElement = document.getElementById("selectedcolor");
            selectedColorElement.style.backgroundColor = c;
        })
    }
    document.getElementById("eraser").addEventListener("click", function(){
        let c = document.getElementById("eraser").style.backgroundColor;
        localStorage.setItem("selectedcolor", c);
        let selectedColorElement = document.getElementById("selectedcolor");
        selectedColorElement.style.backgroundColor = c;
    })
}