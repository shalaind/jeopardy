
// Get the modal
var modal = document.getElementById('quesModal');

// Get the button that opens the modal
//change this to each ques button 
// var quesBtn = document.getElementById("quesBtn");

var quesBtn = document.getElementsByClassName("gameRow")[1];


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
quesBtn.onclick = function() {
  modal.style.display = "block";
  //set timer to close modal when time runs out 
  setTimeout(function(){ modal.style.display = "none"; }, 3000);

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

//class contructor will get given the following arguments
//question with answer choices and correct answer
//position of question on gameboard using class index 
class questions {
    constructor(question, answers, points, rightanswer, index){
        this.question = question
        this.answers = answers
        this.rightanswer = rightanswer
        this.points = points
        this.index = index
    }

    showQuestion(){
        //show users pop out modal 
        quesBtn.onclick 
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