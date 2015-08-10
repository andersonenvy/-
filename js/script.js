// JavaScript Document
// All scripts by Kenneth Anderson: www.andersonenvy.com

// Start JQuery

$(document).ready(function(){

// ----- Do Stuff ----- //

$('body').addClass('JQueryOn');

//Detect Mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
$("body").addClass("isMobile"); 
}
else {
	$("body").addClass("notMobile");
}

//Preload
/*
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
*/
// Usage:

//$(['','']).preload();

//$(".blank a[href^='http://']").attr("target","_blank");

// ----- End Document Ready Function ----- //
});
