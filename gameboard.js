var modal = document.getElementById('quesModal');
let timerCount = 0 ;
let timerText = document.getElementById('timer')

// When the user clicks on the button, open the modal 
$('.boardQues').on('click', function(){
    openModal();
    modal.style.display = "block";
});

// close the modal from X 
$('.close').on('click', function(){
    //Stop The Timer
    clearInterval(timerCount)

    //Close the Question Window
    modal.style.display = "none";
});
   

function openModal() {
//init timer countdown 
   
    var i = 11; 
    timerCount = setInterval(countDown, 1000);

    function countDown (){
        i--;
        //this.timer = document.getElementById('timer')
        timerText.innerHTML = i; 

        if (i == 0){
        //play buzzer sound 
        let buzzer = new Audio ('sounds/timesup.mp3')
        buzzer.play(); 
        
        //stop counter 
        clearInterval(timerCount);
       
         modal.style.display = "none";
        }
        //next, show times up screen and subtract points from score 
    }

}

//display question and answer choice parameters inside the modal//


function showQandA(question, answers){
    //when button is clicked 
    //display this.questions and this.answers 

    //grab divs with answers and questions and change content based on argument input 

    //question Text
    let questionText = document.getElementById('questionText');

    questionText.innerHTML = question; 

    //answer1
    let ansChoice1 = document.getElementById('ansChoice1');
    
    ansChoice1.innerHTML = answers[0];
    ansChoice1.value = answers[0];

    //answer2
    let ansChoice2 = document.getElementById('ansChoice2');
    
    ansChoice2.innerHTML = answers[1];
    ansChoice2.value = answers[1];

    //answer3
    let ansChoice3 = document.getElementById('ansChoice3');
    
    ansChoice3.innerHTML = answers[2];
    ansChoice3.value = answers[2];

    //answer4 
    let ansChoice4 = document.getElementById('ansChoice4');
    
    ansChoice4.innerHTML = answers[3];
    ansChoice4.value = answers[3];

}

let input = document.getElementsByName("choice");

console.log(input)



showQandA("This is your question and the text goes here", ["answer1", "answer2", "answer3", "answer4"])



//determine what the correct answer is 

function checkUserAnswer(rightAnswer){
    //grab users answer? 


    if (userAnswer == rightAnswer){
        //display right answer screen
        //add points to score 
    }

}

//class contructor will get given the following arguments
//question with answer choices and correct answer
//position of question on gameboard using class index 
class questions {
    constructor(question, answers, points, rightanswer, category){
        this.question = question
        this.answers = answers
        this.rightanswer = rightanswer
        this.points = points
        this.category = category
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
        //make box 
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