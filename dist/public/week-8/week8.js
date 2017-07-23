"use strict";

var rocket_sitting = document.getElementById("rocket-sitting");
var rocket_blasting = document.getElementById("rocket-blasting");

function showFlames() {
    rocket_sitting.style.visibility = "hidden";
    rocket_blasting.style.visibility = "visible";
    rocket_blasting.classList.add("blast-off");
}

function hideFlames() {
    rocket_sitting.style.visibility = "visible";
    rocket_blasting.style.visibility = "hidden";
    rocket_blasting.classList.remove("blast-off");
}
//document.getElementById('rocket-sitting').addEventListener('touchstart',listener, false);
rocket_sitting.addEventListener("click", function () {
    showFlames();
});

rocket_blasting.addEventListener("animationend", listener, false);
rocket_blasting.addEventListener("animationstart", listener, false);

function listener(e) {
    switch (e.type) {
        case "animationstart":
            showFlames();
            break;
        case "animationend":
            hideFlames();
            break;
    }
}
//# sourceMappingURL=week8.js.map