// ***********************************
// Call REST API to retrieve coin info
// ***********************************

function getCoinInfo() {

    var xhr = new XMLHttpRequest();
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
        var out = "1";
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