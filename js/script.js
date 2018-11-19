$(document).ready(function() {


    /* $("p").click(function(){
        //$("p").slideToggle("slow"); //The paragraph would dissapear and you wil have no possibility to get it back
        $("this").slideToggle("slow"); //Now the user can make dissapear only the paragraph that they clicked on
        
    })*/ //still not what we are looking for. Now we will add Buttons

    $("button").mouseenter(function() {
        $(this).removeClass("makeGreen").addClass("makeBlue");
    });

    $("button").mouseleave(function() {
        $(this).removeClass("makeBlue").addClass("makeGreen");
    });

    /*------------------------------Now we are working for the  9boxes example---*/
    /*
        $(".box").on("click",function(){
            var classNames = $(this).attr("class").split(" ");
            $("."+classNames[1]).css("background-color","green");
        });
        
    */
    /*What if we wanted only a certain class to change to red at any given time?*/

    $(".box").on("click", function() { 
        /*
         * When we click on an element that has
         * a 'card' class, this event will be fired.
         */
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "green") {
            // If this object is already green, turn it light blue
            $("." + className).css("background-color", "lightblue");
        }
        else {
            // Else turn all elements with a box class light blue
            // and then change the color of all elements
            // with the same class name as the clicked element
            // to green.
            $("." + boxClass).css("background-color", "green");
            $("." + className).css("background-color", "lightblue");
        }
    });
    
    /*-----codigo of the schoool, for an unknown reason mine does the contrary*/
    $(document).ready(function() {
    $(".box").on("click", function() {
    	/*
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
    	var boxClass = classNames[0];
    	var className = classNames[1];
    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
    		// If this object is already red, turn it black
    		$("." + className).css("background-color", "#000"); 
    	} else {
    		// Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
    		$("." + boxClass).css("background-color", "#000");
    		$("." + className).css("background-color", "red");
    	}
    });
})
});
