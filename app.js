$(document).ready(initializeApp);
function initializeApp () {
    var createGame = new Othello();
    $(".cell").click(createGame.placePiece.bind(createGame));
    createGame.createGameBoard();
    createGame.initialPieces();
}
function Othello () {
    this.createGameBoard = function () {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var cell = $("<div>").addClass("cell").addClass("empty").attr({
                    "data-x": j,
                    "data-y": i
                });
                $(".board-container").append(cell);
            }
        }
    }
    this.initialPieces = function () {
        var whitePiece = $("<div>").addClass("piece").addClass("white");
        var blackPiece = $("<div>").addClass("piece").addClass("black");
        var cellArray = $(".cell");
        for (var i = 0; i < cellArray.length; i++) {
            if (cellArray[i].getAttribute("data-x") == 2 && cellArray[i].getAttribute("data-y") == 2) {
                cellArray[i].append("hello");
            }
        }
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