function calculateSpeed(){
    //creating a new image object
    var image = new Image();
    var clickCount = 0;

    if(clickCount === 1) {
        location.reload();
        document.querySelector(".result").innerHTML = "";
        
        clickCount = 0;
    }

    //start the timer
    var startTime = new Date().getTime();

    //set the image source to a large image file:
    image.src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/%22On_Bicycles_Built_For_One.%22_Washington_D.C.%2C_June_30._The_Boy_Scout%27s_motto_of_%22do_a_good_turn_daily%22_was_well_observed_by_these_Flint%2C_Mich.%2C_scouts%2C_John_Kleinnheksel%2C_and_Dave_Matthews%2C_LCCN2016871930.jpg";

    //when the image finishes loading, stop the timer and calculate the speed.

    image.onload = function(){
        var endTime = new Date().getTime();
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = 1048576; //the size of the image in bits
        var speedbps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedbps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        
        var result = "Your internet speed is : " + speedMbps + "Mbps";
        setTimeout(function(){
            document.querySelector(".result").innerHTML =  result;
         }, 5000);
    }
    
}