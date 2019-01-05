window.onload = function () {
    canvas = document.querySelector("#myCanvas");
    lc = canvas.width;
    hc = canvas.height;
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", downKeyHandler);
    document.addEventListener("keyup", upKeyHandler);
	  img1 = new Image(); //mur 1
	  img2 = new Image(); //image a modifier
	  img3 = new Image(); //mur 2 
    img4 = new Image(); //mur3
    img5 = new Image(); //mur4
    img6 = new Image(); //Mur5 Point de respaw
    img7 = new Image();


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


 //création des balles
 balle = new Balle(lc/2+15, hc/2);
 balle2 = new Balle(lc/2-15,hc/2);

  //création des étoiles de teleportation + Etoiles bonus
  etoiles.push(new Etoile(1000, 250, 10, 'violet')); // violetbleu
  bigStar.push(new Etoile(1045, 52, 20, 'yellow')); 
  teleStar.push(new Etoile(790, 247, 10, 'white')); //teleportation
  //teleStar.push(new Etoile(1100, 200, 10, '#F5F5DC'));
   // teleStar.push(new Etoile(1650, 290, 10, '#F5F5DC'));

  etoiles.push(new Etoile(1652, 150, 10, 'violet')); // violetbleu
  bigStar.push(new Etoile(1652, 15, 20, 'yellow')); 
  teleStar.push(new Etoile(1512, 55, 10, 'orange')); //teleportation

  etoiles.push(new Etoile(1842, 760, 10, 'violet'));
  bigStar.push(new Etoile(1842, 855, 20, 'yellow'));

  etoiles.push(new Etoile(322, 743, 10, 'violet'));
  bigStar.push(new Etoile(322, 663, 20, 'yellow'));

  bigStar.push(new Etoile(93, 93, 20, 'yellow'));
  etoiles.push(new Etoile(150, 123, 10, 'violet'));

 //etoiles malus en fonction de la couleurs
  etoiles.push(new Etoile(840, 350, 10, 'green')); //lightcorail
  etoiles.push(new Etoile(1650, 670, 10, 'green')); //rouge
  etoiles.push(new Etoile(550, 550, 10, 'pink')); //lightcorail
  etoiles.push(new Etoile(80, 400, 10, 'red')); //light corail
  etoiles.push(new Etoile(1200, 580, 10, 'red')); //sandybrown
  etoiles.push(new Etoile(1110, 820, 10, 'grey'));
  etoiles.push(new Etoile(200, 800, 10, 'pink'));  
  etoiles.push(new Etoile(550, 550, 10, 'black')); //lightcorail
  etoiles.push(new Etoile(80, 400, 10, 'grey')); //light corail
  etoiles.push(new Etoile(1200, 580, 10, 'pink')); //sandybrown
  etoiles.push(new Etoile(1110, 820, 10, 'black'));
  etoiles.push(new Etoile(200, 800, 10, 'black'));

//Bonus ou malus en fonciton de la couleur
  randometoile.push(new Etoile(710, 850, 10, 'red'));
  randometoile.push(new Etoile(193, 293, 10, 'red'));
  randometoile.push(new Etoile(1590, 400, 10, 'red'));
  randometoile.push(new Etoile(1500, 800, 10, 'red'));  




                        //x,y,taille,couleur
    requestAnimationFrame(dessinerJeu);
};

//On construit les balles
class Balle {
    constructor(x, y,rad) {
        // on définit les propriétés qu'on veut avoir à la construction
        this.x = x;
        this.y = y;
        this.vx = 10;
        this.vy = 10;
        this.rad = ballRadius;
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rad ,0,2*Math.PI);
        ctx.stroke();
		ctx.fill();
        ctx.clip();
        ctx.drawImage(img2, this.x-this.rad ,this.y-this.rad , this.rad*2,this.rad*2);
        ctx.closePath();
        ctx.restore(); 
    }

    move(vX, vY){
      this.x += vX;
      this.y += vY;
    }
}

let keyInput = {
  "ArrowLeft": false,
  "ArrowRight": false,
  "ArrowUp": false,
  "ArrowDown": false,
  "KeyA": false,
  "KeyD": false,
  "KeyW": false,
  "KeyS": false,
  "Space":false
};
function downKeyHandler(event){
  if(keyInput.hasOwnProperty(event.code))
  keyInput[event.code] = true;
}

function upKeyHandler(event){
  if(keyInput.hasOwnProperty(event.code))
  keyInput[event.code] = false;
  console.log(event);
}

// Traitement des inputs (supporte plusieurs touches appuyées)
function checkKey(keyInput) {

  previousPosX = balle.x;
  previousPosY = balle.y;
  previousPosX2 = balle2.x;
  previousPosY2 = balle2.y;
  let vX = 0, vY = 0;
  let vX2 = 0, vY2 = 0;
     ///////////1ER joueur :

    if (keyInput.ArrowLeft)
        vX = -vit1;    
    if (keyInput.ArrowRight)
        vX = vit1;   
    if (keyInput.ArrowUp)
        vY = -vit1;    
    if (keyInput.ArrowDown)
        vY = vit1;
     ///////////2EM joueur :
    if (keyInput.KeyA)
        vX2 = -vit2;    
    if (keyInput.KeyD)
        vX2 = vit2;   
    if (keyInput.KeyW)
        vY2 = -vit2;    
    if (keyInput.KeyS)
        vY2 = vit2;

    ////PLAY
   if(keyInput.Space){
   	if(play==2){
      startCount();
      play=1;
      }     
    }


      balle2.move(vX2, vY2);
      balle.move(vX, vY);

}

function timedCount() { //comptage
  c = c - 1;
  t = setTimeout(timedCount, 1000);
if(c==0) {
    play=0;
    c=0;
  }


}

function startCount() { //commence le timer
  if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
    play=1;
  }
}

function stopCount() { //stop le timer
  clearTimeout(t);
  timer_is_on = 0;
  play=0;
}

function star() {
    etoiles.forEach((e) => {
    e.update();
    e.draw(ctx);
    })
   randometoile.forEach((u) => {
    u.update();
    u.draw(ctx);
    })

    bigStar.forEach((t) => {
    t.update();
    t.draw(ctx);
    })
    teleStar.forEach((t) => {
    t.update();
    t.draw(ctx);
    })

}

function dessinerJeu() {
    ctx.clearRect(0, 0, lc, hc);
    drawBricks();
    collisionDetection();
    balle.draw(ctx);
    balle2.draw(ctx);
    star();
    checkKey(keyInput);
	drawScore();
    drawMenu()
    requestAnimationFrame(dessinerJeu);
}
