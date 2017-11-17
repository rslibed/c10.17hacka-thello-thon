$(document).ready(initializeApp);

var gameboard = new Array(8);

function initializeApp() {
    var createGame = new Othello();
    createGame.createGameBoard();
    createGame.initialPieces();
    $(".cell").click(createGame.placePiece);
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
    this.checkColor2 = "black"
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
            } else {
                this.currentPlayer = "black";
                this.checkColor = "white";
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
            self.checkRows(self.currentPlayer, self.checkColor);
            self.checkColumns(self.currentPlayer, self.checkColor);
            self.forwardDiagonal(self.currentPlayer, self.checkColor);
            self.backwardDiagonal(self.currentPlayer, self.checkColor);
        }
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
            var counter = 1;
            var counter2 = 1;
            for (var j = 0; j < gameboard.length - 1; j++) {
                if (gameboard[i + 1][j + 1] !== undefined) {
                    if (gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (gameboard[i + counter][j + counter].children().hasClass(color)) {
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

    this.flipPieces = function (current, color) {
        // var flipArray = $(".cell");
        // var clickedCellIndex = $(event.target).index();
        // var cellToRight = flipArray[clickedCellIndex + 1];
        // var rightToNeighbor = flipArray[clickedCellIndex + 2];
        // if (self.nextPlayer === current) {
        //     if (cellToRight.getAttribute("class") !== "cell empty") {
        //         console.log("Cell to the right is not empty");
        //         if (cellToRight.children[0].getAttribute("class") === "piece " + color) {
        //             if (rightToNeighbor.children[0].getAttribute("class") === "piece " + current) {
        //                 console.log($(cellToRight).find(".piece").removeClass(color).addClass(current));
        //             }
        //         }
        //     } else {
        //         console.log("cell to right is empty");
        //     }
        console.log("Coordingates of cell x, y", $(event.target).attr("data-x"), $(event.target).attr("data-y"));
        var j = parseInt($(event.target).attr("data-y"));
        var i = parseInt($(event.target).attr("data-x"));
        if (gameboard[i + 1][j] !== undefined) {
            if (gameboard[i + 1][j].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i + 1][j].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i + counter][j].children().hasClass(color)) {
                    tempArr.push(gameboard[i + counter][j]);
                    if (gameboard[i + counter + 1][j].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i - 1][j] !== undefined) {
            if (gameboard[i - 1][j].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i - 1][j].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i - counter][j].children().hasClass(color)) {
                    tempArr.push(gameboard[i - counter][j]);
                    if (gameboard[i - counter - 1][j].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i][j + 1] !== undefined) {
            if (gameboard[i][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i][j + 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i][j + counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i][j + counter]);
                    if (gameboard[i][j + counter + 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i + 1][j + 1] !== undefined) {
            if (gameboard[i + 1][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i + 1][j + 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i + counter][j + counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i + counter][j + counter]);
                    if (gameboard[i + counter + 1][j + counter + 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i+ 1][j - 1] !== undefined) {
            if (gameboard[i + 1][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i + 1][j - 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i + counter][j - counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i + counter][j - counter]);
                    if (gameboard[i + counter + 1][j - counter - 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i][j - 1] !== undefined) {
            if (gameboard[i][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i][j - 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i][j - counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i][j - counter]);
                    if (gameboard[i][j - counter - 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i-1][j - 1] !== undefined) {
            if (gameboard[i-1][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i-1][j - 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i- counter][j - counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i - counter][j - counter]);
                    if (gameboard[i - counter -1][j - counter - 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (gameboard[i-1][j + 1] !== undefined) {
            if (gameboard[i-1][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (gameboard[i-1][j + 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (gameboard[i+1][j].children().hasClass(color)) {
                while (gameboard[i- counter][j + counter].children().hasClass(color)) {
                    tempArr.push(gameboard[i - counter][j + counter]);
                    if (gameboard[i - counter -1][j + counter + 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
    }
}



