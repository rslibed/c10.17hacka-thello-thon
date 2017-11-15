$(document).ready(initializeApp);

var gameboard = new Array(8);

function initializeApp () {
    var createGame = new Othello();
    // $(".cell").click(createGame.placePiece.bind(createGame));
    createGame.createGameBoard();
    createGame.initialPieces();
}
function Othello () {
    this.createGameBoard = function () {

        for (var i = 0; i < 8; i++) {
            gameboard[i] = new Array(8);
            for (var j = 0; j < 8; j++) {
                gameboard[i][j] = $("<div>").addClass("cell").addClass("empty").attr({
                    "data-x": i,
                    "data-y": j

                });
                gameboard[i][j].appendTo(".board-container");
            }
        }
    }
    this.initialPieces = function () {

        var piece = $('<div>',{
            'class': 'piece white'
        });


        gameboard[1][1].append(piece);
        // $("<div>").addClass("white");
        // $("<div>").addClass("black");
        // console.log($(".board-container"));
        // console.log($(".row"));
        // console.log($(".cell"));
    // }
    // this.gamePiece = $("<div>").addClass("piece").addClass("black");
    // this.placePiece = function () {
    //     if ($(event.target).hasClass("empty")) {
    //         $(event.target).append(this.gamePiece).removeClass("empty");
    //     }
        
    }
}
// var states = {
//     player1: function () {
//
//     // Check adjacent piece for valid move?
//     function checkNeighbors() {
//
//     }
//
//     // Validity = true, place piece
//     function placePiece() {
//
//     }
//     // Find piece until matches player's piece? Then flip all opposite stones in btwn
//     function flipPiece() {
//
//     }
//
// },
//
// player2: function () {
//     function checkNeighbors() {
//
//     }
//
//     function placePiece() {
//
//     }
//
//     function flipPiece() {
//
//     }
//
// }
// };