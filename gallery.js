var filterValues = [5];

function initialize() {
    setColors();
    //https://stackoverflow.com/questions/23090019/fastest-formula-to-get-hue-from-rgb
    //https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate
    colorFilterImages();
}

function setColors() {
    for(let i = 1; i <= 5; i++) {
        let colorSquareElement = document.getElementById("colorsquare"+i);
        colorSquareElement.style.backgroundColor = localStorage.getItem("color"+i);
        filterValues[i-1] = localStorage.getItem("color"+i);
    }
}

function colorFilterImages() {
    var filters = document.getElementsByClassName("filter");
    for(let i = 0; i < filters.length; i++) {
        filters[i].style.backgroundColor = filterValues[Math.floor(Math.random() * 5)];
    }
}
