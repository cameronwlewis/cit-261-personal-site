'use strict';

//todo: maybe optimize this file with one 'button' function with parameters for element IDs

function loginButton_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    document.getElementById('login-button-bg').style.fill = '#76BED0';
    document.getElementById('loginText').style.fill = '#ffffff';
}
function loginButton_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    document.getElementById('login-button-bg').style.fill = '#ffffff';
    document.getElementById('loginText').style.fill = '#76BED0';
}

function chooserButton_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    document.getElementById('image-chooser-button-bg').style.fill = '#76BED0';
    document.getElementById('image-chooser-text').style.fill = '#ffffff';
}

function chooserButton_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    document.getElementById('image-chooser-button-bg').style.fill = '#ffffff';
    document.getElementById('image-chooser-text').style.fill = '#76BED0';
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

/*function go_login() {
    window.open("/auth/spotify","_self")
}*/

document.getElementById('login-button').addEventListener("mouseover", loginButton_in);
document.getElementById('login-button').addEventListener("mouseout", loginButton_out);
document.getElementById('image-chooser-button').addEventListener("mouseover", chooserButton_in);
document.getElementById('image-chooser-button').addEventListener("mouseout", chooserButton_out);
document.getElementById('submit-image-button').addEventListener("mouseover", submitButton_in);
document.getElementById('submit-image-button').addEventListener("mouseout", submitButton_out);

document.getElementById('login-button').addEventListener("touchstart", loginButton_in);
document.getElementById('login-button').addEventListener("touchend", loginButton_out);
document.getElementById('image-chooser-button').addEventListener("touchstart", chooserButton_in);
document.getElementById('image-chooser-button').addEventListener("touchend", chooserButton_out);
document.getElementById('submit-image-button').addEventListener("touchstart", submitButton_in);
document.getElementById('submit-image-button').addEventListener("touchend", submitButton_out);

//document.getElementById('cool-button').addEventListener("click", go_login);
//# sourceMappingURL=cool-button.js.map