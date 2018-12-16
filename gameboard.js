var modal = document.getElementById('quesModal');
var quesBtn = document.getElementsByClassName("gameRow")[1];
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
quesBtn.onclick = function() {
    //display modal 
    modal.style.display = "block";

// close the modal from X 
    span.onclick = function() {
    modal.style.display = "none";
    }

// close modal when clicking outside of box 
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }

//init timer countdown 
    let timer = document.getElementById('timer')
    var i = 10; 
    let timerCount = setInterval(countDown, 1000);

    function countDown (){
        i--;
        timer.innerHTML = i; 

        if (i == 0){
        //play buzzer sound 
        let buzzer = new Audio ('sounds/timesup.mp3')
        buzzer.play(); 
        
        //stop counter 
        clearInterval(timerCount)
        console.log("it stopped")

        }
    }

    //set timer to close modal when time runs out 
    setTimeout(function(){ modal.style.display = "none"; }, 10000);

}

//next, show times up screen and subtract points from score 


//display question and answer choice parameters inside the modal//


function showQandA(question, answers){
    //when button is clicked 
    //display this.questions and this.answers 

    //grab divs with answers and questions 

    //question Text
    let questionText = document.getElementById('questionText');

    //answer1
    let answer1 = document.getElementById('answer1');

    //answer2
    let answer2 = document.getElementById('answer2');

    //answer3
    let answer3 = document.getElementById('answer3');

    //answer4 
    let answer4 = document.getElementById('answer4');

    //change innerHTML to parameters 

    questionText.innerHTML = question; 

    answer1.innerHTML = answers[0]

    answer2.innerHTML = answers[1]

    answer3.innerHTML = answers[2]

    answer4.innerHTML = answers[3]

}

showQandA("This is your question and the text goes here", ["answer 1", "answer2", "answer3", "answer4"])


//determine what the correct answer is 

function correctAnswer(){
    
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
        ////////////////////////////
        //show users pop out modal//
        ////////////////////////////

       


        /////////////////////////////////
        //display question and answers///
        /////////////////////////////////


        //grab users answer
        
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