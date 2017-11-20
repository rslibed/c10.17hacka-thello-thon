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