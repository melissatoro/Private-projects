
//Program 1 

    //Hide,show and toggle methods

function hideElement(){             //Uses the hide() method to hide the <p> text
    $(".visability").hide();
}

function showElement(){             //Uses the hide() method to show the <p> text
    $(".visability").show();
}

function toggleElement(){           //Uses the toggle() method to hide/show the <p> text
    $(".visability").toggle();
}

    //Fade methods

function fadeinElement(){             //Uses the fadeIn() method to hide the <p> text
    $(".opacity").fadeIn();
}

function fadeoutElement(){             //Uses the fadeOut() method to show the <p> text
    $(".opacity").fadeOut();
}

function fadetoggleElement(){           //Uses the fadetoggle() method to hide/show the <p> text
    $(".opacity").fadeToggle();
}

function fadetoElement(){           //Uses the fadeTo() method to hide/show the <p> text
    $(".opacity").fadeTo("slow", 0.6);         //the <p> text fades to 60% opacity slowly (Från js&jquery kurslittteratur s.518)
}


//Program 2 

function animation() {
    $("#sharkImg").animate({                //Animates the image with id="sharkimg"
            opacity: 0.6,                   //lowers opacity to 60%
            paddingLeft: "+=100"            //moves the picture 100px to the left
        }, 2000, "linear", function() {     //Does all the animation in 2000ms, linear and afterwards the function() is called...
            $(this).fadeOut();              //...which fades out the image
        }
    );
}

