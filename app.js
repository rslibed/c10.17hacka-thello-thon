$(document).ready(initializeApp);

var gameboard = new Array(8);
var indicesOfEmpty = [];

function initializeApp() {
    var createGame = new Othello();
    createGame.createGameBoard();
    createGame.initialPieces();
    // $(".cell").click(createGame.currentTurn.placePiece);
    $(".cell").click(createGame.placePiece);
}


function Othello() {
    var self = this;
    this.createGameBoard = function () {
        for (var i = 0; i < 8; i++) { //y
            gameboard[i] = new Array(8);
            for (var j = 0; j < 8; j++) {  //x
                gameboard[i][j] = $("<div>").addClass("cell").addClass("empty").attr({
                    "data-x": i,
                    "data-y": j
                });
                gameboard[i][j].appendTo(".board-container");
            }
        }
    }

    this.initialPieces = function () {
        gameboard[3][3].append($('<div>', {
            'class': 'piece white'
        })).removeClass("empty");
        gameboard[3][4].append($('<div>', {
            'class': 'piece black'
        })).removeClass("empty");
        gameboard[4][3].append($('<div>', {
            'class': 'piece black'
        })).removeClass("empty");
        gameboard[4][4].append($('<div>', {
            'class': 'piece white'
        })).removeClass("empty");
    };
    this.currentPlayer = "black";
    this.placePiece = function () {
        if ($(event.target).hasClass("empty")) {
            $(event.target).append($('<div>', {
                'class': 'piece ' + self.currentPlayer
            })).removeClass("empty");
        }
        if (this.currentPlayer === "black") {
            this.currentPlayer = "white";
        } else {
            this.currentPlayer = "black";
        }
        // self.checkRows();
    }
    this.placePiece = this.placePiece.bind(this);

    // this.checkRows = function () {
    //     var cellArray = $(".cell");
    //     var clickedCellIndex = $(this).index();
    //     var cellToRight = cellArray[clickedCellIndex + 1];
    //     var rightToNeighbor = cellArray[clickedCellIndex + 2];
    //     if (self.currentPlayer === "black") {
    //         if (cellToRight.getAttribute("class") !== "cell empty") {
    //             console.log("Cell to the right is not empty");
    //             if (cellToRight.children[0].getAttribute("class") === "piece white") {
    //                 if (rightToNeighbor.children[0].getAttribute("class") === "piece black") {
    //                     console.log($(cellToRight).find(".piece").removeClass("white").addClass("black"));
    //                 }
    //             }
    //         } else {
    //             console.log("cell to right is empty");
    //         }
    //         self.currentPlayer = "white";
    //     } else {
    //         if (cellToRight.getAttribute("class") !== "cell empty") {
    //             console.log("Cell to the right is not empty");
    //             if (cellToRight.children[0].getAttribute("class") === "piece black") {
    //                 if (rightToNeighbor.children[0].getAttribute("class") === "piece white") {
    //                     console.log($(cellToRight).find(".piece").removeClass("black").addClass("white"));
    //                 }
    //             }
    //         } else {
    //             console.log("cell to right is empty");
    //         }
    //     }
    // }

    this.findWhitePieces = function(){

    }








    this.checkRows = function() { //hard coded for white player
        for (var i = 0; i < gameboard.length; i++) {
            var counter = 2;
            var counter2 = 2;
            for (var j = 0; j < gameboard.length-1; j++) {
                if (gameboard[i][j].hasClass('empty') && gameboard[i][j + 1].children().hasClass('black')) {
                    var validIndex = [i, j];
                    var complementaryIndex = [];
                    while (gameboard[i][j + counter-1].children().hasClass('black') && (j+counter)<7) {
                        if (gameboard[i][j + counter].hasClass('empty')) {
                            break;
                        } else if (gameboard[i][j + counter].children().hasClass('black')) {
                            counter++;
                            //keep going
                        } else {
                            console.log("valid index:", validIndex);
                            gameboard[i][j].addClass("eligibleSpace");
                            complementaryIndex = [i, j + counter];
                            console.log("comp index:",complementaryIndex );
                            break;
                        }

                    }
                }
                if (gameboard[i][j].children().hasClass('white') && gameboard[i][j+1].children().hasClass('black')) {
                    var validIndex2 = [];
                    var complementaryIndex2 = [i, j];
                    while (gameboard[i][j + counter2-1].children().hasClass('black') && gameboard[i][j + counter2].hasClass('empty')) {
                        if (gameboard[i][j + counter2].children().hasClass('white')) {
                            break;
                        } else if (gameboard[i][j + counter2].children().hasClass('black')) {
                            counter2++;
                            //keep going
                        } else if (gameboard[i][j + counter2].hasClass('empty')) {
                            validIndex2 = [i, j + counter2];
                            console.log("valid index2:", validIndex2);
                            gameboard[i][j+counter2].addClass("eligibleSpace");
                            debugger;
                            console.log("comp index2:",complementaryIndex2 );
                            break;
                        }

                    }
                }
            }
        }
    }
}






// this.states = {
//     player1: {
//         name: "player 1",
//         // Check adjacent piece for valid move?
//         checkNeighbors: function () {
//             console.log("Check Neighbors.");
//         },
//         // Validity = true, place piece
//         placePiece: function () {
//                 if ($(event.target).hasClass("empty")) {
//                     $(event.target).append($('<div>', {
//                         'class': 'piece black'
//                     })).removeClass("empty");
//
//                 }
//             self.currentTurn = self.states.player2;
//             },
//         // Find piece until matches player's piece? Then flip all opposite stones in btwn
//         flipPiece: function () {
//             console.log("Flip piece.")
//         }
//     },
//     player2: {
//         name: "player 2",
//         // Check adjacent piece for valid move?
//         checkNeighbors: function () {
//             console.log("Check Neighbors.");
//         },
//         // Validity = true, place piece
//         placePiece: function () {
//                 if ($(event.target).hasClass("empty")) {
//                     $(event.target).append($('<div>', {
//                         'class': 'piece white'
//                     })).removeClass("empty");
//                 }
//             self.currentTurn = self.states.player1;
//
//         },
//         // Find piece until matches player's piece? Then flip all opposite stones in btwn
//         flipPiece: function () {
//             console.log("Flip piece.");
//         }
//     }
// };
// this.currentTurn = this.states.player1;
// console.log(this.currentTurn);





