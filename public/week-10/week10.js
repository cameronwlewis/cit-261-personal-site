/**
 * Created by cameronlewis on 6/19/17.
 */
// JS event listeners
function startup() {
    makeBox();
    document.getElementById("myCanvas").onmouseover = function() {colorBox('red')};
    document.getElementById("myCanvas").onmouseout = function() {colorBox('green')};
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
