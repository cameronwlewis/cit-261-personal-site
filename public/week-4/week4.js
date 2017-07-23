/**
 * Created by cameronlewis on 6/8/17.
 */

function add_text() {
    // create a new div element
    // and give it some content
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Stop clicking me!!!!");

    // add id for later retrieval, and a class name for styling purposes
    newDiv.id = "new-text";
    newDiv.className = "demo--result";

    //add the text node to the newly created div.
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("insert-before-here");
    document.body.insertBefore(newDiv, currentDiv);
}

function remove_text(){
    var parent = document.getElementById("my-page");
    parent.removeChild(document.getElementById("new-text"));
}