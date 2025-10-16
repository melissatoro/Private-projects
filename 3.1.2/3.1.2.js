

//START: Part 1 - Hello, greet name prompt         Window methods() (alert, confirm, prompt, open, close)
   let namePopup = window.open("","namePopup", "width=200, height=100, resizable=yes");     // Opens the window
   let contPrompt = window.confirm("Are you sure you want to continue?");                   // The window shows the message


    if(contPrompt){                                                                         // If the user chooses OK = true
        let promptName = window.prompt("What is your name?");                               // The prompt asks for input
        if(promptName != null && promptName != ""){                                         // If the input is NOT null or an empty string ("")....
            window.alert("Hello " + promptName + ", hope you are doing well!");             // ....the message is written
        }                                                                                   
    }
        namePopup.close();                                                                  // ....otherwise the window closes

//END: Part 1 - Hello, greet name prompt




//START: Part 2 -  setInterval, clearInterval, setTimeout, clearTimeout

//START: Part 2.1 - timer countdowm 

    function startCountdown(){
        let x = 20;
        let numberCount = document.getElementById("numbers"); 
        let interval = setInterval(function() {
            if(x<0){
                clearInterval(interval);
            } else{
                numberCount.innerHTML = x;
                x--;
            }
        },500);
    }    

//END: Part 2.1 - timer countdown

//START: Part 2.2 - present a message after 2 sec
    
    function supriseMessage(){
        document.getElementById("message").textContent = "You are doing amazing, keep fighting!";
    }
    function cancelMessage(){
        clearTimeout(showMessage);
    }

    function startSuprise(){
    showMessage = setTimeout(supriseMessage, 1000);
    }

//END: Part 2.2 - present a message after 2 sec


      
   
   

  
   





