//////////////////
//OPEN THE MODAL//
//////////////////


var modal = document.getElementById('quesModal');
let timerCount = 0 ;
let timerText = document.getElementById('timer')
let questionObj = {};
let myPoints = 0; 
let scoreDisplay1 = document.getElementById('player1Score')

// When the user clicks on the button, open the modal 
$('.boardQues').on('click', function(eventObject){
    //Set the Data for the Question inside the Modal
    let category = eventObject.target.className;
    category = category.replace('boardQues ','');

    let dollarValue = eventObject.target.innerText;

    assignQandA(category, dollarValue); 
    startTimer();

    console.log(eventObject.target.innerText, 'event InnerText');
    console.log(eventObject.target.className)
    modal.style.display = "block";
});

// close the modal from X 
$('.close').on('click', function(){
    //Stop The Timer
    clearInterval(timerCount)

    //Close the Question Window
    modal.style.display = "none";
});
   

function startTimer() {
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

let questionText = document.getElementById('questionText');
let ansChoice1 = document.getElementById('ansChoice1');
let ansChoice2 = document.getElementById('ansChoice2');
let ansChoice3 = document.getElementById('ansChoice3');
let ansChoice4 = document.getElementById('ansChoice4');

let inputChoice1 = document.getElementById('inputChoice1');
let inputChoice2 = document.getElementById('inputChoice2');
let inputChoice3 = document.getElementById('inputChoice3');
let inputChoice4 = document.getElementById('inputChoice4');

function assignQandA(category, dollarValue){
    //Remove Any $ from dollarValue
    dollarValue = dollarValue.replace('$','');
    
    for(i = 0; i <= gameData.length-1; i++){
        if (gameData[i].category== category) {
            console.log(dollarValue)


            //Now we have the right category loop to the right dollar value
            questions = gameData[i].questions;
            for(y=0; y <= questions.length -1; y++){
                if(questions[y].dollarvalue == dollarValue){

                    questionObj = questions[y];
                }
            }
        }
    }

    
    //when button is clicked 
    //display this.questions and this.answers 

    //grab divs with answers and questions and change content based on argument input 
    
    //question Text
    
    questionText.innerHTML = questionObj.questiontext;

    //answer1
    
    ansChoice1.innerHTML = questionObj.choices[0].text
    inputChoice1.value = questionObj.choices[0].text

    //answer2
    
    ansChoice2.innerHTML = questionObj.choices[1].text
    inputChoice2.value = questionObj.choices[1].text

    //answer3
    
    ansChoice3.innerHTML = questionObj.choices[2].text
    inputChoice3.value = questionObj.choices[2].text

    //answer4 
    
    ansChoice4.innerHTML = questionObj.choices[3].text
    inputChoice4.value = questionObj.choices[3].text

}


///////////////////////
//CHECK USER'S ANSWER//
///////////////////////



$('#submitBtn').on('click', submitBtn);

function submitBtn(){
    var inputChoices = document.getElementsByName("choice");
    // var checked = false; 
    var userAnswer; 
    
    for(let i = 0; i < inputChoices.length; i++){
        if(inputChoices[i].checked){
            // checked = true; 
            userAnswer = inputChoices[i].value
        }

        if(userAnswer == questionObj.rightchoice){
            //show correct answer screen
            //add points
            
            myPoints += questionObj.dollarvalue;

            scoreDisplay1.innerHTML = myPoints; 

            console.log(userAnswer) 

            console.log(myPoints)
            
            // break
        }
        // else {
        //     myPoints -= questionObj.dollarvalue;
        // }
       
    }

    //Stop The Timer
    clearInterval(timerCount)

    //Close the Question Window
    modal.style.display = "none";
    
}


var gameData = [
 {
    category: 'category1',
    questions: [
        {
            questiontext: 'This is the capital of Mexico',
            rightchoice: 'Choice 2',
            dollarvalue: 100,
            choices: [
                {
                    id: 0,
                    text: "Choice 1"
                },
                {
                    id: 1,
                    text: "Choice 2"
                }
                ,
                {
                    id: 2,
                    text: "Choice 3"
                },
                {
                    id: 3,
                    text: "Choice 4"
                }

            ]
        },
        {
            questiontext: 'This is my second question',
            rightchoice: 'Choice 2',
            dollarvalue: 200,
            choices: [
                {
                    id: 0,
                    text: "Choice 1"
                },
                {
                    id: 1,
                    text: "Choice 2"
                }
                ,
                {
                    id: 2,
                    text: "Choice 3"
                },
                {
                    id: 3,
                    text: "Choice 4"
                }

            ]
        },
        {
            questiontext: 'This is my third question',
            rightchoice: 'Choice 2',
            dollarvalue: 300,
            choices: [
                {
                    id: 0,
                    text: "Choice 1"
                },
                {
                    id: 1,
                    text: "Choice 2"
                }
                ,
                {
                    id: 2,
                    text: "Choice 3"
                },
                {
                    id: 3,
                    text: "Choice 4"
                }

            ]
        },
        {
            questiontext: 'This is my fourth question',
            rightchoice: 'Choice 2',
            dollarvalue: 400,
            choices: [
                {
                    id: 0,
                    text: "Choice 1"
                },
                {
                    id: 1,
                    text: "Choice 2"
                }
                ,
                {
                    id: 2,
                    text: "Choice 3"
                },
                {
                    id: 3,
                    text: "Choice 4"
                }

            ]
        },
        {
            questiontext: 'This is my fifth question',
            rightchoice: 'Choice 2',
            dollarvalue: 500,
            choices: [
                {
                    id: 0,
                    text: "Choice 1"
                },
                {
                    id: 1,
                    text: "Choice 2"
                }
                ,
                {
                    id: 2,
                    text: "Choice 3"
                },
                {
                    id: 3,
                    text: "Choice 4"
                }

            ]
        }
    ]
}]



