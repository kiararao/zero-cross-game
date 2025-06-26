let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;

let turnO = true;
const patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{

        if(turnO ){
            box.innerText = "O";
            turnO = false;
            
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true ;
        count++;
        let isWinner = checkWinner();

        if(count == 9 && !isWinner){
            gamedraw();
        }
    });
});

const gamedraw = () =>{
    msg.innerText = `GAME was a draw !!!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

const disableboxes = () =>{
    for(let box of boxes ){
        box.disabled = true ;

    }
};

const enableboxes = ()=>{
    for(let box of boxes ){
        box.disabled = false;
        box.innerText= "";
    }
};

const showWinner = (winner)=>{
    msg.innerText=`CONGRATULATIONS , winner is ${winner} !!!`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for (let pattern of patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner" , pos1);
                showWinner(pos1);
                return true ;
            }
        }
    }   
}

const resetgame=()=>{
    turnO = true;
    count = 0;

    enableboxes ();
    msgcontainer.classList.add("hide");


}

newgamebtn.addEventListener("click" , resetgame);
resetbtn.addEventListener("click" , resetgame);
