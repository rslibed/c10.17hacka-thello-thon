$(document).ready(initializeApp);

var gameboard = new Array(8);
var indicesOfEmpty = [];

function initializeApp() {
    var createGame = new Othello();
    createGame.createGameBoard();
    createGame.initialPieces();
    // $(".cell").click(createGame.currentTurn.placePiece);
    $(".cell").click(createGame.placePiece);
    createGame.checkRows();
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
    }

    this.placePiece = this.placePiece.bind(this);

    this.checkRows = function() { //hard coded for white player
        // var empty = $('.cell').hasClass('empty');
        for (var i = 0; i < gameboard.length; i++) {
            var counter = 2;
            for (var j = 0; j < gameboard.length; j++) {
                if (gameboard[i][j].hasClass('empty') && gameboard[i][j + 1].children().hasClass('black')) {
                    var validIndex = [i, j];
                    var complementaryIndex = [];
                    while (gameboard[i][j + 1].children().hasClass('black')) {
                        if (gameboard[i][j + counter].hasClass('empty')) {
                            break;
                        } else if (gameboard[i][j + counter].children().hasClass('black')) {
                            counter++;
                            //keep going
                        } else {
                            gameboard[validIndex]
                            complementaryIndex = [i, j + counter];
                        }
                    }
                }
            }
            console.log(indicesOfEmpty);
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





