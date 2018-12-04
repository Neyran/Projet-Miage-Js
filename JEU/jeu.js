window.onload = function () {
    canvas = document.querySelector("#myCanvas");
    lc = canvas.width;
    hc = canvas.height;
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", checkKey);
    document.addEventListener("keyup", checkKey);
	img1 = new Image(); //mur 1
	img2 = new Image(); //image a modifier
	img3 = new Image(); //mur 2 
  img4 = new Image(); //mur3
  img5 = new Image(); //mur4
  img6 = new Image(); //Mur5 Point de respaw

 
  img1.onload = function() {
  }
  img1.src = "https://www.zupimages.net/up/18/48/5b66.png"; //mur 1
  


  img2.onload = function() {
  }
  img2.src = "https://cdn.shopify.com/s/files/1/1251/6453/products/1AMonster_1024x1024.png?v=1505293561"; //balle
  


  img3.onload = function() {
  }
  img3.src = "https://zupimages.net/up/18/49/izvu.png"; //mur 2 


  img4.onload = function() {
  }
  img4.src = "https://zupimages.net/up/18/49/0khj.png"; //mur 4

   img5.onload = function() {
  }
  img5.src = "https://zupimages.net/up/18/49/k5pa.png"; //mur 5 ancienne zone de point
  
  img6.onload = function() {
  }
  img6.src = "https://zupimages.net/up/18/49/k5pa.png"; //mur 6 Zone de respaw
  
    balle = new Balle(lc/2-15, hc/2);
    balle2 = new Balle(lc/2+15,hc/2);


    requestAnimationFrame(dessinerJeu);
};

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
        ctx.drawImage(img2, this.x-10,this.y-10, 20,20);
        ctx.closePath();
        ctx.restore(); 
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

// Traitement des inputs (supporte plusieurs touches appuyées)
function checkKey(e) {
    e = e || window.event;
  previousPosX = balle.x;
  previousPosY = balle.y;
  previousPosX2 = balle2.x;
  previousPosY2 = balle2.y;

    tableauQueue[e.keyCode] = e.type == "keydown";

     ///////////////1ER joueur :

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

    ///////////////2eme joueur :
     if (tableauQueue["81"]) {
        if (balle2.x - 10> 0) {
            balle2.left();
        }
    }

    if (tableauQueue["68"]) {
        if (balle2.x + 10 < canvas.width) {
            balle2.right();
          
        }
    }
  if (tableauQueue["90"]) {
        if (balle2.y - 10 > 0) {
            balle2.top();
        }
    }

    if (tableauQueue["83"]) {
        if (balle2.y + 10 < canvas.height) {
            balle2.down();
        }
    }
}


function dessinerJeu() {
    ctx.clearRect(0, 0, lc, hc);
    drawBricks();
    collisionDetection();
    balle.draw(ctx);
    balle2.draw(ctx);
	drawScore();


    requestAnimationFrame(dessinerJeu);
}


dessinerJeu();
