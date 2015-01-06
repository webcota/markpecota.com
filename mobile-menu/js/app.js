//Problem: looks bad in smaller browser widths
//Solution: make a dropdown menu

//Create a select and append to menu
var $select = $("<select></select>");



$("#menu").append($select);


//cycle over menu links
$("#menu a").each(function(){
	var $anchor = $(this);
	var $option = $("<option></option>");

	//option's value is the href of the link

	$option.val($anchor.attr("href"));

	//add selected option depending on current page
	if ($anchor.parent().hasClass("selected")) {
		$option.prop("selected", true);
	}

	//options text is the text of the link
	$option.text($anchor.text());

	//append option to select
	$select.append($option);
})


$select.change(function(){
	window.location = $select.val();
})






	// bind click to button to go to select's location

//modify CSS to hide links on small widths and show button and select
	//also hides select and button on larger widths and show's links



