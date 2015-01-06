//When clicking on image, goes to a dead end
//create a light box

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>")
var $caption = $("<p></p>")

$overlay.append($image);

$overlay.append($caption);

  $("body").append($overlay);
  

//1. capture a click event on a <a> to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var theImage = $(this).attr("href");
  $image.attr("src", theImage);

  $overlay.show();

  var $addCaption = $(this).children("img").attr("alt");

  $($caption).text($addCaption);

});



  //1.2 update overlay with the image linked in the link

  

  //1.3 added the alt attribute as a caption

  //show the overlay
  


  //2.1 an image

  //2.2 a caption

//3 when overlay is clicked

$overlay.click(function(){
  $(this).hide();

})


  //3.1 hide the overlay