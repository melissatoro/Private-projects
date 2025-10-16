/*3.1.3 exists of 4 programs */

//START PART 1 - Manipulate HTML ELEMENTS

let out = document.getElementById("output");
out.id = "newID";                               //Change an attribute (id name)

let empty = document.querySelector(".emptyOut");
empty.textContent = "Hello there";              //Adding content to a <p> element
empty.remove();                                 //Removing the HTML element

let text = document.querySelector(".textOut").textContent;        //Retrieves the string from the .textOut class element
let textObject = document.querySelector(".textOut");

textObject.classList.add("newClass");                             //Adding a new class 
textObject.classList.remove("newClass");                          //Removing a class 

//END PART 1 - Manipulate HTML ELEMENTS

//START PART 2 - Write the coordinates for click

let button = document.getElementById('coordinateButton');       //Declaring variables 
let coordinates = document.getElementById('coordinates');       //

button.addEventListener('click', function(event){           //When clicking the button, display the X and Y coordinates for the click
    coordinates.textContent= 'The coordinates for your click was ' + event.screenX + ' and ' + event.screenY;
})

button.addEventListener('mouseover', function(){            //When keeping mouse over button, change text to "But should you?"
    button.textContent='But should you?';
})

button.addEventListener('mouseout', function() {            //When moving the mouse from the button, change back the text to "Click on me!"
    button.textContent = 'Click on me!';
});

//END PART 2 - Write the coordinates for click

//START PART 3 - Submit and prevent event

let submitText = document.getElementById('submitText');

submitEvent.addEventListener('submit', function(event){                 //Does function when clicking submit
    event.preventDefault();                                             //(Submit automatically reloads the page to show the response from the server)
                                                                        //Prevents the page from reloading
    submitText.textContent = 'Thank you for your submission, have a nice day!'      //Writes the text after submitting
})

//END PART 3 - Submit and prevent event



//START PART 5  - Form event

window.addEventListener('scroll', function () {                 
        console.log('Scrolled!');                               //Display "Scrolled!! on console when scrolling
    })

//END PART 5 - Form event


//START PART 4 - keyboard event keyup

let keyEvent = document.getElementById('keyEvent');

window.addEventListener('keydown', function(event){                      //Function is executed when a key is pressed down
    if(event.key== '5')                                                
    keyEvent.textContent = "You pressed number 5, nice!"                 //if 5 on keyboard is pressed down it will display "You pressed number 5, nice!"
})

//END PART 4 - keyboard event keyup





