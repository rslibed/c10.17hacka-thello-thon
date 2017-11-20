$(document).ready(initializeApp);
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
    this.gameboard = [];
    this.currentPlayer = "black";
    this.checkColor = "white";
    // this.nextPlayer = "white";
    // this.checkColor2 = "black"
    this.createGameBoard = function () {
        for (var i = 0; i < 8; i++) { //y
            this.gameboard[i] = [];
            for (var j = 0; j < 8; j++) {  //x
                this.gameboard[i][j] = $("<div>").addClass("cell").addClass("empty").attr({
                    "data-x": i,
                    "data-y": j
                });
                this.gameboard[i][j].appendTo(".board-container");
            }
        }
    }
    this.initialPieces = function () {
        this.gameboard[3][3].append($('<div>', {
            'class': 'piece white'
        })).removeClass("empty");
        this.gameboard[3][4].append($('<div>', {
            'class': 'piece black'
        })).removeClass("empty");
        this.gameboard[4][3].append($('<div>', {
            'class': 'piece black'
        })).removeClass("empty");
        this.gameboard[4][4].append($('<div>', {
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
            if (this.nextPlayer === "black") {
                this.nextPlayer = "white";
                this.checkColor2 = "black";
            } else {
                this.nextPlayer = "black";
                this.checkColor2 = "white";
            }
            $(".cell").removeClass("eligibleSpace");
            self.countPieces();
            self.flipPieces(self.nextPlayer, self.checkColor2);
            self.checkRows(self.currentPlayer, self.checkColor);
            self.checkColumns(self.currentPlayer, self.checkColor);
            self.forwardDiagonal(self.currentPlayer, self.checkColor);
            self.backwardDiagonal(self.currentPlayer, self.checkColor);
        }
    }
    this.placePiece = this.placePiece.bind(this);
    this.checkRows = function (current, color) {
        for (var i = 0; i < this.gameboard.length; i++) {
            var counter = 2;
            var counter2 = 2;
            for (var j = 0; j < this.gameboard.length - 1; j++) {
                if (this.gameboard[i][j].hasClass('empty') && this.gameboard[i][j + 1].children().hasClass(color)) {
                    var validIndex = [i, j];
                    var complementaryIndex = [];
                    while (this.gameboard[i][j + counter - 1].children().hasClass(color) && (j + counter) < 7) {
                        if (this.gameboard[i][j + counter].hasClass('empty')) {
                            break;
                        } else if (this.gameboard[i][j + counter].children().hasClass(color)) {
                            counter++;
                        } else {
                            console.log("valid index:", validIndex);
                            this.gameboard[i][j].addClass("eligibleSpace");
                            complementaryIndex = [i, j + counter];
                            console.log("comp index:", complementaryIndex);
                            break;
                        }

                    }
                }
                if (this.gameboard[i][j].children().hasClass(current) && this.gameboard[i][j + 1].children().hasClass(color)) {
                    var validIndex2 = [];
                    var complementaryIndex2 = [i, j];
                    while (this.gameboard[i][j + counter2 - 1].children().hasClass(color) && this.gameboard[i][j + counter2].hasClass('empty')) {
                        if (this.gameboard[i][j + counter2].children().hasClass(current)) {
                            break;
                        } else if (this.gameboard[i][j + counter2].children().hasClass(color)) {
                            counter2++;
                            //keep going
                        } else if (this.gameboard[i][j + counter2].hasClass('empty')) {
                            validIndex2 = [i, j + counter2];
                            console.log("valid index2:", validIndex2);
                            this.gameboard[i][j + counter2].addClass("eligibleSpace");
                            console.log("comp index2:", complementaryIndex2);
                            break;
                        }

                    }
                }
            }
        }
    }
    this.checkColumns = function (current, color) {
        for (var i = 0; i < this.gameboard.length - 1; i++) {
            var counter = 2;
            var counter2 = 2;
            for (var j = 0; j < this.gameboard.length; j++) {
                if (this.gameboard[i][j].hasClass('empty') && this.gameboard[i + 1][j].children().hasClass(color)) {
                    var validIndex = [];
                    var complementaryIndex = [i, j];
                    while (this.gameboard[i + counter - 1][j].children().hasClass(color) && (i + counter) < 7) {
                        if (this.gameboard[i + counter][j].hasClass('empty')) {
                            break;
                        } else if (this.gameboard[i + counter][j].children().hasClass(color)) {
                            counter++;
                            //keep going
                        } else {
                            console.log("valid index:", validIndex);
                            this.gameboard[i][j].addClass("eligibleSpace");
                            complementaryIndex = [i + counter, j];
                            console.log("comp index:", complementaryIndex);
                            break;
                        }

                    }
                }
                if (this.gameboard[i][j].children().hasClass(current) && this.gameboard[i + 1][j].children().hasClass(color)) {
                    var validIndex2 = [];
                    var complementaryIndex2 = [i, j];
                    while (this.gameboard[i + counter2 - 1][j].children().hasClass(color) && this.gameboard[i + counter2][j].hasClass('empty')) {
                        if (this.gameboard[i + counter2][j].children().hasClass(current)) {
                            break;
                        } else if (this.gameboard[i + counter2][j].children().hasClass(color)) {
                            counter2++;
                        } else if (this.gameboard[i + counter2][j].hasClass('empty')) {
                            validIndex2 = [i + counter2, j];
                            console.log("valid index2:", validIndex2);
                            this.gameboard[i + counter2][j].addClass("eligibleSpace");
                            console.log("comp index2:", complementaryIndex2);
                            break;
                        }

                    }
                }
            }
        }
    }
    this.forwardDiagonal = function (current, color) {
        for (var i = this.gameboard.length - 1; i > 0; i--) {
            var counter = 1;
            var counter2 = 1;
            for (var j = this.gameboard.length - 1; j > 0; j--) {
                if (this.gameboard[i - 1][j + 1] !== undefined) {
                    if (this.gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (this.gameboard[i - counter][j + counter].children().hasClass(color)) {
                            if (this.gameboard[i - counter][j + counter].hasClass('empty')) {
                                counter = 1;
                                counter2 = 1;
                                break;
                            }
                            counter++;
                            if (this.gameboard[i - counter][j + counter].children().hasClass(current)) {
                                console.log("valid index:", validIndex);
                                this.gameboard[i][j].addClass("eligibleSpace");
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
        for (var i = 0; i < this.gameboard.length - 1; i++) {
            var counter = 1;
            var counter2 = 1;
            for (var j = 0; j < this.gameboard.length - 1; j++) {
                if (this.gameboard[i + 1][j + 1] !== undefined) {
                    if (this.gameboard[i][j].hasClass("empty")) {
                        var validIndex = [];
                        var complementaryIndex = [i, j];
                        while (this.gameboard[i + counter][j + counter].children().hasClass(color)) {
                            if (this.gameboard[i + counter][j + counter].hasClass('empty')) {
                                counter = 1;
                                counter2 = 1;
                                break;
                            }
                            counter++;
                            if (this.gameboard[i + counter][j + counter].children().hasClass(current)) {
                                console.log("valid index:", validIndex);
                                this.gameboard[i][j].addClass("eligibleSpace");
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
        if (this.gameboard[i + 1][j] !== undefined) {
            if (this.gameboard[i + 1][j].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i + 1][j].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i + counter][j].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i + counter][j]);
                    if (this.gameboard[i + counter + 1][j].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i - 1][j] !== undefined) {
            if (this.gameboard[i - 1][j].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i - 1][j].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i - counter][j].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i - counter][j]);
                    if (this.gameboard[i - counter - 1][j].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i][j + 1] !== undefined) {
            if (this.gameboard[i][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i][j + 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i][j + counter].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i][j + counter]);
                    if (this.gameboard[i][j + counter + 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i + 1][j + 1] !== undefined) {
            if (this.gameboard[i + 1][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i + 1][j + 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i + counter][j + counter].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i + counter][j + counter]);
                    if (this.gameboard[i + counter + 1][j + counter + 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i+ 1][j - 1] !== undefined) {
            if (this.gameboard[i + 1][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i + 1][j - 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i + counter][j - counter].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i + counter][j - counter]);
                    if (this.gameboard[i + counter + 1][j - counter - 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i][j - 1] !== undefined) {
            if (this.gameboard[i][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i][j - 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i][j - counter].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i][j - counter]);
                    if (this.gameboard[i][j - counter - 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i-1][j - 1] !== undefined) {
            if (this.gameboard[i-1][j - 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i-1][j - 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i- counter][j - counter].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i - counter][j - counter]);
                    if (this.gameboard[i - (counter -1)][j -(counter - 1)].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
        if (this.gameboard[i-1][j + 1] !== undefined) {
            if (this.gameboard[i-1][j + 1].hasClass("empty")) {
                console.log("has empty class");
            } else if (this.gameboard[i-1][j + 1].children().hasClass(color)) {
                var counter = 1;
                var tempArr = [];
                // if (this.gameboard[i+1][j].children().hasClass(color)) {
                while (this.gameboard[i- counter][j + counter].children().hasClass(color)) {
                    tempArr.push(this.gameboard[i - counter][j + counter]);
                    if (this.gameboard[i - counter -1][j + counter + 1].children().hasClass(current)) {
                        var counter = 1;
                        for (var i = 0; i < tempArr.length; i++) {
                            tempArr[i].children().removeClass(color).addClass(current);
                        }
                        break;
                    } else {

                        // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
                        counter++;
                        console.log("has class white");
                    }
                }
            } else {
                console.log("has class black");
            }
        }
    }
    this.countPieces = function () {
        var blackPieces = 0;
        var whitePieces = 0;
        for (var i = 0; i < this.gameboard.length; i++) {
            for (var j = 0; j < this.gameboard.length; j++) {
                if (this.gameboard[i][j].children().hasClass("black")) {
                    blackPieces++;
                }
                if (this.gameboard[i][j].children().hasClass("white")) {
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

