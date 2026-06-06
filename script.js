let starts = "X";
let turn = starts;
let Gameover = false;
let winner = "";
let game = document.getElementById("GameOver");
let winn = document.getElementById("winner");
let Xwins = 0;
let Owins = 0;
let Xscore = document.getElementById("Xscore");
let Oscore = document.getElementById("Oscore");
let board = ["", "", "", "", "", "", "", "", ""];
let cells = document.querySelectorAll(".Cell");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let mode = "";
let modeDisplay = document.getElementById("mode");
let playAI = document.getElementById("playAI");
let playlocal = document.getElementById("playlocal");
let easy_button = document.getElementById("Easy");
let medium_button = document.getElementById("Medium");
let hard_button = document.getElementById("Hard");
let Stscreen = document.getElementById("Start-Screen");
let Gmscreen = document.getElementById("Game-Screen");
let AImodes_screen = document.getElementById("AImodes");
let AImode = "";
let empty_cells =[] ;
let AIchance = false ;
playAI.addEventListener("click", () => {
  AImodes_screen.style.display = "flex";
  Stscreen.style.display = "none";
  mode = "AI";
  Oscore.textContent = "AI : " + Owins;
  modeDisplay.textContent = "Mode : " + mode;
});

easy_button.addEventListener("click",() =>{
    AImodes_screen.style.display = "none" ;
    Gmscreen.style.display = "flex";
    AImode = "easy" ;
})
medium_button.addEventListener("click",() =>{
    AImodes_screen.style.display = "none" ;
    Gmscreen.style.display = "flex";
    AImode = "medium" ;
})
hard_button.addEventListener("click",() =>{
    AImodes_screen.style.display = "none" ;
    Gmscreen.style.display = "flex";
    AImode = "hard" ;
})
playlocal.addEventListener("click", () => {
  Gmscreen.style.display = "flex";
  Stscreen.style.display = "none";
  mode = "Local";
  Oscore.textContent = "Player O : " + Owins;
  modeDisplay.textContent = "Mode : " + mode;
});

function makeMove(index) {
  if (Gameover == true) {
  } else if (board[index] == "") {
    board[index] = turn;
    cells[index].textContent = turn;
    cells[index].classList.add("pop");

    if (board[0] == turn && board[1] == turn && board[2] == turn) {
      Gameover = true;
      winner = turn;
      zero.style.color = "red";
      one.style.color = "red";
      two.style.color = "red";
      zero.style.backgroundColor = "gold";
      one.style.backgroundColor = "gold";
      two.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[0] == turn && board[3] == turn && board[6] == turn) {
      Gameover = true;
      winner = turn;
      zero.style.color = "red";
      three.style.color = "red";
      six.style.color = "red";
      zero.style.backgroundColor = "gold";
      three.style.backgroundColor = "gold";
      six.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[0] == turn && board[4] == turn && board[8] == turn) {
      Gameover = true;
      winner = turn;
      zero.style.color = "red";
      four.style.color = "red";
      eight.style.color = "red";
      zero.style.backgroundColor = "gold";
      four.style.backgroundColor = "gold";
      eight.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[6] == turn && board[7] == turn && board[8] == turn) {
      Gameover = true;
      winner = turn;
      six.style.color = "red";
      seven.style.color = "red";
      eight.style.color = "red";
      six.style.backgroundColor = "gold";
      seven.style.backgroundColor = "gold";
      eight.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[2] == turn && board[5] == turn && board[8] == turn) {
      Gameover = true;
      winner = turn;
      two.style.color = "red";
      five.style.color = "red";
      eight.style.color = "red";
      two.style.backgroundColor = "gold";
      five.style.backgroundColor = "gold";
      eight.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[2] == turn && board[4] == turn && board[6] == turn) {
      Gameover = true;
      winner = turn;
      two.style.color = "red";
      four.style.color = "red";
      six.style.color = "red";
      two.style.backgroundColor = "gold";
      four.style.backgroundColor = "gold";
      six.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[1] == turn && board[4] == turn && board[7] == turn) {
      Gameover = true;
      winner = turn;
      one.style.color = "red";
      four.style.color = "red";
      seven.style.color = "red";
      one.style.backgroundColor = "gold";
      four.style.backgroundColor = "gold";
      seven.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (board[3] == turn && board[4] == turn && board[5] == turn) {
      Gameover = true;
      winner = turn;
      three.style.color = "red";
      four.style.color = "red";
      five.style.color = "red";
      three.style.backgroundColor = "gold";
      four.style.backgroundColor = "gold";
      five.style.backgroundColor = "gold";
      if (winner == "X") {
        Xwins++;
      } else {
        Owins++;
      }
    } else if (Gameover == false && board.includes("") == false) {
      Gameover = true;
      winner = "Draw";
    }

    if (Gameover == true) {
      game.classList.add("winanim");
      Xscore.textContent = "Player X : " + Xwins;
      if(mode == "AI"){
        Oscore.textContent = "AI : " + Owins;
      }else{
        Oscore.textContent = "Player O : " + Owins;
      }
      game.textContent = "Game Over !";
      if (winner != "Draw") {
        winn.textContent = "Winner : " + winner;
      } else {
        winn.textContent = "Game Drawn";
      }
    } else {
      if (turn == "X") {
        turn = "O";
      } else {
        turn = "X";
      }
      game.textContent = "Current Turn : " + turn;
    }
  }
}
function randomIndex(){
    empty_cells = [];
        for(let i = 0 ; i<9 ; i++){
            if(board[i] == ""){
                empty_cells.push(i);
            }
        }
    let random_index = Math.floor(empty_cells.length * Math.random());
    return empty_cells[random_index];
}

function checkwinner(){
    let winner = "";
    let wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i = 0 ; i < 8 ; i ++){
        if(board[wins[i][0]] == "X" && board[wins[i][1]]== "X"&&board[wins[i][2] ]== "X" ){
            return "X" ;
        }else if(board[wins[i][0]] == "O" && board[wins[i][1]] == "O"&&board[wins[i][2]] == "O" ){
            return "O" 
        }
    }
    if(board.includes("") == false) {
      return "Draw"
    }else{
      return "None"
    }
}

function minimax(AImove){
    let result = checkwinner();
    if(result == "X"){
        return -1 ;
    }else if(result == "O"){
        return +1 ;
    }else if (result == "Draw"){
        return 0 ;
    }else{
        if(AImove){
            let bestscore = -Infinity ;
            for(let i = 0 ; i < 9 ; i ++){
                if(board[i] == ""){
                    board[i] = "O";
                    let score = minimax(false) ;
                    board[i] = "" ;
                    if(bestscore < score){
                        bestscore = score ;
                    }
                }
            }

            return bestscore ;
        }else{
            let bestscore = Infinity ;
            for(let i = 0 ; i < 9 ; i ++){
                if(board[i] == ""){
                    board[i] = "X";
                    let score = minimax(true) ;
                    board[i] = "" ;
                    if(bestscore > score){
                        bestscore = score ;
                    }
                }
            }

            return bestscore ;           
        }
    }
}

function bestAImove(){
    let bestmove;
    let bestscore = -Infinity ;

    for(let i = 0 ; i < 9 ; i++){
        if(board[i] == ""){
            board[i] = "O" ;
            let score = minimax(false);
            board[i] = "" ;
            if(score > bestscore){
                bestmove = i ;
                bestscore = score ;
            }
        }
    }
    return bestmove ;
}

game.textContent = "Current Turn : " + turn;
Xscore.textContent = "Player X : " + Xwins;
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if(board[index] == "" && AIchance == false){
        makeMove(index);
        if(mode == "AI"&&Gameover == false){
            let move ;
            if(AImode == "easy"){
                if(Math.random()>0.3){
                    move = randomIndex();
                }else{
                    move = bestAImove();
                }
            }else if(AImode == "medium" ){
                if(Math.random()>0.7){
                    move = randomIndex();
                }else{
                    move = bestAImove();
                }
            }else{
                move = bestAImove();
            }
            AIchance = true ;
            setTimeout(() => {
            if(Gameover == false){
              makeMove(move);
              }
              AIchance = false ;
            }, 500);
            
        }}
  });
});

//Restart Button.

let Reset = document.getElementById("restart");
Reset.addEventListener("click", () => {
    if(mode == "AI"){
        starts = "X";
        turn = starts ;
    }else if (starts == "X" && Gameover == true) {
    starts = "O";
    turn = starts;
  } else if (starts == "O" && Gameover == true) {
    starts = "X";
    turn = starts;
  } else {
    turn = starts;
  }

  Gameover = false;
  winner = "";
  board = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.style.color = "";
    cell.style.backgroundColor = "";
    cell.classList.remove("pop");
    game.classList.remove("winanim");
    
  });
  winn.textContent = "";
  game.textContent = "Current Turn : " + turn;
});

let homebutton1 = document.getElementById("Homebutton1");
homebutton1.addEventListener("click",() => {
    location.reload();
})

let homebutton2 = document.getElementById("Homebutton2");
homebutton2.addEventListener("click",() => {
    location.reload();
})


