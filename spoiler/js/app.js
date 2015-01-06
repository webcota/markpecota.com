// Prevent spoilerphobes from seeing spoilerphobes
// Solution: hide spoilers and reveal on click

//1. Hide spoilers'

$(".spoiler span").hide();

//2. add a button

$(".spoiler").append("<button>Reveal Spoiler!</button>");

//3. when button pressed


	$("button").click(function() {
	$(this).prev().show();

	$(this).remove();
});