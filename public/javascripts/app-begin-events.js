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

function showExplanation() {
    document.getElementById('explanation-text').innerHTML = "Ever wanted to find the perfect playlist to describe how you feel? " +
        "Upload a picture of your face, and we'll analyze it using artificial intelligence to discover the emotions " +
        "you may be feeling, and provide you an awesome playlist recommendation on Spotify.";
}

function hideExplanation() {
    document.getElementById('explanation-text').innerHTML = '';
}

document.getElementById('login-button').addEventListener("mouseover", loginButton_in);
document.getElementById('login-button').addEventListener("mouseout", loginButton_out);

document.getElementById('login-button').addEventListener("touchstart", loginButton_in);
document.getElementById('login-button').addEventListener("touchend", loginButton_out);

document.getElementById('explanation').addEventListener("mouseover", showExplanation);
document.getElementById('explanation').addEventListener("mouseout", hideExplanation);

document.getElementById('explanation').addEventListener("touchstart", showExplanation);
document.getElementById('explanation').addEventListener("touchend", hideExplanation);