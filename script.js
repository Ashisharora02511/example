console.log("Welcome to tic tac toc");
let music = new Audio("/images/music.mp3");
let ting = new Audio("/images/ting.mp3");
let gameover = new Audio("/images/gameover.mp3");
let turn = "X";
let isgameover = false;
//function to change the turn
const changeTurn = () => {

        return turn === "X" ? "0" : "X"
    }
    //function to check the win
const checkWin = () => {
        debugger
        let boxtext = document.getElementsByClassName('boxtext');
        let win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        win.forEach(e => {
            debugger
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                debugger
                document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won";
                isgameover = true;
                document.querySelector('.imagebox').getElementsByTagName("img")[0].style.width = "200px";
            }
        });
    }
    //game logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {

            boxtext.innerText = turn;
            turn = changeTurn();
            debugger
            ting.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }

        }

    })

})
reset.addEventListener("click", () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    document.querySelector('.imagebox').getElementsByTagName("img")[0].style.width = "0px";

})