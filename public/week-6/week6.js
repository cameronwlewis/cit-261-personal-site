/**
 * Created by cameronlewis on 6/14/17.
 */

// this creates a prototype for a Car object, using an object constructor function.
// It will be used in instantiating other new Car objects.
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.changeMake = function (new_make) {
        this.make = new_make;
    };
}
//TODO: finish HTML page formatting and content and this page is finished

// these create new Car objects.
var Cars = [];
    Cars.push(new Car("Toyota", "Corolla", "2007", "silver"));
    Cars.push({make: "Mini", model: "Cooper", year: "2014", color: "white"});

function stringifyStuff(obj){
    return JSON.stringify(obj);
}

function parseJSON(json_string) {
    return JSON.parse(json_string);
}

function displayCars_raw(){
    document.getElementById('cars-raw').innerHTML = stringifyStuff(Cars);
}

function displayCars_parsed(){
    var carsJSON = stringifyStuff(Cars);
    var carsJSON_parsed = parseJSON(carsJSON);

    for(var i = 0; i < carsJSON_parsed.length; i++) {
        document.getElementById('cars-parsed').innerHTML += 'Make: ' + carsJSON_parsed[i]['make'] + '<br>';
        document.getElementById('cars-parsed').innerHTML += 'Model: ' + carsJSON_parsed[i]['model'] + '<br>';
        document.getElementById('cars-parsed').innerHTML += 'Year: ' + carsJSON_parsed[i]['year'] + '<br>';
        document.getElementById('cars-parsed').innerHTML += 'Color: ' + carsJSON_parsed[i]['color'] + '<p></p>';
    }
}

function webJSON(option){
    var request = new XMLHttpRequest();

    request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            if (option === 'raw') {
                document.getElementById('web-raw').innerHTML = request.responseText;
            }
            else if (option === 'parsed'){
                var parsed = JSON.parse(request.responseText);

                for(var i = 0; i < parsed.length; i++) {
                    document.getElementById("web-parsed").innerHTML += 'ID: ' + parsed[i][['id']] + '<br>';
                    document.getElementById("web-parsed").innerHTML += 'Name: ' + parsed[i][['name']] + '<br>';
                    document.getElementById("web-parsed").innerHTML += 'Email: ' + parsed[i][['email']] + '<br>';
                    document.getElementById("web-parsed").innerHTML += 'Street: ' + parsed[i]['address']['street'] + '<br>';
                    document.getElementById("web-parsed").innerHTML += 'Suite: ' + parsed[i]['address']['suite'] + '<br>';
                    document.getElementById("web-parsed").innerHTML += 'City: ' + parsed[i]['address']['city'] + '<br>';
                    document.getElementById("web-parsed").innerHTML += 'Zipcode: ' + parsed[i]['address']['zipcode'] + '<p></p>';
                }
            }
        }
        else{
            // We reached our target server, but it returned an error
            alert("Error!");
        }
    };

    request.send();
}