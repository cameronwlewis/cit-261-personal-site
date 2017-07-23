/**
 * Created by cameronlewis on 6/18/17.
 */

function startup() {
    // Slingshot--for onMouseDown, onMouseUp
    document.getElementById("slingshot").onmousedown = function() {fireSlingshot()};
    document.getElementById("slingshot").onmouseup = function() {reloadSlingshot()};

    // Colored box, for onClick, onMouseOver, onMouseOut
    // JS event listeners
    makeBox();
    document.getElementById("myCanvas").onmouseover = function() {colorBox('red')};
    document.getElementById("myCanvas").onmouseout = function() {colorBox('green')};

    // Register touch event handlers
    document.getElementById('touch-canvas').addEventListener('touchstart',process_touchstart, false);
    document.getElementById('touch-canvas').addEventListener('touchend', process_touchend, false);
}

function fireSlingshot(){
    document.getElementById('slingshot').src ='slingshot-firing.jpg';
}
function reloadSlingshot(){
    document.getElementById('slingshot').src = 'slingshot-pulling.jpg';
}

function makeBox() {
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.rect(0,0,150,100);
    ctx.stroke();
    ctx.fillStyle = 'blue';
    ctx.fill();
}

function colorBox(color){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle = color;
    ctx.fill();
}

function process_touchstart(ev) {
    var canvas=document.getElementById("touch-canvas");
    var ctx=canvas.getContext("2d");
    if(ev.changedTouches[0].pageX !== null){
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function process_touchend(ev) {
    var canvas=document.getElementById("touch-canvas");
    var ctx=canvas.getContext("2d");
    if(ev.changedTouches[0].pageX !== null){
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

