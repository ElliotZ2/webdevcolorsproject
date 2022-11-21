function initialize() {
    setColors();
}

function setColors() {
    var wrappers = document.getElementsByClassName("wrapperr");
    for(let i = 1; i <= 5; i++) {
        let color = localStorage.getItem("color"+i);
        let colorSquareElement = document.getElementById("colorsquare"+i);
        colorSquareElement.style.backgroundColor = color;
        document.getElementsByClassName('wrapper')[i-1].style.backgroundColor = color;
        let tc = textColor(color);
        document.getElementById("h"+i).style.color = tc;
        document.getElementById("p"+i).style.color = tc;
    }
}

function textColor(backgroundColor) {
    hex = backgroundColor.substring(1);
    let r = parseInt(hex.substring(0,2), 16);
    let g = parseInt(hex.substring(2,4), 16);
    let b = parseInt(hex.substring(4,6), 16);
    if ((r*0.299 + g*0.587 + b*0.114) > 186) {
        return "#000000";
    }
    return "#ffffff";
}