$(document).ready(initializeApp);

function initializeApp() {
    var createGame = new Othello();
    createGame.createGameBoard();
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
    this.nextPlayer = "white";
    this.checkColor2 = "black";
    this.createGameBoard = function () {
        for (var i = 0; i < 8; i++) {
            this.gameboard[i] = [];
            for (var j = 0; j < 8; j++) {
                this.gameboard[i][j] = $("<div>").addClass("cell").addClass("empty").attr({
                    "data-x": i,
                    "data-y": j
                });
                this.gameboard[i][j].appendTo(".board-container");
            }
        }
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
    }
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
        self.countPieces();
        self.passTurn(self.currentPlayer, self.checkColor);
    }
    this.passTurn = function (current, color) {
        var skip = false;
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                if (this.gameboard[rowIndex][cellIndex].hasClass("eligibleSpace")) {
                    console.log("Player turn has been skipped. It is now " + color + " turn.");
                    skip = true;
                    return;
                }
            }
        }
        if (skip) {
            this.currentPlayer = color;
            this.checkColor = current;
        }
    }
    this.placePiece = this.placePiece.bind(this);
    this.checkRows = function (current, color) {
        var counter = 1;
        // Loops through each row
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loops through each cell in each row
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if the current cell is empty
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    // Check if the cell to the right has the opposite color
                    if (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
                        // While cell to the right has the opposite color keep checking to the next cell until the a proceeding cell is the opposite color
                        while (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex][cellIndex + counter + 1] && this.gameboard[rowIndex][cellIndex + counter + 1].children().hasClass(current)) {
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    // Highlight the original space to yellow
                                    this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loops through each cell in each row
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if the current cell has a gamepiece of the current players color
                if (this.gameboard[rowIndex][cellIndex].children().hasClass(current)) {
                    // Check if the cell to the right has the opposite color
                    if (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
                        // While cell to the right has the opposite color keep checking to the next cell until the current cell is the opposite color
                        while (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex][cellIndex + counter + 1] && this.gameboard[rowIndex][cellIndex + counter + 1].hasClass("empty")) {
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    // Highlight the original space to yellow
                                    this.gameboard[rowIndex][cellIndex + counter + 1].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loops through each cell in each row
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if the current cell is empty
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    // Check if the cell to the right has the opposite color
                    if (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
                        // While cell to the right has the opposite color keep checking to the next cell until the a proceeding cell is the opposite color
                        while (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex][cellIndex - counter - 1] && this.gameboard[rowIndex][cellIndex - counter - 1].children().hasClass(current)) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loops through each cell in each row
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if the current cell has a gamepiece of the current players color
                if (this.gameboard[rowIndex][cellIndex].children().hasClass(current)) {
                    // Check if the cell to the right has the opposite color
                    if (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
                        // While cell to the right has the opposite color keep checking to the next cell until the current cell is the opposite color
                        while (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex][cellIndex - counter - 1] && this.gameboard[rowIndex][cellIndex - counter - 1].hasClass("empty")) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    this.gameboard[rowIndex][cellIndex - counter - 1].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
    }
    this.checkColumns = function (current, color) {
        var counter = 1;
        // Loop through each row
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loop through each cell
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if current cell is empty
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    // Check if row below exists, if cell below exists, and if the cell below has the opposite color game piece
                    if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
                        // If so, continue to check each proceeding gamepiece of the same color
                        while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color of the player
                            if (this.gameboard[rowIndex + counter + 1] && this.gameboard[rowIndex + counter + 1][cellIndex] && this.gameboard[rowIndex + counter + 1][cellIndex].children().hasClass(current)) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                if (this.gameboard[rowIndex][cellIndex].children().hasClass(current)) {
                    if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
                        while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex + counter + 1] && this.gameboard[rowIndex + counter + 1][cellIndex] && this.gameboard[rowIndex + counter + 1][cellIndex].hasClass("empty")) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex + counter + 1][cellIndex].hasClass("empty")) {
                                    this.gameboard[rowIndex + counter + 1][cellIndex].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++;
                        }
                    }
                }
            }
        }
    }
    this.forwardDiagonal = function (current, color) {
        var counter = 1;
        // Loop through each row
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loop through each cell
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if current cell is empty
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    // Check if row below exists, if cell below exists, and if the cell below has the opposite color game piece
                    if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(color)) {
                        // If so, continue to check each proceeding gamepiece of the same color
                        while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color of the player
                            if (this.gameboard[rowIndex + counter + 1] && this.gameboard[rowIndex + counter + 1][cellIndex + counter + 1] && this.gameboard[rowIndex + counter + 1][cellIndex + counter + 1].children().hasClass(current)) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                if (this.gameboard[rowIndex][cellIndex].children().hasClass(current)) {
                    if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(color)) {
                        while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex + counter + 1] && this.gameboard[rowIndex + counter + 1][cellIndex + counter + 1] && this.gameboard[rowIndex + counter + 1][cellIndex + counter + 1].hasClass("empty")) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex + counter + 1][cellIndex + counter + 1].hasClass("empty")) {
                                    this.gameboard[rowIndex + counter + 1][cellIndex + counter + 1].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++;
                        }
                    }
                }
            }
        }
    }
    this.backwardDiagonal = function (current, color) {
        var counter = 1;
        // Loop through each row
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            // Loop through each cell
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                // Check if current cell is empty
                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                    // Check if row below exists, if cell below exists, and if the cell below has the opposite color game piece
                    if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(color)) {
                        // If so, continue to check each proceeding gamepiece of the same color
                        while (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color of the player
                            if (this.gameboard[rowIndex - counter - 1] && this.gameboard[rowIndex - counter - 1][cellIndex + counter + 1] && this.gameboard[rowIndex - counter - 1][cellIndex + counter + 1].children().hasClass(current)) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex][cellIndex].hasClass("empty")) {
                                    this.gameboard[rowIndex][cellIndex].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++
                        }
                    }
                }
            }
        }
        for (var rowIndex = 0; rowIndex < this.gameboard.length; rowIndex++) {
            for (var cellIndex = 0; cellIndex < this.gameboard.length; cellIndex++) {
                counter = 1;
                if (this.gameboard[rowIndex][cellIndex].children().hasClass(current)) {
                    if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(color)) {
                        while (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(color)) {
                            // Keep going until you see a cell that is the same color
                            if (this.gameboard[rowIndex - counter - 1] && this.gameboard[rowIndex - counter - 1][cellIndex + counter + 1] && this.gameboard[rowIndex - counter - 1][cellIndex + counter + 1].hasClass("empty")) {
                                // Highlight the original space to yellow
                                if (this.gameboard[rowIndex - counter - 1][cellIndex + counter + 1].hasClass("empty")) {
                                    this.gameboard[rowIndex - counter - 1][cellIndex + counter + 1].addClass("eligibleSpace");
                                    counter = 1;
                                }
                                break;
                            }
                            counter++;
                        }
                    }
                }
            }
        }
}

    this.flipPieces = function (current, color) {
        var rowIndex = parseFloat($(event.target)[0].getAttribute("data-x"));
        var cellIndex = parseFloat($(event.target)[0].getAttribute("data-y"));
        var counter = 1;
        var tempArr = [];
        // Top cell
        if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex].children().hasClass(color)) {
            while (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex - counter][cellIndex]);
                counter++
                if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        counter = 1;
        tempArr = [];
        // Bottom Cell
        if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
            while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex + counter][cellIndex]);
                counter++
                if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        // Left Cell
        counter = 1;
        tempArr = [];
        if (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
            while (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex][cellIndex - counter]);
                counter++
                if (this.gameboard[rowIndex][cellIndex - counter] && this.gameboard[rowIndex][cellIndex - counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        // // Right cell
        counter = 1;
        tempArr = [];
        if (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
            while (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex][cellIndex + counter]);
                counter++
                if (this.gameboard[rowIndex][cellIndex + counter] && this.gameboard[rowIndex][cellIndex + counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        // Bottom Right
        counter = 1;
        tempArr = [];
        if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(color)) {
            while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex + counter][cellIndex + counter]);
                counter++
                if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter] && this.gameboard[rowIndex + counter][cellIndex + counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        // Top left
        counter = 1;
        tempArr = [];
        if ( this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex - counter] && this.gameboard[rowIndex - counter][cellIndex - counter].children().hasClass(color)) {
            while (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex - counter] && this.gameboard[rowIndex - counter][cellIndex - counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex - counter][cellIndex - counter]);
                counter++
                if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex - counter] && this.gameboard[rowIndex - counter][cellIndex - counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        // Top Right
        counter = 1;
        tempArr = [];
        if ( this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(color)) {
            while (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex - counter][cellIndex + counter]);
                counter++
                if (this.gameboard[rowIndex - counter] && this.gameboard[rowIndex - counter][cellIndex + counter] && this.gameboard[rowIndex - counter][cellIndex + counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
            }
        }
        // Bottom Left
        counter = 1;
        tempArr = [];
        if ( this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex - counter] && this.gameboard[rowIndex + counter][cellIndex - counter].children().hasClass(color)) {
            while (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex - counter] && this.gameboard[rowIndex + counter][cellIndex - counter].children().hasClass(color)) {
                tempArr.push(this.gameboard[rowIndex + counter][cellIndex - counter]);
                counter++
                if (this.gameboard[rowIndex + counter] && this.gameboard[rowIndex + counter][cellIndex - counter] && this.gameboard[rowIndex + counter][cellIndex - counter].children().hasClass(current)) {
                    for (var i = 0; i < tempArr.length; i++) {
                        tempArr[i].children().removeClass(color).addClass(current);
                    }
                    counter = 1;
                    tempArr = [];
                    break;
                }
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
            // this.win = function () {
            //     if (!playerHasMoves) {
            //         self.countPieces();
            //         if (parseFloat($("#player1pieces").text()) > parseFloat($("#player2pieces").text())) {
            //             $(".player1pieces p").text("Oh my Glob, you win!");
            //         } else {
            //             $(".player2pieces p").text("Oh my Glob, you win!");
            //         }
            //     }
            // }
        }
    }
}

