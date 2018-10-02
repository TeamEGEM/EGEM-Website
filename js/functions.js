history.go(1)

// Scroll to top of page
$(document).ready(function () {
    $('.scrollTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 0);
        return false;
    });
});

// Fade in logo, and social media links
$(document).ready(function () {
    $('.egem-logo').delay(500).fadeIn(1000);
    $('.social-media').delay(750).fadeIn(1000);
    $('#prmapimg').delay(1750).fadeIn(1000).fadeOut(500).fadeIn(1000).fadeOut(500).fadeIn(1000);
    $("#rmapdiv").hide();
    $("#prcme").hide();
    $("#prmap").click(function(){
        $("#prcme").slideToggle('fast');
        $("#prome").slideToggle('fast');
        $("#rmapdiv").slideToggle(3000);
    });
});

// Show mobile nav when clicking on hamburger and hide when a link is selected
$(document).ready(function () {
    $('hamburger-menu').add('.mobile-nav').on('click', function () {
        $('.nav-menu').slideToggle(500);
    });
    $('hamburger-menu').add('.mobile-nav').on('tap', function () {
        $('.nav-menu').slideToggle(500);
    });
});

// Open new window
function popup(url) {
    var width = 950;
    var height = 450;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 3;
    var params = 'width=' + width + ', height=' + height;
    params += ', top=' + top + ', left=' + left;
    params += ', directories=no';
    params += ', location=yes';
    params += ', menubar=yes';
    params += ', resizable=yes';
    params += ', scrollbars=yes';
    params += ', status=yes';
    params += ', toolbar=yes';
    newwin = window.open(url, 'windowname5', params);
    if (window.focus) {
        newwin.focus()
    }
    return false;
}

// Mobile device detection
//function mobileHandler()
//{
//    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
//    {
//        // Some code...
//    }
//}

// iDevice handling function
function iDeviceHandler() {
    if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        document.getElementById('iDeviceMusic').style.display = "block";
        return true;
    }
    else {
        document.getElementById('FlashMusic').style.display = "block";
    }
}

// Div display functions
function hideContent(divId) {
    document.getElementById(divId).style.display = "none";
}

function showContent(divId) {
    document.getElementById(divId).style.display = "block";
}

function toggleDisplay(divId) {
    if (document.getElementById(divId).style.display == "none") {
        document.getElementById(divId).style.display = "block";
    }
    else {
        document.getElementById(divId).style.display = "none";
    }
}

// Sleep for a set amount of ms
function sleep(ms) {
    var currentTime = new Date().getTime();
    while (currentTime + ms >= new Date().getTime()) {
    }
}

// Change field input type to 'password'
function inputTypePassword(fieldId) {
    document.getElementById(fieldId).type = "password";
}

// Change field input type to 'text'
function inputTypeText(fieldId) {
    document.getElementById(fieldId).type = "text";
}

// Submit form if 'Enter' key is pressed
function submitOnEnter(formId) {
    if (event.keyCode == 13) {
        document.getElementById(formId).submit();
        return false;
    }
}

// Redirect to another page when element is clicked
function redirect(toPage) {
    window.location = toPage;
}

// Clear value of a field
function clearText(fieldId) {
    document.getElementById(fieldId).value = '';
}

// Toggle the value of a checkbox between 0 and 1
function toggleCheckValue(fieldId) {
    var currentVal = document.getElementById(fieldId).value;
    if (currentVal == "0") {
        document.getElementById(fieldId).value = "1";
    }
    else if (currentVal == "1") {
        document.getElementById(fieldId).value = "0";
    }
}

// Clear value of a field on focus
// Else restore the field value if nothing has been entered on blur
function clearValue(field) {
    var defaultVal = document.getElementById(field).defaultValue;
    var currentVal = document.getElementById(field).value;
    if (defaultVal == currentVal) {
        document.getElementById(field).value = '';
    }
    else if (currentVal == '') {
        document.getElementById(field).value = defaultVal;
    }
}

// Returns the browser name to the specified element
function getBrowserName(element) {
    browserName = navigator.appName;
    // Check for IE
    if (navigator.userAgent.search("MSIE") >= 0) {
        browserName = "IE";
    }
    // Check for Chrome
    else if (navigator.userAgent.search("Chrome") >= 0) {
        browserName = "Chrome";
    }
    // Check for Firefox
    else if (navigator.userAgent.search("Firefox") >= 0) {
        browserName = "Firefox";
    }
    // Check for Safari
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        browserName = "Safari";
    }
    // Check for Opera
    else if (navigator.userAgent.search("Opera") >= 0) {
        browserName = "Opera";
    }
    // Browser is Other
    else {
        browserName = "Other";
    }
    document.getElementById(element).value = browserName;
}

// Returns the current time to the specified element in 24 hour format
function getTime(element) {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = ("0" + minutes);
    }
    currentTime = (hours + ":" + minutes);
    document.getElementById(element).value = currentTime;
}

// Returns the current date to the specified element
function getDate(element) {
    var currentDate = new Date();
    var month = (currentDate.getMonth() + 1);
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    if (month < 10) {
        month = ("0" + month);
    }
    if (day < 10) {
        day = ("0" + day)
    }
    currentDate = (month + "/" + day + "/" + year);
    document.getElementById(element).value = currentDate;
}

// Adds 0 in front of single digits in time and date strings
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}

// Formats the time into hh:mm
function formatTime(timeStr) {
    var parts = timeStr.split(":");
    parts[0] = pad(parts[0], 2);
    parts[1] = pad(parts[1], 2);
    timeStr = parts.join(":");
    return timeStr;
}

// Formats the date into mm/dd/yyyy
function formatDate(dateStr) {
    var parts = dateStr.split("/");
    parts[0] = pad(parts[0], 2);
    parts[1] = pad(parts[1], 2);
    dateStr = parts.join("/");
    return dateStr;
}
