
class questions {
    constructor(question, answers, points, index){
        this.question = question
        this.answers = answers
        this.points = points
        this.index = index
    }

    openModal(){
        ////////////////////////////
        //OPEN and CLOSE THE MODAL//
        ////////////////////////////

        //get divs from html
        var modal = document.getElementById("quesModal");
        let timerText = $('#timer');
        let timerCount = 0 ;

        //make for loop to count through 25 
        

        // When the user clicks on the button, open the modal 
        
        let i = 1;
            
            $('.boardQues').eq(i).on('click', function(){
                countDown();
                modal.style.display = "block";
            });
        

        // close the modal from X 
        $('.close').on('click', function(){
            //Stop The Timer
            clearInterval(timerCount)

            //Close the Question Window
            modal.style.display = "none";
        });

    
    }
}


let catOne100 = new questions("here is the question I want to ask", ["first answer", "second answer", "third answer", "fourth answer"], 100, 1)


console.log(catOne100.question)

console.log(catOne100.answers[0])
console.log(catOne100.answers[1])
console.log(catOne100.answers[2])
console.log(catOne100.answers[3])
console.log(catOne100.index)





////////////////////////////
//OPEN and CLOSE THE MODAL//
////////////////////////////

// //get divs from html
// var modal = document.getElementById("quesModal");
// let timerText = $('#timer');
// let timerCount = 0 ;

// // When the user clicks on the button, open the modal 
// $('.boardQues').eq(index).on('click', function(){
//     countDown();
//     modal.style.display = "block";
// });

// // close the modal from X 
// $('.close').on('click', function(){
//     //Stop The Timer
//     clearInterval(timerCount)

//     //Close the Question Window
//     modal.style.display = "none";
// });

////////////////////////
//init timer countdown// 
////////////////////////

    // var i = 11; 
    // timerCount = setInterval(countDown, 1000);

    // function countDown (){
    //     i--;
    //     //this.timer = document.getElementById('timer')
    //     timerText.innerHTML = i; 

    //     if (i == 0){
    //     //play buzzer sound 
    //     let buzzer = new Audio ('sounds/timesup.mp3')
    //     buzzer.play(); 
        
    //     //stop counter 
    //     clearInterval(timerCount);
       
    //      modal.style.display = "none";
    //     }
    //     //next, show times up screen and subtract points from score 
    // }


    var gameData = [
        {
           category: 'Category1',
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
                   questiontext: 'This is the capital of Mexico',
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
                   questiontext: 'This is the capital of Mexico',
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
                   questiontext: 'This is the capital of Mexico',
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
                   questiontext: 'This is the capital of Mexico',
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