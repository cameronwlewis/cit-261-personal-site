
var accessToken ='';

function data_test() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            accessToken = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:3000/data_test", true);
    xhttp.send();
}

// put code here that searches playlists, and see if it works!


function getSpotifyPlaylist() {
    var spotify = new SpotifyWebApi();
    spotify.setAccessToken(accessToken);

    spotify.searchPlaylists('pop', {limit: 1}, function (err, data) {

        if (err) console.error(err);
        else {
            console.log('Pop Playlist: ', data);
            var playlist = data.playlists.items[0].name;
            console.log(playlist);
        }
    });
}

var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

var selectedImage;
var submitImage = document.getElementById('submitImage');
submitImage.addEventListener('click', sendImage);

function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event){
        var img = new Image();
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img,0,0);
        };
        img.src = event.target.result;
        selectedImage = e.target.files[0];
    };
    reader.readAsDataURL(e.target.files[0]);
    document.getElementById('submitImage').style.visibility='visible';
}

function sendImage(){
    let rapid =  new RapidAPI("cit261-app_59643290e4b02799980f80b8", "cc8619fe-d5c5-47e6-9393-7f698b2c22c4");
    let strongestEmotion = "";

    rapid.call('MicrosoftEmotionAPI', 'getEmotionRecognition', {
        'subscriptionKey': '449155b07e884d8ea5bae531f5cf47ec',
        'image': selectedImage

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
        console.log("final: " + strongestEmotion);


    }).on('error', function (payload) {

        console.log('Error!');
    });
}

