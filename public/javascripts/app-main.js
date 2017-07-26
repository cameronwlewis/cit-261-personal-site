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

var selectedImage;
var submitImage = document.getElementById('submit-image-button');
submitImage.addEventListener('click', sendToEmotionAPI); //todo: uncomment when done debugging/testing and devare line below
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

function sendToEmotionAPI() { //todo: uncomment all this stuff when done testing
    var rapid = new RapidAPI("cit261-app_59643290e4b02799980f80b8", "cc8619fe-d5c5-47e6-9393-7f698b2c22c4");
    var strongestEmotion = "";
    rapid.call('MicrosoftEmotionAPI', 'getEmotionRecognition', {
        'subscriptionKey': '449155b07e884d8ea5bae531f5cf47ec',
        'image': selectedImage[0]

    }).on('success', function (payload) {

        var scores = payload[0].scores;

        var emotionScore = 0;
        for (var key in scores) {
            if (scores[key] > emotionScore) {
                emotionScore = scores[key];
                console.log(emotionScore);
                strongestEmotion = key;
                console.log(strongestEmotion);
            }
        }
        // our strongest emotion from the photo has been found!
        console.log("final: " + strongestEmotion);
        getSpotifyPlaylist(strongestEmotion);

    }).on('error', function (payload) {

        console.log('Error!');
    });
}

function hideCrap() {
    document.getElementById('submit-image-button').style.display = 'none';
    document.getElementById('_content').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('playlist-suggestion').style.display = 'none';
    document.getElementById('playlist-artwork').style.display = 'none';
}

function showOverlay() {
    hideCrap();
    var main_container = document.getElementById('main_container');
    //main_container.classList.remove('page-content-container');
    //main_container.className += 'overlay1';
    document.getElementById('closebtn').innerHTML = 'x';
    document.getElementById('closebtn').style.display = 'block';
    document.getElementById('closebtn').addEventListener("click", _closeBtn);
    document.getElementById('closebtn').addEventListener("ontouch", _closeBtn);
}

var emoji = {
    neutral: '😐', happiness: '😄', surprise: '😮', sadness: '😢',
    anger: '😡', disgust: '🤢', fear: '😱', contempt: '😾'
};

var caption = {
    neutral: "You're feeling...meh.", happiness: "Yay! You're happy!", surprise: "*gasp* You're surprised",
    sadness: "Aww, don't be sad!", anger: "There's no need to be angry...", disgust: "You're feeling disgusted!",
    fear: "Don't be afraid!", contempt: "Yikes! Why the scornful face?"
};

function assignEmoji(emotion) {
    for (var i in emoji) {
        if (i === emotion) {
            return emoji[i];
        }
    }
}

function assignCaption(emotion) {
    for (var i in caption) {
        if (i === emotion) {
            return caption[i];
        }
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showPlaylistSuggestion(_caption, _emoji, name, artwork, url) {
    showOverlay();
    document.getElementById('playlist-emoji').innerHTML = _emoji;
    document.getElementById('playlist-caption').innerHTML = _caption;
    document.getElementById('playlist-suggestion').style.transition = '0.5s';
    document.getElementById('playlist-suggestion').style.display = 'block';
    document.getElementById('playlist-artwork').style.display = 'block';
    document.getElementById('playlist-artwork').src = artwork;
    document.getElementById('playlist-name').innerHTML = name;
    document.getElementById('playlist-url').innerHTML = 'Click here to open playlist';
    document.getElementById('playlist-url').href = url;
}

function getSpotifyPlaylist(strongestEmotion) {
    var spotify = new SpotifyWebApi();
    var _emoji = assignEmoji(strongestEmotion);
    var _caption = assignCaption(strongestEmotion);
    spotify.setAccessToken(accessToken);
    var x = getRandomInt(0, 2);
    spotify.searchPlaylists(strongestEmotion, {limit: 3}, function (err, data) {

        if (err) console.error(err);
        else {
            console.log('Playlist: ', data);
            var playlist_Name = data.playlists.items[x].name;
            var playlist_Artwork = data.playlists.items[x].images[0].url;
            var playlist_URL = data.playlists.items[x].external_urls.spotify;
            console.log(playlist_Name);
            console.log(playlist_URL);
            hideCrap();
            showPlaylistSuggestion(_caption, _emoji, playlist_Name, playlist_Artwork, playlist_URL)
        }
    });
}