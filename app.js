let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let mgscontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true;
let count = 0

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    trueO = true;
    count = 0 ;
    enabalbtns();
    mgscontainer.classList.add("hide")
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "yellow";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();

        if (count === 9 && !iswinner){
            gameDraw();

        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game has Drow, Try Again.`;
    mgscontainer.classList.remove("hide");
    disablebtns();
}


const disablebtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enabalbtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showwinner = (winner) => {
    msg.innerText = `Congratulation, winner is ${winner}`;
    mgscontainer.classList.remove("hide");
    disablebtns();
}





const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
                
            }
        }
    }
};


const drowwin = () =>{
    if(showwinner !== showwinner){
        notshowwinner(pos1val);

    }
}





newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);