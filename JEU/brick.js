let canvas, ctx, balle;
let hc;
let lc;
let img1;
var score = 0;
let tableauQueue = {};
let ballRadius = 10;
let brickRowCount = 5; //Nombre de colonnes
let brickColumnCount = 3; //nombre de lignes
let brickWidth = 38;  //Largeur des bricks
let brickHeight = 38; //Longueur des bricks
let brickOffsetTop = 0; // coordonnée de la première brick en Y
let brickOffsetLeft = 0; //coordonnée de la première brick en X
let bricks = [
	[{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 }],
    [{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 }],
    [{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 }]
];