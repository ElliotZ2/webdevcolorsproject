var hues = [5];
var saturateValues = [5];

function initialize() {
    document.getElementById("testimage").style.filter = "hue-rotate(180deg)";
    //https://stackoverflow.com/questions/23090019/fastest-formula-to-get-hue-from-rgb
    //https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate
    initializeFilterValues();
    populateGallery();
    colorFilterImages();
}

function initializeFilterValues() {
    for(let i = 1; i <= 5; i++) {
        let hexColor = localStorage.getItem("color"+i);
        let r = parseInt(hexColor.substring(1,3), 16);
        let g = parseInt(hexColor.substring(3,5), 16);
        let b = parseInt(hexColor.substring(5,7), 16);
        let hue = 0;
        if(r > g && r > b) {
            hue = g -b;
        }
        else if(g > r && g > b) {
            hue = b - r + 2;
        }
        else{
            hue= r - g + 4;
        }
        hue *= 60;
        hues[i-1] = hue;
        while(hue < 0) {
            hue += 360;
        }
    }   
}

function colorFilterImages() {
    let images = document.getElementsByClassName("galleryimage");
    for(let i = 0; i < images.length; i++) {
        let r = Math.floor(Math.random() * 5);
        image = document.getElementById(i);
    }
}

function populateGallery(images) {
    galleryWrapperElement = document.getElementById("gallerywrapper");
    for(let i = 0; i < 20; i++) {
        let image = document.createElement("img");
        image.src = "https://source.unsplash.com/collection/ 190727/800x600?" + i;
        image.classList.add("galleryimage");
    }
}