// Our data we're going to store
var fruits = ['apple', 'mango', 'banana', 'orange', 'raspberry',
    'blueberry', 'tangerine', 'pear'];

var pi = 3.14;

var donut = {
    "id": "0001",
    "type": "obj",
    "name": "Cake",
    "ppu": 0.55,
    "batters": {
        "batter": [
            {"id": "1001", "type": "Regular"},
            {"id": "1002", "type": "Chocolate"},
            {"id": "1003", "type": "Blueberry"},
            {"id": "1004", "type": "Devil's Food"}
        ]
    },
    "topping": [
        {"id": "5001", "type": "None"},
        {"id": "5002", "type": "Glazed"},
        {"id": "5005", "type": "Sugar"},
        {"id": "5007", "type": "Powdered Sugar"},
        {"id": "5006", "type": "Chocolate with Sprinkles"},
        {"id": "5003", "type": "Chocolate"},
        {"id": "5004", "type": "Maple"}
    ]
};

function putInStorage(varName, data) {
    if (varName === 'donut'){
        // store the donut JSON object
        localStorage.setItem('donut', JSON.stringify(donut));
    }
    else {
        // stores anything else
        localStorage.setItem(varName, data);
    }
    document.getElementById('store-success').innerHTML = "Successfully stored " + varName + '!';
}

function pullFromStorage(element_id, varName) {
    if (varName === 'donut') {
        // parses donut and yanks from storage
        parseDonut('donut');
    }
    else
        // yanks anything else from storage
        document.getElementById(element_id).innerHTML = localStorage.getItem(varName);
}

function parseDonut(varName) {
    // parse the object
    var donut_obj = JSON.parse(localStorage.getItem(varName));

    document.getElementById("display-donut").innerHTML += 'ID: ' + donut_obj['id'] + '<br>';
    document.getElementById("display-donut").innerHTML += 'Type: ' + donut_obj['type'] + '<br>';
    document.getElementById("display-donut").innerHTML += 'Name: ' + donut_obj['name'] + '<br>';
    document.getElementById("display-donut").innerHTML += 'PPU: ' + donut_obj['ppu'];

    // display batters
    document.getElementById("display-donut").innerHTML += '<p></p><b>Batter choices:</b><br>';
    for (var i = 0; i < donut_obj['batters']['batter'].length; i++) {
        document.getElementById("display-donut").innerHTML += donut_obj['batters']['batter'][i]['type'] + '<br>';
    }

    // display toppings
    document.getElementById("display-donut").innerHTML += '<p></p><b>Topping Choices:</b><br>';
    for (var j = 0; j < donut_obj['topping'].length; j++) {
        document.getElementById("display-donut").innerHTML += donut_obj['topping'][j]['type'] + '<br>';
    }
}