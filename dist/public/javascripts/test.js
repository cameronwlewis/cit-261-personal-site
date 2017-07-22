"use strict";

function data_test() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "http://localhost:3000/data_test", true);
    xhttp.send();
}
//# sourceMappingURL=test.js.map