
/** Week 2 Topic: Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays **/

// this is a variable
    var disco = "Dance baby!";

// I'm gonna send the 'disco' variable as an argument
    //funkyFunction(disco);

// This is a function.
    function funkyFunction(disco /* This is a parameter */ ) {

        // use regex to test my "disco" variable for a specific condition
        var regexPattern = /D?d?ance/;

        // These are some conditional statements
        if (regexPattern.test(disco))
            document.getElementById("dancing-status").innerHTML = "Let's groove!";
        else
            document.getElementById("dancing-status").innerHTML = "Guess we ain't dancin today...";
    }

// this is an array being declared and initialized
    var array = ['Fred', 'Susan', 'John'];

// this is a loop iterating through an array.
// Fred, Susan, and John will be displayed in the console
function arrayLoop() {
  var names = "";
    for (var i = 0; i < array.length; i++) {
        names += "<br>" + array[i];
    }
    document.getElementById("array-result-1").innerHTML = names;
}

// this is an associative array being declared and initialized.
    var person = [];
    person["firstName"] = "Cameron";
    person["lastName"] = "Lewis";
    person["age"] = 29;

// This shows how you access elements of an associative array.
//  My first and last name and my age will be displayed in the console

function assocArray() {
    var first = "<br>" + person["firstName"];
    var last = "<br>" + person["lastName"];
    var age = "<br>" + person["age"];

    var info = first + last + age;

    document.getElementById("array-result-2").innerHTML = info;
}


