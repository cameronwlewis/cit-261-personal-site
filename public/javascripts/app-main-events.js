var _imageLoader_bg = document.getElementById('imageLoader-bg');
var _imageLoader_text = document.getElementById('imageLoader-text');

var _submit_image_button_bg = document.getElementById('submit-image-button-bg');
var _submit_image_text = document.getElementById('submit-image-text');

function chooserButton_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    _imageLoader_bg.style.fill = '#76BED0';
    _imageLoader_text.style.fill = '#ffffff';
}

function chooserButton_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    _imageLoader_bg.style.fill = '#ffffff';
    _imageLoader_text.style.fill = '#76BED0';
}
function submitButton_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    _submit_image_button_bg.style.fill = '#76BED0';
    _submit_image_text.style.fill = '#ffffff';
}

function submitButton_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    _submit_image_button_bg.style.fill = '#ffffff';
    _submit_image_text.style.fill = '#76BED0';
}

function _closeBtn(){

    // reinstate old container
    var main_container = document.getElementById('main_container');
    main_container.className += ' page-content-container';

    // hide overlay and playlist suggestion
    document.getElementById('playlist-suggestion').style.display = 'none';
    document.getElementById('closebtn').innerHTML = '';
    main_container.classList.remove('overlay');

    document.getElementById('submit-image-button').style.display = 'block';
    document.getElementById('_content').style.display = 'block';
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




