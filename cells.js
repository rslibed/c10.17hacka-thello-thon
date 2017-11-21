// function findEmptyCells(){
//     var indicesOfEmpty = [];
//     var index = rowArray.indexOf(empty);
//     while (index !== -1){
//         indicesOfEmpty.push(index);
//         index = rowArray.indexOf(empty, index + 1);
//     }
//     console.log(indicesOfEmpty);
// }
// findEmptyCells();
// var empty = $('.empty');  //This is connected to nothing.

//For player black
//
// function findLegalMoveInRow(player){
//     if (rowArray[index-1] === undefined || rowArray[index-1] === player || rowArray[index-1] === empty) {
//         break;
//     } else {
//         i = rowArray[index]
//     }
//
// }

// this.flipPieces = function (current, color) {
//     // var flipArray = $(".cell");
//     // var clickedCellIndex = $(event.target).index();
//     // var cellToRight = flipArray[clickedCellIndex + 1];
//     // var rightToNeighbor = flipArray[clickedCellIndex + 2];
//     // if (self.nextPlayer === current) {
//     //     if (cellToRight.getAttribute("class") !== "cell empty") {
//     //         console.log("Cell to the right is not empty");
//     //         if (cellToRight.children[0].getAttribute("class") === "piece " + color) {
//     //             if (rightToNeighbor.children[0].getAttribute("class") === "piece " + current) {
//     //                 console.log($(cellToRight).find(".piece").removeClass(color).addClass(current));
//     //             }
//     //         }
//     //     } else {
//     //         console.log("cell to right is empty");
//     //     }
//     console.log("Coordingates of cell x, y", $(event.target).attr("data-x"), $(event.target).attr("data-y"));
//     var j = parseInt($(event.target).attr("data-y"));
//     var i = parseInt($(event.target).attr("data-x"));
//     if (this.gameboard[i + 1][j] !== undefined) {
//         if (this.gameboard[i + 1][j].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i + 1][j].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i + counter][j].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i + counter][j]);
//                 if (this.gameboard[i + counter + 1][j].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i - 1][j] !== undefined) {
//         if (this.gameboard[i - 1][j].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i - 1][j].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i - counter][j].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i - counter][j]);
//                 if (this.gameboard[i - counter - 1][j].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i][j + 1] !== undefined) {
//         if (this.gameboard[i][j + 1].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i][j + 1].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i][j + counter].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i][j + counter]);
//                 if (this.gameboard[i][j + counter + 1].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i + 1][j + 1] !== undefined) {
//         if (this.gameboard[i + 1][j + 1].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i + 1][j + 1].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i + counter][j + counter].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i + counter][j + counter]);
//                 if (this.gameboard[i + counter + 1][j + counter + 1].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i+ 1][j - 1] !== undefined) {
//         if (this.gameboard[i + 1][j - 1].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i + 1][j - 1].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i + counter][j - counter].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i + counter][j - counter]);
//                 if (this.gameboard[i + counter + 1][j - counter - 1].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i][j - 1] !== undefined) {
//         if (this.gameboard[i][j - 1].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i][j - 1].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i][j - counter].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i][j - counter]);
//                 if (this.gameboard[i][j - counter - 1].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i-1][j - 1] !== undefined) {
//         if (this.gameboard[i-1][j - 1].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i-1][j - 1].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i- counter][j - counter].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i - counter][j - counter]);
//                 if (this.gameboard[i - (counter -1)][j -(counter - 1)].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
//     if (this.gameboard[i-1][j + 1] !== undefined) {
//         if (this.gameboard[i-1][j + 1].hasClass("empty")) {
//             console.log("has empty class");
//         } else if (this.gameboard[i-1][j + 1].children().hasClass(color)) {
//             var counter = 1;
//             var tempArr = [];
//             // if (this.gameboard[i+1][j].children().hasClass(color)) {
//             while (this.gameboard[i- counter][j + counter].children().hasClass(color)) {
//                 tempArr.push(this.gameboard[i - counter][j + counter]);
//                 if (this.gameboard[i - counter -1][j + counter + 1].children().hasClass(current)) {
//                     var counter = 1;
//                     for (var i = 0; i < tempArr.length; i++) {
//                         tempArr[i].children().removeClass(color).addClass(current);
//                     }
//                     break;
//                 } else {
//
//                     // this.gameboard[i + counter][j].children().removeClass(color).addClass(current);
//                     counter++;
//                     console.log("has class white");
//                 }
//             }
//         } else {
//             console.log("has class black");
//         }
//     }
// }

// this.checkRows = function (current, color) {
//     for (var i = 0; i < this.gameboard.length; i++) {
//         var counter = 2;
//         var counter2 = 2;
//         for (var j = 0; j < this.gameboard.length - 1; j++) {
//             if (this.gameboard[i][j].hasClass('empty') && this.gameboard[i][j + 1].children().hasClass(color)) {
//                 var validIndex = [i, j];
//                 var complementaryIndex = [];
//                 while (this.gameboard[i][j + counter - 1].children().hasClass(color) && (j + counter) < 7) {
//                     if (this.gameboard[i][j + counter].hasClass('empty')) {
//                         break;
//                     } else if (this.gameboard[i][j + counter].children().hasClass(color)) {
//                         counter++;
//                     } else {
//                         console.log("valid index:", validIndex);
//                         this.gameboard[i][j].addClass("eligibleSpace");
//                         complementaryIndex = [i, j + counter];
//                         console.log("comp index:", complementaryIndex);
//                         break;
//                     }
//
//                 }
//             }
//             if (this.gameboard[i][j].children().hasClass(current) && this.gameboard[i][j + 1].children().hasClass(color)) {
//                 var validIndex2 = [];
//                 var complementaryIndex2 = [i, j];
//                 while (this.gameboard[i][j + counter2 - 1].children().hasClass(color) && this.gameboard[i][j + counter2].hasClass('empty')) {
//                     if (this.gameboard[i][j + counter2].children().hasClass(current)) {
//                         break;
//                     } else if (this.gameboard[i][j + counter2].children().hasClass(color)) {
//                         counter2++;
//                         //keep going
//                     } else if (this.gameboard[i][j + counter2].hasClass('empty')) {
//                         validIndex2 = [i, j + counter2];
//                         console.log("valid index2:", validIndex2);
//                         this.gameboard[i][j + counter2].addClass("eligibleSpace");
//                         console.log("comp index2:", complementaryIndex2);
//                         break;
//                     }
//
//                 }
//             }
//         }
//     }
// }
// this.checkColumns = function (current, color) {
//     for (var i = 0; i < this.gameboard.length - 1; i++) {
//         var counter = 2;
//         var counter2 = 2;
//         for (var j = 0; j < this.gameboard.length; j++) {
//             if (this.gameboard[i][j].hasClass('empty') && this.gameboard[i + 1][j].children().hasClass(color)) {
//                 var validIndex = [];
//                 var complementaryIndex = [i, j];
//                 while (this.gameboard[i + counter - 1][j].children().hasClass(color) && (i + counter) < 7) {
//                     if (this.gameboard[i + counter][j].hasClass('empty')) {
//                         break;
//                     } else if (this.gameboard[i + counter][j].children().hasClass(color)) {
//                         counter++;
//                         //keep going
//                     } else {
//                         console.log("valid index:", validIndex);
//                         this.gameboard[i][j].addClass("eligibleSpace");
//                         complementaryIndex = [i + counter, j];
//                         console.log("comp index:", complementaryIndex);
//                         break;
//                     }
//
//                 }
//             }
//             if (this.gameboard[i][j].children().hasClass(current) && this.gameboard[i + 1][j].children().hasClass(color)) {
//                 var validIndex2 = [];
//                 var complementaryIndex2 = [i, j];
//                 while (this.gameboard[i + counter2 - 1][j].children().hasClass(color) && this.gameboard[i + counter2][j].hasClass('empty')) {
//                     if (this.gameboard[i + counter2][j].children().hasClass(current)) {
//                         break;
//                     } else if (this.gameboard[i + counter2][j].children().hasClass(color)) {
//                         counter2++;
//                     } else if (this.gameboard[i + counter2][j].hasClass('empty')) {
//                         validIndex2 = [i + counter2, j];
//                         console.log("valid index2:", validIndex2);
//                         this.gameboard[i + counter2][j].addClass("eligibleSpace");
//                         console.log("comp index2:", complementaryIndex2);
//                         break;
//                     }
//
//                 }
//             }
//         }
//     }
// }
// this.forwardDiagonal = function (current, color) {
//     for (var i = this.gameboard.length - 1; i > 0; i--) {
//         var counter = 1;
//         var counter2 = 1;
//         for (var j = this.gameboard.length - 1; j > 0; j--) {
//             if (this.gameboard[i - 1][j + 1] !== undefined) {
//                 if (this.gameboard[i][j].hasClass("empty")) {
//                     var validIndex = [];
//                     var complementaryIndex = [i, j];
//                     while (this.gameboard[i - counter][j + counter].children().hasClass(color)) {
//                         if (this.gameboard[i - counter][j + counter].hasClass('empty')) {
//                             counter = 1;
//                             counter2 = 1;
//                             break;
//                         }
//                         counter++;
//                         if (this.gameboard[i - counter][j + counter].children().hasClass(current)) {
//                             console.log("valid index:", validIndex);
//                             this.gameboard[i][j].addClass("eligibleSpace");
//                             complementaryIndex = [i - counter, j + counter];
//                             console.log("comp index:", complementaryIndex);
//                             counter = 1;
//                             counter2 = 1;
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
// this.backwardDiagonal = function (current, color) {
//     for (var i = 0; i < this.gameboard.length - 1; i++) {
//         var counter = 1;
//         var counter2 = 1;
//         for (var j = 0; j < this.gameboard.length - 1; j++) {
//             if (this.gameboard[i + 1][j + 1] !== undefined) {
//                 if (this.gameboard[i][j].hasClass("empty")) {
//                     var validIndex = [];
//                     var complementaryIndex = [i, j];
//                     while (this.gameboard[i + counter][j + counter].children().hasClass(color)) {
//                         if (this.gameboard[i + counter][j + counter].hasClass('empty')) {
//                             counter = 1;
//                             counter2 = 1;
//                             break;
//                         }
//                         counter++;
//                         if (this.gameboard[i + counter][j + counter].children().hasClass(current)) {
//                             console.log("valid index:", validIndex);
//                             this.gameboard[i][j].addClass("eligibleSpace");
//                             complementaryIndex = [i + counter, j + counter];
//                             console.log("comp index:", complementaryIndex);
//                             counter = 1;
//                             counter2 = 1;
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }