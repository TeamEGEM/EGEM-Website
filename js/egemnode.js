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
    $('#faqimg').delay(2750).fadeIn(1000).fadeOut(500).fadeIn(1000).fadeOut(500).fadeIn(1000);
    $("#faqdiv").hide();
    $("#faqcme").hide();
    $("#faq").click(function(){
        $("#faqcme").slideToggle('fast');
        $("#faqome").slideToggle('fast');
        $("#faqdiv").slideToggle(3000);
    });
});
