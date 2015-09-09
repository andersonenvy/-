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

$("a.blank").attr("target","_blank");

// ----- End Document Ready Function ----- //
});
