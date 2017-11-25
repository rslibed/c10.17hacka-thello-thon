$(document).ready(initializeApp);
var gameboard = new Array(8);
var playerHasMoves = false;
function initializeApp() {
    var createGame = new Othello();
    createGame.createGameBoard();
    createGame.initialPieces();
    $(".cell").click(createGame.placePiece);
    $(".player1pieces").addClass("indicatePlayer");
    createGame.countPieces();
    createGame.checkRows(createGame.currentPlayer, createGame.checkColor);
    createGame.checkColumns(createGame.currentPlayer, createGame.checkColor);
    createGame.forwardDiagonal(createGame.currentPlayer, createGame.checkColor);
    createGame.backwardDiagonal(createGame.currentPlayer, createGame.checkColor);
}
function Othello() {
    var self = this;
    this.currentPlayer = "black";
    this.checkColor = "white";
    this.nextPlayer = "white";
    this.checkColor2 = "black";
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
    this.checkRows = function (current, color) {
        playerHasMoves = false;
        for (var i = 0; i < gameboard.length; i++) {
            var counter = 2;
            var counter2 = 2;
            for (var j = 0; j < gameboard.length - 1; j++) {
                if (gameboard[i][j].hasClass('empty') && gameboard[i][j + 1].children().hasClass(color) && gameboard[i][j + counter] !== undefined) {
                    var validIndex = [i, j];
                    var complementaryIndex = [];
                    while (gameboard[i][j + counter - 1].children().hasClass(color)) {
                        if (gameboard[i][j + counter].hasClass('empty')) {
                            break;
                        } else if (gameboard[i][j + counter].children().hasClass(color)) {
                            counter++;
                        } else {
                            console.log("valid index:", validIndex);
                            gameboard[i][j].addClass("eligibleSpace");
                            complementaryIndex = [i, j + counter];
                            console.log("comp index:", complementaryIndex);
                            playerHasMoves = true;
                            break;
                        }

                    }
                }
                if (gameboard[i][j].children().hasClass(current) && gameboard[i][j + 1].children().hasClass(color) && gameboard[i][j + counter] !== undefined) {
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
                            playerHasMoves = true;
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
                if (gameboard[i][j].hasClass('empty') && gameboard[i + 1][j].children().hasClass(color) && gameboard[i][j + counter] !== undefined) {
                    var validIndex = [];
                    var complementaryIndex = [i, j];
                    while (gameboard[i + counter - 1][j].children().hasClass(color)) {
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
                            playerHasMoves = true;
                            break;
                        }

                    }
                }
                if (gameboard[i][j].children().hasClass(current) && gameboard[i + 1][j].children().hasClass(color) && gameboard[i][j + counter] !== undefined) {
                    var validIndex2 = [];
                    var complementaryIndex2 = [i, j];
                    while (gameboard[i + counter2 - 1][j].children().hasClass(color) && gameboard[i + counter2][j].hasClass('empty')) {
                        if (gameboard[i + counter2][j].children().hasClass(current)) {
                            break;
                        } else if (gameboard[i + counter2][j].children().hasClass(color)) {
                            counter2++;
                        } else if (gameboard[i + counter2][j].hasClass('empty')) {
                            validIndex2 = [i + counter2, j];
                            console.log("valid index2:", validIndex2);
                            gameboard[i + counter2][j].addClass("eligibleSpace");
                            console.log("comp index2:", complementaryIndex2);
                            playerHasMoves = true;
                            break;
                        }

                    }
                }

            }
        }
    }
    this.forwardDiagonal = function (current, color) {
        for (var i = gameboard.length - 1; i > 0; i--) {
            var counter = 1;
            // var counter2 = 1;
            for (var j = gameboard.length - 1; j > 0; j--) {
                if (gameboard[i - counter][j + counter] !== undefined) {
                    if (gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (gameboard[i - counter][j + counter].children().hasClass(color)) {
                            counter++;
                            if (gameboard[i - counter][j + counter].children().hasClass(current)) {
                                console.log("valid index:", validIndex);
                                gameboard[i][j].addClass("eligibleSpace");
                                complementaryIndex = [i - counter, j + counter];
                                console.log("comp index:", complementaryIndex);
                                playerHasMoves = true;
                                counter = 1;
                                // counter2 = 1;
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
            var counter = 1;
            // var counter2 = 1;
            for (var j = 0; j < gameboard.length - 1; j++) {
                if (gameboard[i + counter][j + counter] !== undefined) {
                    if (gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (gameboard[i + counter][j + counter].children().hasClass(color)) {
                            counter++;
                            if (gameboard[i + counter][j + counter].children().hasClass(current)) {
                                console.log("valid index:", validIndex);
                                gameboard[i][j].addClass("eligibleSpace");
                                complementaryIndex = [i + counter, j + counter];
                                console.log("comp index:", complementaryIndex);
                                playerHasMoves = true;
                                counter = 1;
                                // counter2 = 1;
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    this.placePiece = function () {
        var preventClick = false;
        if ($(event.target).hasClass("eligibleSpace")) {
            preventClick = true;
        }
        if (preventClick) {
            preventClick = false;
            if ($(event.target).hasClass("empty")) {
                $(event.target).append($('<div>', {
                    'class': 'piece ' + self.currentPlayer
                })).removeClass("empty");
            }
            if (this.currentPlayer === "black") {
                this.currentPlayer = "white";
                this.checkColor = "black";
                $(".player2pieces").addClass("indicatePlayer");
                $(".player1pieces").removeClass("indicatePlayer");
            } else {
                this.currentPlayer = "black";
                this.checkColor = "white";
                $(".player1pieces").addClass("indicatePlayer");
                $(".player2pieces").removeClass("indicatePlayer");
            }
            if (this.nextPlayer === "black") {
                this.nextPlayer = "white";
                this.checkColor2 = "black";
            } else {
                this.nextPlayer = "black";
                this.checkColor2 = "white";
            }
            $(".cell").removeClass("eligibleSpace");
            self.flipPieces(self.nextPlayer, self.checkColor2);
            self.countPieces();

            self.checkRows(self.currentPlayer, self.checkColor);
            self.checkColumns(self.currentPlayer, self.checkColor);
            self.forwardDiagonal(self.currentPlayer, self.checkColor);
            self.backwardDiagonal(self.currentPlayer, self.checkColor);
            self.win();
        }
    }
    this.placePiece = this.placePiece.bind(this);
    this.flipPieces = function (current, color) {
        var counter = 1;
        var tempArr = [];
        var i = parseInt($(event.target).attr("data-x"));
        var j = parseInt($(event.target).attr("data-y"));
        if (gameboard[i + counter][j] !== undefined) {
            if (gameboard[i + counter][j].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i + counter][j].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i + counter][j].children().hasClass(color)) {
                    tempArr.push(gameboard[i + counter][j]);
                    counter++;
                    if (gameboard[i + counter + 1][j].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                }
            }
        }
        if (gameboard[i - counter][j] !== undefined) {
            if (gameboard[i - counter][j].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i - counter][j].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i - counter][j].children().hasClass(color)) {
                    tempArr.push(gameboard[i - counter][j]);
                    counter++;
                    if (gameboard[i - counter - 1][j].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //     console.log("has class white");
                    // }
                }
            }
            // else {
            //     console.log("has class black");
            // }
        }
        if (gameboard[i][j + 1] !== undefined) {
            if (gameboard[i][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i][j + 1].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i][j + counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i][j + counter]);
                    counter++;
                    if (gameboard[i][j + counter + 1].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //     console.log("has class white");
                    // }
                }
            }
            // else {
            //     console.log("has class black");
            // }
        }
        if (gameboard[i + 1][j + 1] !== undefined) {
            if (gameboard[i + 1][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i + 1][j + 1].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i + counter][j + counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i + counter][j + counter]);
                    counter++;
                    if (gameboard[i + counter + 1][j + counter + 1].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //
                    //     console.log("has class white");
                    // }
                }
            }
            // else {
            //     console.log("has class black");
            // }
        }
        if (gameboard[i + counter][j - counter] !== undefined) {
            if (gameboard[i + counter][j - counter].hasClass("empty")) {
                console.log("empty class");
            } else if (gameboard[i + 1][j - 1].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i + counter][j - counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i + counter][j - counter]);
                    counter++;
                    if (gameboard[i + counter + 1][j - counter - 1].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //     console.log("has class white");
                    // }
                }
            }
            // else {
            //     console.log("has class black");
            // }
        }
        if (gameboard[i][j - counter] !== undefined) {
            counter = 1;
            tempArr = [];
            if (gameboard[i][j - counter].children().hasClass(color)) {
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i][j - counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i][j - counter]);
                    counter++;
                    if (gameboard[i][j - counter - 1].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //     console.log("has class white");
                    // }
                }
            }
        }
        if (gameboard[i - counter][j - counter] !== undefined) {
            if (gameboard[i - 1][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i - 1][j - 1].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i - counter][j - counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i - counter][j - counter]);
                    counter++;
                    if (gameboard[i - (counter - 1)][j - (counter - 1)].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //
                    //     console.log("has class white");
                    // }
                }
            }
            // else {
            //     console.log("has class black");
            // }
        }
        if (gameboard[i - counter][j + counter] !== undefined) {
            if (gameboard[i - 1][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i - 1][j + 1].children().hasClass(color)) {
                counter = 1;
                tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i - counter][j + counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i - counter][j + counter]);
                    counter++;
                    if (gameboard[i - counter - 1][j + counter + 1].children().hasClass(current)) {
                        counter = 1;
                        tempArr = [];
                        break;
                    } else {
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                    }
                    // else {
                    //
                    //     // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                    //     console.log("has class white");
                    // }
                }
            }
            // else {
            //     console.log("has class black");
            // }
        }
    }
    this.countPieces = function () {
        var blackPieces = 0;
        var whitePieces = 0;
        for (var i = 0; i < gameboard.length; i++) {
            for (var j = 0; j < gameboard.length; j++) {
                if (gameboard[i][j].children().hasClass("black")) {
                    blackPieces++;
                }
                if (gameboard[i][j].children().hasClass("white")) {
                    whitePieces++
                }
                $("#player1pieces").text(blackPieces);
                $("#player2pieces").text(whitePieces);
            }
            this.win = function () {
                if (!playerHasMoves) {
                    self.countPieces();
                    if (parseFloat($("#player1pieces").text()) > parseFloat($("#player2pieces").text())) {
                        $(".player1pieces p").text("Oh my Glob, you win!");
                    } else {
                        $(".player2pieces p").text("Oh my Glob, you win!");
                    }
                }
            }
        }
    }
}



