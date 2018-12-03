let canvas, ctx, balle;
let hc;
let lc;
let img1;
var score1 = 0;
var score2 = 0;
let tableauQueue = {};
let ballRadius = 10;
let brickRowCount = 50; //Nombre de colonnes
let brickColumnCount = 7; //nombre de lignes
let brickWidth = 38;  //Largeur des bricks
let brickHeight = 38; //Longueur des bricks
let brickOffsetTop = 0; // coordonnée de la première brick en Y
let brickOffsetLeft = 0; //coordonnée de la première brick en X
let previousPosX = 0;
let previousPosY = 0;
let previousPosX2 = 0;
let previousPosY2 = 0;
let bricks = [
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0}],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 2 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0}],
[{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1}],
[{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1}],
[{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 1}],
[{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1}],
[{status: 3 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 1 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 1 },{status: 2 },{status: 2 },{status: 0 },{status: 0 },{status: 2 },{status: 2 },{status: 0 },{status: 0 },{status: 0 },{status: 1 },{status: 1 },{status: 0 },{status: 0 },{status: 1 },{status: 0 },{status: 0 },{status: 0 },{status: 1}]
];

function drawBricks() {
  for(let c=0; c<brickColumnCount; c++) {
    for(let r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        //ctx.fillStyle = "black";
        ctx.fill();
		ctx.save();
        ctx.clip();
        ctx.drawImage(img1, 0, 0, 1900, 900);
        ctx.restore();
        ctx.closePath();
      }
        if(bricks[c][r].status == 2) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        //ctx.fillStyle = "black";
        ctx.fill();
		ctx.save();
        ctx.clip();
        ctx.drawImage(img3, 0, 0, 1900, 900);
        ctx.restore();
        ctx.closePath();
      }

       if(bricks[c][r].status == 3) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        //ctx.fillStyle = "black";
        ctx.fill();
		ctx.save();
        ctx.clip();
        ctx.drawImage(img4, 0, 0, 1900, 900);
        ctx.restore();
        ctx.closePath();
      }

        if(bricks[c][r].status == 4) {
        let brickX = (r*(brickWidth))+brickOffsetLeft;
        let brickY = (c*(brickHeight))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        //ctx.fillStyle = "black";
        ctx.fill();
		ctx.save();
        ctx.clip();
        ctx.drawImage(img5, 0, 0, 1900, 900);
        ctx.restore();
        ctx.closePath();
      }
    }
  }
}