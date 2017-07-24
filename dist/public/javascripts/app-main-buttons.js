'use strict';

function chooserButton_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    document.getElementById('imageLoader-bg').style.fill = '#76BED0';
    document.getElementById('imageLoader-text').style.fill = '#ffffff';
}

function chooserButton_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    document.getElementById('imageLoader-bg').style.fill = '#ffffff';
    document.getElementById('imageLoader-text').style.fill = '#76BED0';
}
function submitButton_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    document.getElementById('submit-image-button-bg').style.fill = '#76BED0';
    document.getElementById('submit-image-text').style.fill = '#ffffff';
}

function submitButton_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    document.getElementById('submit-image-button-bg').style.fill = '#ffffff';
    document.getElementById('submit-image-text').style.fill = '#76BED0';
}
// mouse event listeners
document.getElementById('imageLoader').addEventListener("mouseover", chooserButton_in);
document.getElementById('imageLoader').addEventListener("mouseout", chooserButton_out);
document.getElementById('submit-image-button').addEventListener("mouseover", submitButton_in);
document.getElementById('submit-image-button').addEventListener("mouseout", submitButton_out);

// touch event listeners
document.getElementById('imageLoader').addEventListener("touchstart", chooserButton_in);
document.getElementById('imageLoader').addEventListener("touchend", chooserButton_out);
document.getElementById('submit-image-button').addEventListener("touchstart", submitButton_in);
document.getElementById('submit-image-button').addEventListener("touchend", submitButton_out);
//# sourceMappingURL=app-main-buttons.js.map