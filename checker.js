var xcoor = [0,1,2,3,4,5];
var ycoor = [1,2,3,4,5,6];
var matrix = [xcoor, ycoor];

function interPointDistance(point1, point2) {
    //point 1 and point 2 are the numerical names of the poitns im evaluating the distance between
    var deltax = xcoor[point2] - xcoor[point1];
    var deltay = ycoor[point2] - ycoor[point1];
    var dist = Math.sqrt((Math.pow(deltax, 2) + Math.pow(deltay, 2)));
    return dist;
};
//console.log(interPointDistance(0,0))
//console.log(Math.sqrt(2))
//console.log('matrix');
//console.log(matrix);
var target = matrix[0][3];
//console.log(target);

//
