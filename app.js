$(document).ready(initializeApp);

var gameboard = new Array(8);
var playerChoice = 0;

function initializeApp() {
    var createGame = new Othello();
    createGame.createGameBoard();
    createGame.initialPieces();
    // $(".cell").click(createGame.currentTurn.placePiece);
    $('.char').click(function(){
        if (playerChoice === 0){
            var playerOne= $(this).children("img").attr("alt");
            if (createGame.currentPlayer === "black"){
                
            }


            console.log(playerOne);
        } else {
            var playerTwo= $(this).children("img").attr("alt");
            $('.white').addClass(playerTwo);
            console.log(playerTwo);
        }
        playerChoice = Math.abs(playerChoice - 1);
    });
    $(".cell").click(createGame.placePiece);
    createGame.checkRows(createGame.currentPlayer, createGame.checkColor);
    createGame.checkColumns(createGame.currentPlayer, createGame.checkColor);
    createGame.forwardDiagonal(createGame.currentPlayer, createGame.checkColor);
    createGame.backwardDiagonal(createGame.currentPlayer, createGame.checkColor);
}

function applyClickHandlers(){
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
    this.checkColor = "white";
    this.placePiece = function () {
        if ($(event.target).hasClass("empty")) {
            $(event.target).append($('<div>', {
                'class': 'piece ' + self.currentPlayer
            })).removeClass("empty");
        }
        if (this.currentPlayer === "black") {
            this.currentPlayer = "white";
            this.checkColor = "black";
        } else {
            this.currentPlayer = "black";
            this.checkColor = "white";
        }
        $(".cell").removeClass("eligibleSpace");
        self.checkRows(self.currentPlayer, self.checkColor);
        self.checkColumns(self.currentPlayer, self.checkColor);
        self.forwardDiagonal(self.currentPlayer, self.checkColor);
        self.backwardDiagonal(self.currentPlayer, self.checkColor);
    }
    this.placePiece = this.placePiece.bind(this);
    this.checkRows = function (current, color) {
        for (var i = 0; i < gameboard.length; i++) {
            var counter = 2;
            var counter2 = 2;
            for (var j = 0; j < gameboard.length - 1; j++) {
                if (gameboard[i][j].hasClass('empty') && gameboard[i][j + 1].children().hasClass(color)) {
                    var validIndex = [i, j];
                    var complementaryIndex = [];
                    while (gameboard[i][j + counter - 1].children().hasClass(color) && (j + counter) < 7) {
                        if (gameboard[i][j + counter].hasClass('empty')) {
                            break;
                        } else if (gameboard[i][j + counter].children().hasClass(color)) {
                            counter++;
                            //keep going
                        } else {
                            console.log("valid index:", validIndex);
                            gameboard[i][j].addClass("eligibleSpace");
                            complementaryIndex = [i, j + counter];
                            console.log("comp index:", complementaryIndex);
                            break;
                        }

                    }
                }
                if (gameboard[i][j].children().hasClass(current) && gameboard[i][j + 1].children().hasClass(color)) {
                    var validIndex2 = [];
                    var complementaryIndex2 = [i, j];
                    while (gameboard[i][j + counter2 - 1].children().hasClass(color) && gameboard[i][j + counter2].hasClass('empty')) {
                        if (gameboard[i][j + counter2].children().hasClass(current)) {
                            break;
                        } else if (gameboard[i][j + counter2].children().hasClass(color)) {
                            counter2++;
                            //keep going
                        } else if (gameboard[i][j + counter2].hasClass('empty')) {
                            validIndex2 = [i, j + counter2];
                            console.log("valid index2:", validIndex2);
                            gameboard[i][j + counter2].addClass("eligibleSpace");
                            console.log("comp index2:", complementaryIndex2);
                            break;
                        }

                    }
                }
            }
        }
    }
    this.checkColumns = function (current, color) {
        for (var i = 0; i < gameboard.length - 1; i++) {
            var counter = 2;
            var counter2 = 2;
            for (var j = 0; j < gameboard.length; j++) {
                if (gameboard[i][j].hasClass('empty') && gameboard[i + 1][j].children().hasClass(color)) {
                    var validIndex = [];
                    var complementaryIndex = [i, j];
                    while (gameboard[i + counter - 1][j].children().hasClass(color) && (i + counter) < 7) {
                        if (gameboard[i + counter][j].hasClass('empty')) {
                            break;
                        } else if (gameboard[i + counter][j].children().hasClass(color)) {
                            counter++;
                            //keep going
                        } else {
                            console.log("valid index:", validIndex);
                            gameboard[i][j].addClass("eligibleSpace");
                            complementaryIndex = [i + counter, j];
                            console.log("comp index:", complementaryIndex);
                            break;
                        }

                    }
                }
                if (gameboard[i][j].children().hasClass(current) && gameboard[i + 1][j].children().hasClass(color)) {
                    var validIndex2 = [];
                    var complementaryIndex2 = [i, j];
                    while (gameboard[i + counter2 - 1][j].children().hasClass(color) && gameboard[i + counter2][j].hasClass('empty')) {
                        if (gameboard[i + counter2][j].children().hasClass(current)) {
                            break;
                        } else if (gameboard[i + counter2][j].children().hasClass(color)) {
                            counter2++;
                            //keep going
                        } else if (gameboard[i + counter2][j].hasClass('empty')) {
                            validIndex2 = [i + counter2, j];
                            console.log("valid index2:", validIndex2);
                            gameboard[i + counter2][j].addClass("eligibleSpace");
                            console.log("comp index2:", complementaryIndex2);
                            break;
                        }

                    }
                }
            }
        }
    }
    this.forwardDiagonal = function (current, color) {
        for (var i = gameboard.length - 1; i > 0; i--) {
            // var counter = 2;
            // var counter2 = 2;
            var counter = 1;
            var counter2 = 1;
            for (var j = gameboard.length - 1; j > 0; j--) {
                if (gameboard[i - 1][j + 1] !== undefined) {
                    if (gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (gameboard[i - counter][j + counter].children().hasClass(color)) {
                            if (gameboard[i - counter][j + counter].hasClass('empty')) {
                                counter = 1;
                                counter2 = 1;
                                break;
                            }
                            counter++;
                            if (gameboard[i - counter][j + counter].children().hasClass(current)) {
                                console.log("valid index:", validIndex);
                                gameboard[i][j].addClass("eligibleSpace");
                                complementaryIndex = [i - counter, j + counter];
                                console.log("comp index:", complementaryIndex);
                                counter = 1;
                                counter2 = 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    this.backwardDiagonal = function (current, color) {
        for (var i = 0; i < gameboard.length - 1; i++) {
            // var counter = 2;
            // var counter2 = 2;
            var counter = 1;
            var counter2 = 1;
            for (var j = 0; j < gameboard.length - 1; j++) {
                if (gameboard[i + 1][j + 1] !== undefined) {
                    if (gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (gameboard[i + counter][j + counter].children().hasClass(this.checkColor)) {
                            if (gameboard[i + counter][j + counter].hasClass('empty')) {
                                counter = 1;
                                counter2 = 1;
                                break;
                            }
                            counter++;
                            if (gameboard[i + counter][j + counter].children().hasClass(current)) {
                                console.log("valid index:", validIndex);
                                gameboard[i][j].addClass("eligibleSpace");
                                complementaryIndex = [i + counter, j + counter];
                                console.log("comp index:", complementaryIndex);
                                counter = 1;
                                counter2 = 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
}



