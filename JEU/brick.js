let canvas, ctx, balle;
let hc;
let lc;
let img1,img2,img3,img4,img5,img7;
let score1 = 0;
let score2 = 0;
let ballRadius = 10;
let brickRowCount = 52; //Nombre de colonnes
let brickColumnCount = 26; //nombre de lignes
let brickWidth = 38;  //Largeur des bricks
let brickHeight = 38; //Longueur des bricks
let brickOffsetTop = -38; // coordonnée de la première brick en Y
let brickOffsetLeft = -38; //coordonnée de la première brick en X
let previousPosX = 0;
let previousPosY = 0;
let previousPosX2 = 0;
let previousPosY2 = 0;
let c = 120;
let play = 2;
let t;
let timer_is_on = 0;
let vit1 = 10;
let vit2 =10;


//construction de la map :
let bricks = [
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 3 },{status: 3},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 3 },{status: 3},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 3 },{status: 3 },{status: 2 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 3 },{status: 3 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 3 },{status: 3 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 2 },{status: 0 },{status: 0 },{status: 2 },{status: 2 },{status: 0 },{status: 3 },{status: 3 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 3 },{status: 3 },{status: 1 },{status: 0 },{status: 2 },{status: 2 },{status: 2 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 3 },{status: 3 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 2 },{status: 2 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 2 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }], // sur cette ligne les 3 sont des rouges
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0},{status: 1 }], // sur cette ligne les 3 sont des rouges
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0},{status: 1 }], // sur cette ligne les 3 sont des rouges
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 2 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0},{status: 1 }], // sur cette ligne les 3 sont des rouges
[{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 2 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 3 },{status: 3 },{status: 2 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 3 },{status: 3 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 3 },{status: 3 },{status: 2 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 3 },{status: 3 },{status: 2 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 3 },{status: 3 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 3 },{status: 3 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 2 },{status: 2 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 3 },{status: 3 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 1},{status: 1 }],
[{status: 1 },{status: 3 },{status: 3 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1},{status: 1 }],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 }]
];

function drawBricks() {
  for(let c=0; c<brickColumnCount; c++) {
    for(let r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1 || bricks[c][r].status == 2) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fill();
        ctx.save();
        ctx.clip();

        switch (bricks[c][r].status) {
            case 1 :
                    ctx.drawImage(img1, 0, 0, 1900, 912);
                    break;
            case 2 :
                    ctx.drawImage(img3, 0, 0, 1900, 912);
                    break;
            default:
           
                    ctx.drawImage(img1, 0, 0, 1900, 912);
                    break;
        }
        ctx.restore();
        ctx.closePath();

       }
    }
  }
}
function drawBricks2() {
  for(let c=0; c<brickColumnCount; c++) {
    for(let r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 3 || bricks[c][r].status == 4 || bricks[c][r].status == 5|| bricks[c][r].status == 6) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;

        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fill();
        ctx.save();
        ctx.clip();
            switch (bricks[c][r].status) {
            case 3 :
                    ctx.drawImage(img4, 0, 0, 1900, 912);
                    break;
            case 4 :
                    ctx.drawImage(img5, 0, 0, 1900, 912);
                    break;
           /* case 5 :
                    ctx.drawImage(img6, 0, 0, 1900, 912);
                    break;*/
            case 6 :
                    ctx.drawImage(img7, 0, 0, 1900, 912);
                    break;

            default:
           
                    ctx.drawImage(img1, 0, 0, 1900, 912);
                    break;
        }

        ctx.restore();
        ctx.closePath();
    } 
  }
 }
}

function drawShad() {
  for(let c=0; c<brickColumnCount; c++) {
    for(let r=0; r<brickRowCount; r++) {
        if(bricks[c][r].status == 1 || bricks[c][r].status == 2 ) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.save();
        addShadows();
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    } 
  }
 }
}

