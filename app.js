$(document).ready(function(){

// - Download the exercise files.
// - Alter the stylesheet to hide the contents of the page initially. When the page is loaded, fade in the contents slowly.
	$("body").fadeIn(1000);
// - Give each paragraph a yellow background only when the mouse is over it.


	// ------worked, not exactly------
	// $(".speech").hover(
	//   	function() {
	//     $( this ).addClass("highlight");
	//   }, function() {
	//     $( this ).removeClass("highlight");
	//   }
	// );
	$("p").on("mouseenter", function(){
		$(this).css("background-color", "yellow");
	});
	$("p").on("mouseleave", function(){
		$(this).css("background-color", "white");
	});
	// ----this also works-----
	// $("p").on("mouseleave", function(){
	// 	$(this).removeAttr();
	// });



	// ----custom animation-----
	// - Set up a click event on every `<h2>` element that simultaneously fades it to 25 percent opacity while growing its left-hand margin to 20px. Then, when this animation is complete, fade the speech text to 50 percent opacity.
		// $("h2").on("click", function(){
		// 	$("h2").addClass("highlight");
		// });
	$("h2").on("click", function(){
		$(this).animate({
		    "margin-left":"20px",
		    "opacity":"0.25"
		}, 600, "swing", function() {
		});
	});
		// $(this).css("opacity","0.25");
	// });	
	// $("h2").stop();
	//  $("h2").addClass("opacity");	
	// $("document").on("click", function()




// - **Bonus:** Make the style switcher work.

// - **Challenge:** React to presses of the arrow keys by smoothly moving the switcher box 20 pixels in the corresponding direction. The key codes for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).

});