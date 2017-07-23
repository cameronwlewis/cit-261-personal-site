'use strict';

function doAJAX() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            displayJSON(data);
        } else {
            // We reached our target server, but it returned an error
            alert("Error!");
        }
    };
    request.send();
}

function displayJSON(json) {
    for (var i = 0; i < json.length; i++) {
        document.getElementById("json-result").innerHTML += 'User ID: ' + json[i][['userId']] + '<br>';
        document.getElementById("json-result").innerHTML += 'Post ID: ' + json[i][['id']] + '<br>';
        document.getElementById("json-result").innerHTML += 'Title: ' + json[i][['title']] + '<br>';
        document.getElementById("json-result").innerHTML += 'Post Body: ' + json[i][['body']] + '<p></p>';
    }
}
//# sourceMappingURL=week5.js.map