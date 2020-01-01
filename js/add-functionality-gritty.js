// DOM elements
const rotateLeftButton = document.getElementById('rotate-left-button');
const rotateRightButton = document.getElementById('rotate-right-button');
const LOGOBorder = document.getElementById('LOGO-border');

// global variables
var rotation = 0;

// event handlers
function hideIMG() {
   // console.log('FIRING')
    const LOGO = document.getElementById('IMG');
    Visibility(LOGO);
}

function rotateIMG(event) {
    const LOGO = document.getElementById('small-LOGO');
    rotate(LOGO, event);
}


// helpers
// given a DOM element, change it's visibilty style property from hidden to visible
function Visibility(element) {
    if (element.style.visibility === 'hidden') {
        element.style.visibility = 'visible'
    } else {
        element.style.visibility = 'hidden'
    }
}

// given a DOM element and a direction, rotate the element that direction
function rotate(element, event) {
    if (event.target.id === 'rotate-left-button') {
        rotation = rotation - 15;
    } else {
        rotation = rotation + 15;
    }
    element.style.transform = 'rotate(' + rotation + 'deg)';
} 

// add event handlers when mouse events are triggered
LOGOBorder.onmouseenter = hideIMG;
LOGOBorder.onmouseleave = hideIMG;
rotateLeftButton.onclick = rotateIMG;
rotateRightButton.onclick = rotateIMG;