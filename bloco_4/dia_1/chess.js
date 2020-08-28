
var piece;


if (piece.toLowerCase() === "pawn"){
    console.log("moves forward exactly one square")
} else if (piece.toLowerCase() === "rook"){
    console.log("moves any number of vacant squares forwards, backwards, left, or right in a straight line")
}else if (piece.toLowerCase() === "knight"){
    console.log("moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner")
}else if (piece.toLowerCase() === "bishop"){
    console.log("moves any number of vacant squares diagonally in a straight line")
}else if (piece.toLowerCase() === "queen"){
    console.log("moves any number of vacant squares in any direction")
}else if (piece.toLowerCase() === "king"){
    console.log("moves exactly one vacant square in any direction")
}else {
    console.log("erro");
}