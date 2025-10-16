

let imgOne = "bilderSlide/bild1.jpg";             //Images from Unsplash
let imgTwo = "bilderSlide/bild2.jpg";
let imgThree = "bilderSlide/bild3.jpg"

let slideshow = document.getElementById("slideshow");
let slideshowMouse = document.getElementById("slideshowMouse");

let images = [imgOne, imgTwo , imgThree];
let indexOne = 0;                                               
let indexTwo = 0;

 $("#slideshow").attr("src",images[indexOne]);                  //Start with the first image in the array [imgOne]
 $("#slideshowMouse").attr("src",images[indexTwo]);             //Start with the first image in the array [imgOne]


setInterval(function loopImages(){                          //the setInterval method loads automatically and runs the loopImages function
    indexOne++;
    
    if(indexOne>=images.length){
        indexOne=0;
    }

    $("#slideshow").attr("src",images[indexOne]);          //jQuery: selects element with id="slideshow", changes its src attribute to new indexOne
}, 2000);                                                  //runs the function every 2000 millisecond


slideshowMouse.addEventListener('mouseenter', function loopImages(){          //event listens for when user enters with mouse over img
    indexTwo++;
    
    if(indexTwo>=images.length){
        indexTwo=0;
    }

    $("#slideshowMouse").attr("src",images[indexTwo]);                       //JQuery: everytime the mouse enters element with id="slideshowMouse" it changes src attribute to new indexTwo
});



