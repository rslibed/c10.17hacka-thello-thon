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
                    "data-y": i,
                    "data-x": j
                });
                $(".board-container").append(cell);
            }
        }
    };
    this.initialPieces = function () {
        $("<div>").addClass("white");
        $("<div>").addClass("black");
        console.log($(".board-container"));
        console.log($(".row"));
        console.log($(".cell"));
    };
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