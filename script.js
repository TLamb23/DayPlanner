

// //---define pointer variables----------//
var userInput = document.querySelector(".form-control");
var saveButton = document.querySelector(".saveBtn");

//----define moment varibles used to show time----//
var date = moment().format("MMM Do YY");
moment().format('LT');


// //-------append date----------//
$("#currentDay").append(date);
console.log(date);


// //---define any arrays/objs we need to create----------//

                                        


//---funcitons----------//

function renderUserContent() {
    var UserContent = localStorage.getItem("UserContent");
  
    if (userContent === null) {
      return;
    }
  
    userInput.textContent = UserContent;
  
  }

//---event listeners----------//

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var userContent = document.querySelector(".form-control").value;
      localStorage.setItem("userContent", userContent);
  
    });
  


// Next Steps :
//
// write a function to update the HTML input tag background depending on the time of day.
//
// store user input locally and be able to have that saved when the page is refreshed.

