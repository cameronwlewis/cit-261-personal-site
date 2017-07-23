'use strict';

function doAJAX() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            document.getElementById("demo").innerHTML = this.responseText;
        } else {
            // We reached our target server, but it returned an error
            alert("Error!");
        }
    };
    request.send();
}
//# sourceMappingURL=bruce_test.js.map