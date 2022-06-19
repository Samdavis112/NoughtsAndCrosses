let XTurn = true;

let gameBoard = [
    [],
    [],
    []
];

function getCellData(cellNumber){
    const cellData = document.getElementById(cellNumber).innerHTML;
    return cellData;
}

function addCellClickEvent(cellNumber){
    document.getElementById(cellNumber).addEventListener('click', function(){
        onClick();
    })
}

function setCellData(cellNumber, cellData){
    document.getElementById(cellNumber).innerHTML = cellData;
}

function getBoard(){
    const board = [
        [getCellData(0), getCellData(1), getCellData(2)],
        [getCellData(3), getCellData(4), getCellData(5)],
        [getCellData(6), getCellData(7), getCellData(8)]
    ]
    return board;
}

function setBoard(gameBoard){  
    setCellData(0, gameBoard[0][0]);
    setCellData(1, gameBoard[0][1]);
    setCellData(2, gameBoard[0][2]);
    setCellData(3, gameBoard[1][0]);
    setCellData(4, gameBoard[1][1]);
    setCellData(5, gameBoard[1][2]);
    setCellData(6, gameBoard[2][0]);
    setCellData(7, gameBoard[2][1]);
    setCellData(8, gameBoard[2][2]);
}

function setCellColour(cellNumber, colour){
    if(colour == "colour-white"){
        document.getElementById(cellNumber).classList.remove("colour-black");
    }
    else{
        document.getElementById(cellNumber).classList.remove("colour-white");
    }
    document.getElementById(cellNumber).classList.add(colour);
}

function startGame(){
    //Setting font colour to black
    for(i = 0; i < 9; i++){
        setCellColour(i, "colour-black")
        setCellData(i, "");
    }
}

function replay(){
    document.location.reload();
}

function main(){

    //formatting cells 
    startGame();
    
    //adding cell click event
    for(i = 0; i < 9; i++){
        addCellClickEvent(i)
    }
}

function onClick(){

    let clickedElement = event.target.id;
    let cellNumber = clickedElement;
    if(getCellData(cellNumber) == ""){

        if(XTurn == true){
            XTurn = false;
            setCellColour(cellNumber , "colour-white");
            setCellData(cellNumber , "X");
            document.getElementById("Action-Message").innerHTML = "O, make your move..."
        }
        else{
            XTurn = true;
            setCellColour(cellNumber, "colour-white");
            setCellData(cellNumber , "O");
            document.getElementById("Action-Message").innerHTML = "X, make your move..."
        }
    }
}









main();
