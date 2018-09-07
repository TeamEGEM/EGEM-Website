// Call REST API to retrieve coin info

function getCoinInfo() {
    var xhr = new XMLHttpRequest();
    var url = 'https://api.egem.io/api/v1/egem_prices';

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var coinResponse = JSON.parse(this.responseText);
            var blockHeight = coinResponse.BLOCK_HEIGHT.toFixed();
            var totalSupply = coinResponse.TOTAL_EGEM_SUPPLY.toFixed();
            var marketCap = coinResponse.MARKET_CAP_USD.toFixed(2);
            var averageUSD = coinResponse.AVERAGEUSD.toFixed(4);

            document.getElementById('block-height').innerHTML = blockHeight;
            document.getElementById('total-egem-supply').innerHTML = totalSupply;
            document.getElementById('market-cap-usd').innerHTML = marketCap;
            document.getElementById('average-usd').innerHTML = averageUSD;
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