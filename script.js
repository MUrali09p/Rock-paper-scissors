let userScore = 0;
let computerScore = 0;
const option = document.querySelectorAll(".choise");
let result = document.querySelector(".result-message");
let resultMessage;
const userScore1 =document.querySelector(".user-score");
const computerScore1 = document.querySelector(".computer-score");
const userImage = document.querySelector("#user-image");
const computerImage = document.querySelector("#computer-image");
const displayScore = document.querySelector(".display-container");
const playGame = document.querySelector(".instructions");
const gameOn = document.querySelector(".choises");
const userbox = document.querySelector(".user-choise");
const combox = document.querySelector(".computer-choise")


option.forEach((option)=>{
    option.addEventListener("click", ()=>{
        const userChoise = option.getAttribute("id");
        const computerChoise = optForcom();
        game(userChoise,computerChoise);
        console.log(resultMessage);
    })
    
});
const optForcom=()=>{
    const options = ["rock" , "paper" , "scissors"];
    const comOpt = Math.floor(Math.random()*3);
    return options[comOpt];
};
const game=(userChoise,computerChoise)=>{
    
        if(userChoise===computerChoise){
            resultMessage="it's a Draw";
            result.style.color = "white";
            
        }else if((userChoise ==="rock" && computerChoise ==="scissors")||
                (userChoise === "paper" && computerChoise ==="rock")||
                (userChoise === "scissors" && computerChoise ==="paper")){
                    resultMessage = "you win";
                    userScore++;
                    userbox.style.boxShadow = "0 0 20px 5px rgba(0, 255, 0, 0.7)"; 
                    combox.style.boxShadow = "0 0 20px 5px rgba(237, 19, 19, 0.7)"; 
                    result.style.color = "green";
                }else{
                    resultMessage = "computer wins";
                    computerScore++;
                    userbox.style.boxShadow = "0 0 20px 5px rgba(201, 21, 21, 0.7)"; 
                    combox.style.boxShadow = "0 0 20px 5px rgba(0, 255, 0, 0.7)"; 
                    result.style.color ="red" ;
                }
    result.textContent=resultMessage;
    userScore1.textContent=userScore;
    computerScore1.textContent=computerScore;
    userImage.innerHTML= `<img id="user-image" src="${userChoise}.png" alt="your-choise">`;
    computerImage.innerHTML = `<img id="computer-image" src="${computerChoise}.png" alt="computer-choise">`
    
    userImage.src = `${userChoise}.png`;
    userImage.alt = `Your choice: ${userChoise}`;
    computerImage.src = `${computerChoise}.png`;
    computerImage.alt = `Computer's choice: ${computerChoise}`;
    displayScore.style.visibility = "visible";
    playGame.style.visibility = "hidden";
    gameOn.classList.add("shift-up");
    displayScore.classList.add("shift-up");
};


