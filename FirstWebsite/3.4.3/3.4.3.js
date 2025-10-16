/*

    Info FRÅN SID 373 och 379 i kursboken 

*/

let button = document.getElementById("butts");

button.addEventListener("click", function(){       //listens for buttonclick

    const xhr = new XMLHttpRequest();               //creating a new XMLHttpRequest object

    xhr.onload = function(){                        //function runs when server has responded
        if(xhr.status === 200){                     //check if status code is 200 = OK
            document.getElementById("results").innerHTML = xhr.responseText;    //writes servers response into div
        
        }
    }

    xhr.open("GET", "https://people.dsv.su.se/~pierre/i/05_ass/ip3/3/3.4/3.4.3/example.php?number1=567&number2=488", true); 
    //prepares GET request to server to the specific URL with the data "number1=567&number2=488"

    xhr.send();     //sends request to server
})