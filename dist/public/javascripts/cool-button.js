'use strict';

function buttonColor_in() {
    //document.getElementById('btn-border').style.stroke = '#EA3126';
    document.getElementById('btn-bg').style.fill = '#76BED0';
    document.getElementById('loginText').style.fill = '#ffffff';
}

function buttonColor_out() {
    // document.getElementById('btn-border').style.stroke = '#76BED0';
    document.getElementById('btn-bg').style.fill = '#ffffff';
    document.getElementById('loginText').style.fill = '#76BED0';
}

/*function go_login() {
    window.open("/auth/spotify","_self")
}*/

document.getElementById('cool-button').addEventListener("mouseover", buttonColor_in);
document.getElementById('cool-button').addEventListener("mouseout", buttonColor_out);
//document.getElementById('cool-button').addEventListener("click", go_login);
//# sourceMappingURL=cool-button.js.map