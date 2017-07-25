'use strict';

var accessToken = '';

function getAccessToken() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var debug = this.responseText;
            accessToken = this.responseText;
            var debug2 = 'hi';
        }
    };
    xhttp.open("GET", "http://localhost:3000/accessToken", true);
    xhttp.send();
}

window.addEventListener("load", function load(event) {
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    getAccessToken();
}, false);

// put code here that searches playlists, and see if it works!

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImageUpload, false);
var canvas = document.getElementById('uploadCanvas');
var ctx = canvas.getContext('2d');

var selectedImage = void 0;
var submitImage = document.getElementById('submit-image-button');
submitImage.addEventListener('click', sendToEmotionAPI); //todo: uncomment when done debugging/testing and delete line below
//submitImage.addEventListener('click', getSpotifyPlaylist);


function handleImageUpload(e) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var img = new Image();
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = event.target.result;
        selectedImage = document.getElementById('imageLoader').files;
    };
    reader.readAsDataURL(e.target.files[0]);
    document.getElementById('submit-image-button').style.display = 'block';
}
var strongestEmotion = 'happiness'; // todo: uncomment when done

function sendToEmotionAPI() {
    //todo: uncomment all this stuff when done testing
    /*let rapid =  new RapidAPI("cit261-app_59643290e4b02799980f80b8", "cc8619fe-d5c5-47e6-9393-7f698b2c22c4");
    let strongestEmotion = "";
    rapid.call('MicrosoftEmotionAPI', 'getEmotionRecognition', {
        'subscriptionKey': '449155b07e884d8ea5bae531f5cf47ec',
        'image': selectedImage[0]
     }).on('success', function (payload) {
         let scores = payload[0].scores;
         let emotionScore = 0;
        for (let key in scores) {
            if (scores[key] > emotionScore) {
                emotionScore = scores[key];
                console.log(emotionScore);
                strongestEmotion = key;
                console.log(strongestEmotion);
            }
        }
        // our strongest emotion from the photo has been found!
       console.log("final: " + strongestEmotion);*/
    getSpotifyPlaylist(strongestEmotion);

    /* }).on('error', function (payload) {
          console.log('Error!');
     });*/
}

function hideCrap() {
    document.getElementById('submit-image-button').style.display = 'none';
    document.getElementById('_content').style.display = 'none';
}

function showOverlay() {
    hideCrap();
    var main_container = document.getElementById('main_container');
    main_container.classList.remove('page-content-container');
    main_container.className += 'overlay';
    document.getElementById('closebtn').innerHTML = 'x';
    // 'x' close button, for mouse
    document.getElementById('closebtn').addEventListener("click", _closeBtn);
    // for touch
    document.getElementById('closebtn').addEventListener("ontouch", _closeBtn);
    document.getElementById('playlist-suggestion').style.transition = '0.5s';
    document.getElementById('playlist-suggestion').style.display = 'block';
}

var emotion = { neutral: '😐', happiness: '😄', surprise: '😮', sadness: '😢',
    angry: '😡', disgust: '🤢', fear: '😱', contempt: '😾' };

var hello = emotion.surprise;
var butt = 'nasty';
var whatis = emotion[3];
var hi = 'what';

var _emoji;

/*
var neutral = '😐';
var happiness = '😄';
var surprise = '😮';
var sadness = '😢';
var angry = '😡';
var disgust = '🤢';
var fear = '😱';
var contempt ='😾';
*/

function assignEmoji() {
    for (var i in emotion) {
        if (i === strongestEmotion) {
            console.log(emotion[i]);
        }
    }
}

function showPlaylistSuggestion(name, artwork, url) {
    showOverlay();

    document.getElementById('playlist-artwork').src = artwork;
    document.getElementById('playlist-name').innerHTML = name;
    document.getElementById('playlist-url').innerHTML = 'Click here to open playlist';
    document.getElementById('playlist-url').href = url;
}

function getSpotifyPlaylist(strongestEmotion) {
    var spotify = new SpotifyWebApi();
    assignEmoji();
    spotify.setAccessToken(accessToken);

    spotify.searchPlaylists(strongestEmotion, { limit: 1 }, function (err, data) {

        if (err) console.error(err);else {
            console.log('Playlist: ', data);
            var playlist_Name = data.playlists.items[0].name;
            var playlist_Artwork = data.playlists.items[0].images[0].url;
            var playlist_URL = data.playlists.items[0].external_urls.spotify;
            console.log(playlist_Name);
            console.log(playlist_URL);
            hideCrap();
            showPlaylistSuggestion(playlist_Name, playlist_Artwork, playlist_URL);
        }
    });
}
//# sourceMappingURL=app-main.js.map