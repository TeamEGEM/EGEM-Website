// Call REST API to retrieve coin info

// Currency & Number Formatting
var l10nEN = new Intl.NumberFormat("en-US")
var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" })
var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" })

function getCoinInfo() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.egem.io/api/v1/egem_prices';

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var coinResponse = JSON.parse(this.responseText);
            var blockHeight = parseFloat(coinResponse.BLOCK_HEIGHT).toFixed();
            var totalSupply = parseFloat(coinResponse.TOTAL_EGEM_SUPPLY).toFixed();
            var marketCap = parseFloat(coinResponse.MARKET_CAP_USD).toFixed(2);
            var averageUSD = parseFloat(coinResponse.AVERAGEUSD).toFixed(4);

            document.getElementById('block-height').innerHTML = l10nEN.format(blockHeight);
            document.getElementById('total-egem-supply').innerHTML = l10nEN.format(totalSupply);
            document.getElementById('market-cap-usd').innerHTML = l10nUSD.format(marketCap);
            document.getElementById('average-usd').innerHTML = l10nUSD.format(averageUSD);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

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
            alert('AJAX is not supported. Please upgrade your browser!');
        };
    };
};

// Get node info
function getNodeInfo() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.egem.io/api/v1/nodes';

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var coinResponse2 = JSON.parse(this.responseText);
            var nodesOnline1 = parseFloat(coinResponse2['settings'][0]['data']['nodesOnline']);
            var nodesOnline2 = parseFloat(coinResponse2['settings'][0]['data']['nodesOnline2']);
            var nodesEGEMLocked = parseFloat(coinResponse2['settings'][0]['data']['totalLocked']);
            var nodesOnlineTotal = parseFloat(coinResponse2['settings'][0]['data']['nodesOnline'] + coinResponse2['settings'][0]['data']['nodesOnline2']);
            // var i, x = "";
            // for (i in coinResponse2['node_data']) {
            //   if (coinResponse2['node_data'][i]['data']['geo1'] !== null) {
            //     x += "{latLng: [" +coinResponse2['node_data'][i]['data']['geo1'] + "], name: 'Quarrynode #1', style: {r: 8, fill: '#4286f4'}},";
            //   }
            // }
            // document.getElementById("the-nodes").innerHTML = x;
            document.getElementById('nodes-online1').innerHTML = nodesOnline1;
            document.getElementById('nodes-online2').innerHTML = nodesOnline2;
            document.getElementById('nodes-egem-locked').innerHTML = l10nEN.format(nodesEGEMLocked);
            document.getElementById('nodes-online-total').innerHTML = nodesOnlineTotal;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();

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
            alert('AJAX is not supported. Please upgrade your browser!');
        };
    };
};
