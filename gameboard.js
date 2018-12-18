//////////////////
//OPEN THE MODAL//
//////////////////


var modal = document.getElementById('quesModal');
let timerCount = 0 ;
let timerText = document.getElementById('timer')
let questionObj = {};
let myPoints = 0; 
let scoreDisplay1 = document.getElementById('player1Score')
let checkCounter = 0; 

var aimImg = document.createElement("aimImg");
 
aimImg.src = "images/aim-screen.jpg";
modal.appendChild(aimImg);

console.log(aimImg.src)



// When the user clicks on the button, open the modal 
$('.boardQues').on('click', function(eventObject){
    console.log(eventObject)
    //Set the Data for the Question inside the Modal
    let category = eventObject.target.className;
    category = category.replace('boardQues ','');

    let dollarValue = eventObject.target.innerText;

   //adding class of disabled to remove question from board once clicked 
    eventObject.target.className = "boardQues " + category + " disabled";

    //gameover screen 

    // if (){
    //     swal ( "Game Over!" ,  "You earned " + questionObj.dollarvalue + " points" )
    
    // }



    checkCounter++; 

    console.log(checkCounter)
    assignQandA(category, dollarValue); 
    startTimer();

    console.log(eventObject.target.innerText, 'event InnerText');
    console.log(eventObject.target.className)
    modal.style.display = "block";
});


//for loop to end game 



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
        modal.style.display = "none";
        swal ( "Times Up!" ,  "You lose " + questionObj.dollarvalue + " points" )
        
        //stop counter 
        clearInterval(timerCount);
        }
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
    var userAnswer; 
    
    for(let i = 0; i < inputChoices.length; i++){
        if(inputChoices[i].checked){
            userAnswer = inputChoices[i].value
            console.log(userAnswer) 
            break;
        }
    }

    if(userAnswer == questionObj.rightchoice){
     //show correct answer screen
        myPoints += questionObj.dollarvalue;
        scoreDisplay1.innerHTML ="score: " + myPoints; 

        //Stop The Timer
        clearInterval(timerCount)
    
        //Close the Question Window
        modal.style.display = "none";
           //Stop The Timer
        clearInterval(timerCount)
    
        //Close the Question Window
        modal.style.display = "none";
        let correctAnswerSound = new Audio ('sounds/correctAnswer.mp3')
        correctAnswerSound.play(); 
        swal ( "You got it right!" ,  "You earned " + questionObj.dollarvalue + " points" )

    }

    else if (userAnswer != questionObj.rightchoice){
        myPoints -= questionObj.dollarvalue;
        scoreDisplay1.innerHTML = "score: " + myPoints; 


        
        //Stop The Timer
           clearInterval(timerCount)
    
        //Close the Question Window
           modal.style.display = "none";
            //play wrong answer sound 
            let wrongAnswerSound = new Audio ('sounds/wrongAnswer.mp3')
            wrongAnswerSound.play(); 
         
           swal ( "You're wrong!" ,  "You lose " + questionObj.dollarvalue + " points" )
    }


    // if(checkCounter == 3){
    //     console.log("it worked")
    //     modal.style.display = "block";

    //     // swal ( "Times Up!" ,  "You lose " + questionObj.dollarvalue + " points" )
    //     console.log("sweet alert worked too")
    // }
       
}

//game over screen

//when all boardques classes == disabled



//alert game over show final score 

//for loop run through all divs 

//when all classNames == disabled

//show alert 


////////////////////
//GAME INFORMATION//
////////////////////

var gameData = [
 {
    category: 'category1',
    questions: [
        {
            questiontext: 'Your best friend would be upset if they were not in your ______ on Myspace  ',
            rightchoice: 'Top 8',
            dollarvalue: 100,
            choices: [
                {
                    id: 0,
                    text: "Top 8"
                },
                {
                    id: 1,
                    text: "Friend's List"
                }
                ,
                {
                    id: 2,
                    text: "Top Friend's"
                },
                {
                    id: 3,
                    text: "Top Group"
                }

            ]
        },
        {
            questiontext: "This computer application, notoriously known for giving your computer a virus, was used to download music" ,
            rightchoice: 'Limewire',
            dollarvalue: 200,
            choices: [
                {
                    id: 0,
                    text: "Limewire"
                },
                {
                    id: 1,
                    text: "Highwire"
                }
                ,
                {
                    id: 2,
                    text: "Itunes"
                },
                {
                    id: 3,
                    text: "Musicshare"
                }

            ]
        },
        {
            questiontext: 'The style of texting that requires you to press a number key to get to a designated letter',
            rightchoice: 'T9',
            dollarvalue: 300,
            choices: [
                {
                    id: 0,
                    text: "Number Text"
                },
                {
                    id: 1,
                    text: "T9"
                }
                ,
                {
                    id: 2,
                    text: "2 Way"
                },
                {
                    id: 3,
                    text: "Emoticons"
                }

            ]
        },
        {
            questiontext: 'This popular instant messaging app featured a running man logo',
            rightchoice: 'AIM',
            dollarvalue: 400,
            choices: [
                {
                    id: 0,
                    text: "AIM"
                },
                {
                    id: 1,
                    text: "Myspace"
                }
                ,
                {
                    id: 2,
                    text: "AOL Mail"
                },
                {
                    id: 3,
                    text: "Facebook"
                }

            ]
        },
        {
            questiontext: ":-)  :-(  :-| <br> These character based facial expressions were called _____.",
            rightchoice: 'Emoticons',
            dollarvalue: 500,
            choices: [
                {
                    id: 0,
                    text: "Emoticons"
                },
                {
                    id: 1,
                    text: "Emojis"
                }
                ,
                {
                    id: 2,
                    text: "Text Faces"
                },
                {
                    id: 3,
                    text: "Emotion Icons"
                }

            ]
        }
    ]
},

{
category: 'category2',
    questions: [
        {
            questiontext: "From the C-O to across the seas, I'm guaranteed to everybody bounce with me",
            rightchoice: 'Choice 2',
            dollarvalue: 100,
            choices: [
                {
                    id: 0,
                    text: "Bounce With Me"
                },
                {
                    id: 1,
                    text: "The Block is Hot"
                }
                ,
                {
                    id: 2,
                    text: "Take Ya Home"
                },
                {
                    id: 3,
                    text: "No Scrubs"
                }

            ]
        },
        {
            questiontext: "Yea you like my outfit don't even fake the deal, I thought you said you had ya girl on the light bill",
            rightchoice: 'Chickenhead',
            dollarvalue: 200,
            choices: [
                {
                    id: 0,
                    text: "On & On"
                },
                {
                    id: 1,
                    text: "Still Fly"
                }
                ,
                {
                    id: 2,
                    text: "Chickenhead"
                },
                {
                    id: 3,
                    text: "Soldier"
                }

            ]
        },
        {
            questiontext: 'Give me what you got for a pork chop, She threw at me like I was a short stop',
            rightchoice: 'Right Thurr',
            dollarvalue: 300,
            choices: [
                {
                    id: 0,
                    text: "Holidae Inn"
                },
                {
                    id: 1,
                    text: "Right Thurr"
                }
                ,
                {
                    id: 2,
                    text: "I Like That"
                },
                {
                    id: 3,
                    text: "In Da Club"
                }

            ]
        },
        {
            questiontext: 'If you a fly gal, get your nails done, Get a pedicure, get your hair did',
            rightchoice: 'Work It',
            dollarvalue: 400,
            choices: [
                {
                    id: 0,
                    text: "Work It"
                },
                {
                    id: 1,
                    text: "Fly Gal"
                }
                ,
                {
                    id: 2,
                    text: "The Rain"
                },
                {
                    id: 3,
                    text: "Lose Control"
                }

            ]
        },
        {
            questiontext: 'I ain’t tryin’ to beef, I’m tryin’ to get my drink on, and my diamonds, my fitted, and my mink on',
            rightchoice: 'Just a Lil Bit',
            dollarvalue: 500,
            choices: [
                {
                    id: 0,
                    text: "Stunt 101"
                },
                {
                    id: 1,
                    text: "Smile"
                }
                ,
                {
                    id: 2,
                    text: "Just a Lil Bit"
                },
                {
                    id: 3,
                    text: "My Buddy"
                }

            ]
        }
    ]
}, 

{
category: 'category3',
    questions: [
        {
            questiontext: 'Everybody hates this person',
            rightchoice: 'Chris',
            dollarvalue: 100,
            choices: [
                {
                    id: 0,
                    text: "Chris"
                },
                {
                    id: 1,
                    text: "Drew"
                }
                ,
                {
                    id: 2,
                    text: "Kevin"
                },
                {
                    id: 3,
                    text: "Kenya"
                }

            ]
        },
        {
            questiontext: "What was the name of Mr and Mrs Kyle's youngest child",
            rightchoice: 'Kady',
            dollarvalue: 200,
            choices: [
                {
                    id: 0,
                    text: "Kady"
                },
                {
                    id: 1,
                    text: "Claire"
                }
                ,
                {
                    id: 2,
                    text: "Katie"
                },
                {
                    id: 3,
                    text: "Brianna"
                }

            ]
        },
        {
            questiontext: 'Hoopz, New York, Hottie, and Pumkin were contestants on this show',
            rightchoice: 'Flavor of Love',
            dollarvalue: 300,
            choices: [
                {
                    id: 0,
                    text: "Flavor of Love 1"
                },
                {
                    id: 1,
                    text: "Flavor of Love 2"
                }
                ,
                {
                    id: 2,
                    text: "For the Love of Money"
                },
                {
                    id: 3,
                    text: "I Love Ray J"
                }

            ]
        },
        {
            questiontext: "The group Day26 was casted within this show ",
            rightchoice: 'Making The Band 4',
            dollarvalue: 400,
            choices: [
                {
                    id: 0,
                    text: "Making The Band 4"
                },
                {
                    id: 1,
                    text: "Making The Band 3"
                }
                ,
                {
                    id: 2,
                    text: "Making The Band  2"
                },
                {
                    id: 3,
                    text: "Making The Band 1"
                }

            ]
        },
        {
            questiontext: 'Professor Oglevee taught this subject at Santa Monica College',
            rightchoice: 'Choice 2',
            dollarvalue: 500,
            choices: [
                {
                    id: 0,
                    text: "History"
                },
                {
                    id: 1,
                    text: "English"
                }
                ,
                {
                    id: 2,
                    text: "Accounting"
                },
                {
                    id: 3,
                    text: "Chemistry"
                }

            ]
        }
    ]
},

{
category: 'category4',
    questions: [
        {
            questiontext: 'In this scene, a little boy by the name of ____ was pronounced dead and his mentor punched a whole into the wall',
            rightchoice: 'Lil Saint',
            dollarvalue: 100,
            choices: [
                {
                    id: 0,
                    text: "Lil Saint"
                },
                {
                    id: 1,
                    text: "Lil Baby"
                }
                ,
                {
                    id: 2,
                    text: "Baby Boy"
                },
                {
                    id: 3,
                    text: "Young Saint"
                }

            ]
        },
        {
            questiontext: 'The phrase, "No more locked doors!, comes from the movie ___',
            rightchoice: 'Next Friday',
            dollarvalue: 200,
            choices: [
                {
                    id: 0,
                    text: "Friday"
                },
                {
                    id: 1,
                    text: "All About the Benjamins"
                }
                ,
                {
                    id: 2,
                    text: "Next Friday"
                },
                {
                    id: 3,
                    text: "Barber Shop"
                }

            ]
        },
        {
            questiontext: 'This scene from the movie ___ , shows a wife and her husband arguing in the car about who moved the drivers seat',
            rightchoice: 'Norbit',
            dollarvalue: 300,
            choices: [
                {
                    id: 0,
                    text: "Nutty Professor: The Klumps"
                },
                {
                    id: 1,
                    text: "Daddy Day Care"
                }
                ,
                {
                    id: 2,
                    text: "Norbit"
                },
                {
                    id: 3,
                    text: "Life"
                }

            ]
        },
        {
            questiontext: 'In this scene from the movie ____ , a girl has her necklace snatched from her former boyfriend ',
            rightchoice: 'ATL',
            dollarvalue: 400,
            choices: [
                {
                    id: 0,
                    text: "ATL"
                },
                {
                    id: 1,
                    text: "This Christmas"
                }
                ,
                {
                    id: 2,
                    text: "Takers"
                },
                {
                    id: 3,
                    text: "Atlanta"
                }

            ]
        },
        {
            questiontext: "In the movie, Malibu's Most Wanted, the character 'Tec' owned this game console",
            rightchoice: 'Game Cast',
            dollarvalue: 500,
            choices: [
                {
                    id: 0,
                    text: "Dream Cast"
                },
                {
                    id: 1,
                    text: "Dream Cube"
                }
                ,
                {
                    id: 2,
                    text: "Game Cube"
                },
                {
                    id: 3,
                    text: "Game Cast"
                }

            ]
        }
    ]
},



]



