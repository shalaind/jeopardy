
class questions {
    constructor(question, answers, points, rightanswer){
        this.question = question
        this.answers = answers
        this.rightanswer = rightanswer
        this.points = points
    }

    showQuestion(){
        //show users pop out modal 
        //display question and answers 
        //grab users answer
        //if time runs out, say times up and close modal, subtract points
    }

    checkAnswer(){
        //compare user answer to correct answer 
        //if users answer is the same as correct answer
        //show the you got it right screen
        //add correct points to current score
        //if false show wrong answer screen
        //and deduct points 
    }

    hideQuestion(){
        //make bo =x 
    }

}


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






// class questions {
//         question1 = "what is so and so"
//         answers = ["one","two","three","four"]
//         correctanswer = ["one"]
//         points = 100
//     }

//     showModal(){
//         //
//         //

//         //show users pop out modal 
//         //display question and answers 
//         //grab users answer
//         //if time runs out, say times up and close modal, subtract points
//     }

//     checkAnswer(){
//         //compare user answer to correct answer 
//         //if users answer is the same as correct answer
//         //show the you got it right screen
//         //add correct points to current score
//         //if false show wrong answer screen
//         //and deduct points 
//     }

//     hideQuestion(){
//         //make bo =x 
//     }

    

// }



// add event listerner (onclick, catONe100.showmodal())
// add event listerner (onclick, catONe100.showmodal())