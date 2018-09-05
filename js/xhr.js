// ***********************************
// Call REST API to retrieve coin info
// ***********************************

function getCoinInfo() {
    var Request = require("request");

    Request.get("https://api.egem.io/api/v1/egem_prices", (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
    });
};

 /*   var xhr = new XMLHttpRequest();
    var url = 'https://api.egem.io/api/v1/egem_prices';

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var arr = JSON.parse(this.responseText);
            parsedResponse(arr);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

    function parsedResponse(arr) {
        var out = "";
        var i;
        for (i = 0; i < arr.length; i++) {
            out += 'arr[i]' + arr[i].display;
        }
        document.getElementsByClassName('block-height').innerHTML = out;
        document.getElementsByClassName('total-egem-supply').innerHTML = out;
        document.getElementsByClassName('market-cap-usd').innerHTML = out;
        document.getElementsByClassName('average-usd').innerHTML = out;
    };
    try {
        // Compliant browsers
        xhr = new XMLHttpRequest();
    }
    catch (e) {
        try {
            // IE7+
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            // AJAX is not supported
            console.log("AJAX is not supported. Please upgrade your browser!");
        };
    };
};

/*
var request = require('request');
request('https://api.egem.io/api/v1/nodes', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    for (const users of JSON.parse(body)['node_data']) {
        console.log(users.data);
    }
});
*/