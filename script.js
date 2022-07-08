const box1 = document.getElementById('sBox1')
const box2 = document.getElementById('sBox2')
const box3 = document.getElementById('sBox3')


//Variable declaration
let userCountDisplay = document.getElementById('user-count')
let compCountDisplay = document.getElementById('comp-count')
let user = document.getElementById('user')
let comp = document.getElementById('comp')
let roundCountDisplay = document.getElementById('round')
let remark = document.getElementById('remark')
let userCount = 0;
let compCount = 0;
let roundCount = 0;



//Reload Page function
function resetPage() {
    alert("Click OK to restart the game")
    document.location.reload(true);
}

//Start Function to get username
// function userName() {
//     let user = prompt("Enter your name");

//     if (user != null) {
//         document.getElementById("username").innerHTML = user;
//     }
// }


//Generating random number
// let randNum;
// function randNumber(){
//     // let randNumber;
//     let randNum = Math.floor(Math.random() * 3) + 1;
//     console.log("Random Numberf: " + randNum)
// }
// console.log("Random Number: ". randNum)
// // randNumber()

// let randNumber = Math.floor(Math.random() * 3) + 1;

// var randName;
// var randNumber;

// console.log(randNumber)


//Check Function
function check(callDebug) {
    roundCount++;

    let randNumber = Math.floor(Math.random() * 3) + 1;
    function compImg() {
        if (randNumber == 1) {
            comp.style.backgroundImage = "url('rock.jpg')"
            comp.style.backgroundRepeat = "no-repeat"
            comp.style.backgroundSize = "cover"
        } else if (randNumber == 2) {
            comp.style.backgroundImage = "url('paper.jpg')"
            comp.style.backgroundRepeat = "no-repeat"
            comp.style.backgroundSize = "cover"
        } else if (randNumber == 3) {
            comp.style.backgroundImage = "url('scissor.jpg')"
            comp.style.backgroundRepeat = "no-repeat"
            comp.style.backgroundSize = "cover"
        }
    }
    compImg()
    if (userInputNumber > 3 || userInputNumber < 1) {
        console.log("Enter number between 1-3")
    }
    if (userInputNumber == randNumber) {
        console.log("match draw")
        remark.innerHTML = "Match Draw!"
        // randNumber()
    } else if (userInputNumber == 1 && randNumber == 2 || userInputNumber == 2 && randNumber == 3 || userInputNumber == 3 && randNumber == 1) {
        console.log("you lose!")
        remark.innerHTML = "You Lose!"
        compCount++;
        compCountDisplay.innerHTML = compCount;
        // randNumber()
    } else {
        console.log("you win")
        remark.innerHTML = "You Win!"
        userCount++;
        userCountDisplay.innerHTML = userCount;
        // randNumber()
    }
    roundCountDisplay.innerHTML = roundCount;
    if(roundCount == 20 && userCount > compCount){
        remark.innerHTML = "Mission Passed"
        
    } else if(roundCount == 21 && userCount < compCount){
        remark.innerHTML = "Wasted!"
        
    }
    console.log("Random Number: " + randNumber);
    // randNumber();
    callDebug();
}
var userInputNumber;
// check(debug);
//Onclick events
let rockFunc = () => {
    userInputNumber = 1;
    user.style.backgroundImage = "url('rock.jpg')"
    user.style.backgroundRepeat = "no-repeat"
    user.style.backgroundSize = "cover"
    check(debug)
    // roundCount++;
    console.log("You clicked rock")
}

let paperFunc = () => {
    userInputNumber = 2;
    user.style.backgroundImage = "url('paper.jpg')"
    user.style.backgroundRepeat = "no-repeat"
    user.style.backgroundSize = "cover"
    check(debug)
    // roundCount++;
    console.log("You clicked paper")
}

let scissorFunc = () => {
    userInputNumber = 3;
    user.style.backgroundImage = "url('scissor.jpg')"
    user.style.backgroundRepeat = "no-repeat"
    user.style.backgroundSize = "cover"
    check(debug)
    // roundCount++;
    console.log("You clicked scissor")
}



//Converting randum numbers to names
switch (randNumber) {
    case 1:
        randName = "Rock";
        comp.style.backgroundImage = "url('rock.jpg')"
        comp.style.backgroundRepeat = "no-repeat"
        comp.style.backgroundSize = "cover"
        break;
    case 2:
        randName = "Paper";
        comp.style.backgroundImage = "url('paper.jpg')"
        comp.style.backgroundRepeat = "no-repeat"
        comp.style.backgroundSize = "cover"
        break;
    case 3:
        randName = "Scissor";
        comp.style.backgroundImage = "url('scissor.jpg')"
        comp.style.backgroundRepeat = "no-repeat"
        comp.style.backgroundSize = "cover"
    default:
        break;
}


//Debugging 
function debug() {
    // console.log('Random Number : ', randNum);
    console.log('Round Count : ', roundCount);
}
