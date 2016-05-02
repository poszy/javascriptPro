// Will hande the logic of creating the board
// and will handle the game logic


function createBoard(){

    // initialize variables
    var makeboard, cBoard, fill, i;


    var makeBoard = ["1 ", " 2", "3 ", "4 ", "5 ", " 6", "7 ", "8 ", " 9" ];


    // loop through array

    cBoard = makeboard.length;
    fill   = "<ul>";

    for(i = 0; i<cBoard; i++){

	     fill+="<li>" + makeBoard[i] + "</li>";

    }

    document.getElementById("test").innerHTML = fill;
}
