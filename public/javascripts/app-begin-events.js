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

document.getElementById('login-button').addEventListener("mouseover", loginButton_in);
document.getElementById('login-button').addEventListener("mouseout", loginButton_out);

document.getElementById('login-button').addEventListener("touchstart", loginButton_in);
document.getElementById('login-button').addEventListener("touchend", loginButton_out);