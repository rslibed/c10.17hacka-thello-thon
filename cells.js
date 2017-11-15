// findEmptyCellsfunction findEmptyCells(){
//
//     var emptyCells = $(".empty");
//     var indicesOfEmpty = [];
//     var index = $(".board-container").indexOf(emptyCells);
//     while (index !== -1){
//         indicesOfEmpty.push(index);
//         index = $(".board-container").indexOf(emptyCells, index + 1);
//     }
//     console.log(indicesOfEmpty);
// }
// findEmptyCells();
//
//
// // var empty = $('.empty');  //This is connected to nothing.
// //
// // // For player black
//
// // function findLegalMoveInRow(player){
// //     if (rowArray[index-1] === undefined || rowArray[index-1] === player || rowArray[index-1] === empty) {
// //         break;
// //     } else {
// //         i = rowArray[index]
// //     }
// //
// // }