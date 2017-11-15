$(document).ready(initializeApp);
function initializeApp () {
    var createGame = new Othello();
    $(".cell").click(createGame.placePiece.bind(createGame));
    createGame.createGameBoard();
}
function Othello () {
    this.createGameBoard = function () {
        for (var i = 0; i < 4; i++) {
            var row = $("<div>").addClass("row");
                $(".board-container").append(row);
        }
        for (var j = 0; j < 4; j++) {
            var cell = $("<div>").addClass("cell").addClass("empty");
            $(".row").append(cell);
        }
    }
    this.initialPieces = function () {

    }
    this.gamePiece = $("<div>").addClass("piece").addClass("black");
    this.placePiece = function () {
        if ($(event.target).hasClass("empty")) {
            $(event.target).append(this.gamePiece).removeClass("empty");
        }
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