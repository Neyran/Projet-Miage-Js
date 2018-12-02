/*
let canvas, ctx, balle;
let hc;
let lc;
let img1;
let tableauQueue = {};
let ballRadius = 10;
let brickRowCount = 5; //Nombre de colonnes
let brickColumnCount = 3; //nombre de lignes
let brickWidth = 38;  //Largeur des bricks
let brickHeight = 38; //Longueur des bricks
let brickOffsetTop = 0; // coordonnée de la première brick en Y
let brickOffsetLeft = 0; //coordonnée de la première brick en X
let bricks = [
	[
  	{status: 1 },{status: 0 },{status: 0 },
    {status: 0 },
    {status: 1 }],
  [ {status: 0 },
    {status: 1 },
    {status: 0 },
    {status: 1 },
    {status: 0 }],
  [  {status: 1 },
    {status: 0 },
    {status: 1 },
    {status: 0 },
    {status: 1 }]
];*/
/*
var arr =  bricks;
for(var i=0; i<brickRowCount; i++) {
	for(var j=0; j<brickColumnCount; j++) 
		{
			//arr[i][j] = arr[i][j] + 'HOLa';
		}
}
console.log(arr);
*/
let previousPosX = 0;
let previousPosY = 0;

window.onload = function () {
    canvas = document.querySelector("#myCanvas");
    lc = canvas.width;
    hc = canvas.height;
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", checkKey);
    document.addEventListener("keyup", checkKey);
	  img1 = new Image();
	img2 = new Image();
 
  img1.onload = function() {
    startGame();
  }
  img1.src = "https://www.zupimages.net/up/18/48/5b66.png";
  img2.onload = function() {
    startGame();
  }
  img2.src = "https://cdn.shopify.com/s/files/1/1251/6453/products/1AMonster_1024x1024.png?v=1505293561";

    balle = new Balle(lc/2, hc/2);


    requestAnimationFrame(dessinerJeu);
};

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
        ctx.fillStyle = "#0095DD";
        ctx.fill();
		  ctx.save();
  ctx.clip();
  ctx.drawImage(img1, 0, 0, 1900, 900);
  ctx.restore();
        ctx.closePath();
      }
    }
  }
}

class Balle {
    constructor(x, y) {
        // on définit les propriétés qu'on veut avoir à la construction
        this.x = x;
        this.y = y;
        this.vx = 10;
      this.vy = 10;

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x,this.y,ballRadius,0,2*Math.PI);
        ctx.stroke();
		ctx.fill();
		ctx.save();
  ctx.clip();
  ctx.drawImage(img2, 0, 0);
  ctx.restore();
        ctx.closePath();
    }

    left() {
        this.x -= this.vx;
        this.draw(ctx);
    }

    right() {
        this.x += this.vx;
        this.draw(ctx);
    }
     down() {
        this.y += this.vy;
        this.draw(ctx);
    }

    top() {
        this.y -= this.vy;
        this.draw(ctx);
    }
}
function collisionDetection() {
  
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1)
      {
        
          var collisionLeft   = balle.x + ballRadius >= b.x;
          var collisionRight  = b.x + brickWidth >= balle.x - ballRadius;
          var collisionTop    = balle.y + ballRadius >= b.y;
          var collisionBottom = b.y + brickHeight >= balle.y - ballRadius;
         
          if (collisionLeft && collisionRight && collisionTop && collisionBottom)
          {
              
              balle.x = previousPosX;
              balle.y = previousPosY;
			  score++;
          }
      }

    }
  }
}
function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "Red";
  ctx.fillText("Score: "+score, 8, 20);
}
// Traitement des inputs (supporte plusieurs touches appuyées)
function checkKey(e) {
    e = e || window.event;
  previousPosX = balle.x;
  previousPosY = balle.y;

    tableauQueue[e.keyCode] = e.type == "keydown";

    if (tableauQueue["37"]) {
        if (balle.x - 10> 0) {
            balle.left();
        }
    }

    if (tableauQueue["39"]) {
        if (balle.x + 10 < canvas.width) {
            balle.right();
          
        }
    }
  if (tableauQueue["38"]) {
        if (balle.y - 10 > 0) {
            balle.top();
        }
    }

    if (tableauQueue["40"]) {
        if (balle.y + 10 < canvas.height) {
            balle.down();
        }
    }
}


function dessinerJeu() {
    ctx.clearRect(0, 0, lc, hc);
    drawBricks();
    collisionDetection();
    balle.draw(ctx);
	drawScore();


    requestAnimationFrame(dessinerJeu);
}


dessinerJeu();