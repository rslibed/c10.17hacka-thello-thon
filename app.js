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
    // createGame.forwardDiagonal(createGame.currentPlayer, createGame.checkColor);
    // createGame.backwardDiagonal(createGame.currentPlayer, createGame.checkColor);
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
        var allowClick = false;
        if ($(event.target).hasClass("eligibleSpace")) {
            allowClick = true;
        }
        if (allowClick) {
            allowClick = false;
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
            $(".cell").removeClass("eligibleSpace");
            self.countPieces();
            self.flipPieces(self.currentPlayer, self.checkColor);
            // self.forwardDiagonal(self.currentPlayer, self.checkColor);
            // self.backwardDiagonal(self.currentPlayer, self.checkColor);
        }
    }
    this.placePiece = this.placePiece.bind(this);
    this.checkRows = function (current, color) {
        // Loops through each row
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loops through each cell in each row
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                // Check if the current cell is empty
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    // Check if the cell to the right has the opposite color
                    if (this.gameboard[rowIndex][cellIndex + 1] && this.gameboard[rowIndex][cellIndex + 1].children().hasClass(color)) {
                        // While cell to the right has the opposite color keep checking
                        while (this.gameboard[rowIndex][cellIndex + 1] && this.gameboard[rowIndex][cellIndex + 1].children().hasClass(color)) {
                            // Keep going until you see a cell that is the opposite color
                            if (this.gameboard[rowIndex][cellIndex + 1] && this.gameboard[rowIndex][cellIndex + 1].children().hasClass(current)) {
                                this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                            }
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    if (this.gameboard[rowIndex][cellIndex - 1] && this.gameboard[rowIndex][cellIndex - 1].children().hasClass(color)) {
                        while (this.gameboard[rowIndex][cellIndex - 1] && this.gameboard[rowIndex][cellIndex - 1].children().hasClass(color)) {
                            if (this.gameboard[rowIndex][cellIndex - 1] && this.gameboard[rowIndex][cellIndex - 1].children().hasClass(current)) {
                                break;
                            }
                            this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                        }
                    }
                }
            }
        }
    }
    this.checkColumns = function (current, color) {
        for (var rowIndex = 0; rowIndex < this.gameboard.length - 1; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    if (this.gameboard[rowIndex + 1] && this.gameboard[rowIndex + 1][cellIndex] && this.gameboard[rowIndex + 1][cellIndex].children().hasClass(color)) {
                        while (this.gameboard[rowIndex + 1] && this.gameboard[rowIndex + 1][cellIndex] && this.gameboard[rowIndex + 1][cellIndex].children().hasClass(color)) {
                            if (this.gameboard[rowIndex + 1] && this.gameboard[rowIndex + 1][cellIndex] && this.gameboard[rowIndex + 1][cellIndex].children().hasClass(current)) {
                                break;
                            }
                            this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length - 1; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    if (this.gameboard[rowIndex - 1] && this.gameboard[rowIndex - 1][cellIndex] && this.gameboard[rowIndex - 1][cellIndex].children().hasClass(color)) {
                        while (this.gameboard[rowIndex - 1] && this.gameboard[rowIndex - 1][cellIndex] && this.gameboard[rowIndex - 1][cellIndex].children().hasClass(color)) {
                            if (this.gameboard[rowIndex - 1] && this.gameboard[rowIndex - 1][cellIndex] && this.gameboard[rowIndex - 1][cellIndex].children().hasClass(current)) {
                                break;
                            }
                            this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                        }
                    }
                }
            }
        }
    }
    // this.forwardDiagonal = function () {
    //     console.log("Forward Diagonal function");
    // }
    // this.backwardDiagonal = function () {
    //     console.log("Backward Diagonal function");
    // }

    this.flipPieces = function (current, color) {
        var rowIndex = parseFloat($(event.target)[0].getAttribute("data-x"));
        var cellIndex = parseFloat($(event.target)[0].getAttribute("data-y"));
        var counter = 1;
        var tempArr = [];
        // Top cell
        if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex].children().hasClass(color)) {
            counter = 1;
            tempArr = [];
            while (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex-counter][cellIndex]);
                counter++
                if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 2;
                    tempArr = [];
                    break;
                }
            }
        }
        // Bottom Cell
        if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
            counter = 1;
            tempArr = [];
            while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex + counter][cellIndex]);
                counter++
                if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 2;
                    tempArr = [];
                    break;
                }
            }
        }
        // Left Cell
        if (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
            counter = 1;
            tempArr = [];
            while (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex][cellIndex + counter]);
                counter++
                if (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 2;
                    tempArr = [];
                    break;
                }
            }
        }
        // // Right cell
        if (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
            counter = 1;
            tempArr = [];
            while (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex][cellIndex - counter]);
                counter++
                if (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 2;
                    tempArr = [];
                    break;
                }
            }
        }
        self.checkRows(color, current);
        self.checkColumns(color, current);
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

