//On construit les étoiles
let etoiles = [];
let randometoile = [];
let bigStar = [];
let teleStar = [];
class Etoile { 
  
//Le constructeur initialise les variables
//pour un objet de type "Etoile"
constructor(x, y, size, color) { // x et y sont le centre et pas le haut/gauche cette fois-ci
this.x = x;
this.y = y;
this.vx = (Math.random()*2 - 1) * 1.5 + 1;
this.vy = (Math.random()*2 - 1) * 1.5 + 1;
this.size = size;
this.color = color;
this.rotation = 0;
this.rotationSpeed = (Math.random()*2 - 1) * 0.05; // Vitesse et sens de rotation aléatoire
}

// Fonction qui a accès à toutes les variables
// de la forme "this.*"
draw(ctx) {
this.rotation += this.rotationSpeed;

// Dessine la 1ère partie de l'étoile
ctx.save ();

ctx.translate(this.x, this.y);
ctx.rotate(this.rotation);
ctx.fillStyle = this.color;
ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);

ctx.restore();

// Dessine la 2ème partie de l'étoile
ctx.save ();

ctx.translate(this.x, this.y);
ctx.rotate(this.rotation + Math.PI/4);
ctx.fillStyle = this.color;
ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);

ctx.restore();
}

update() {

      //collision balle et balle2
    var collA = ballRadius*2 +1;
    var collX = balle.x - balle2.x;
    var collY = balle.y - balle2.y;
    if (collA > Math.sqrt((collX * collX ) + (collY * collY))) {
        balle2.x = previousPosX2;
        balle2.y = previousPosY2;
        balle.y = previousPosY;
        balle.x = previousPosX;
    }

    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
              var b = bricks[c][r];
             
             //Collision étoile avec mur 1 et 2

              var collisionLeft3   = this.x + this.size/2>= b.x;
              var collisionRight3  = b.x + brickWidth >= this.x - this.size/2;
              var collisionTop3    = this.y + this.size/2>= b.y;
              var collisionBottom3 = b.y + brickHeight >= this.y - this.size/2;

              if (b.status == 1 || b.status == 2 ) {
                if (collisionLeft3 && collisionRight3 && collisionTop3 && collisionBottom3){
                 
                   this.vx *= -1;
                   this.vy *= -1;
                }
              }

        }
    }
     for(var v=0; v<randometoile.length;v++) {
               var et = randometoile[v];
                  //console.log(randometoile.length);
                   switch (et.color) {
                         case 'violet' :
                         et.color = 'yellow'; //orange
                         break;
                         case 'yellow' :
                         et.color = 'green'; // rouge
                         break;
                         case 'green' :
                         et.color = 'pink'; // beige */
                         break;
                         case 'pink' :
                         et.color = 'red'; // beige */
                         break;
                         case 'red' :
                         et.color = 'grey'; // beige */
                         break;
                         case 'black' :
                         et.color = '#F5F5DC'; // beige */
                         break;
                         case '#F5F5DC' :
                         et.color = '#fafaf0'; // beige */
                         break;
                         default:        
                         et.color = 'violet';
                    }
                  }

             //Spécialisation de l'étoile bigStar
                  for(var f=0 ; f<teleStar.length; f++) {
                    console.log(teleStar.length);
                    var teletoile = teleStar[f];
                    teletoile.vx = 0;
                    teletoile.vy = 0;
                  }

            for(var y=0 ; y<bigStar.length; y++) {
                    console.log(bigStar.length);
                    var testetoile = bigStar[y];
                    testetoile.vx = 0;
                    testetoile.vy = 0;
                  }


    //Collision balle etoile
    var collball = this.x + this.size/2>= balle.x - ballRadius;
    var collball2 = balle.x + ballRadius >= this.x - this.size/2;
    var collball3 = this.y + this.size/2>= balle.y - ballRadius;
    var collball4 = balle.y + ballRadius >= this.y - this.size/2;

    //Collision balle2 etoile
    var collball02 = this.x + this.size/2>= balle2.x - ballRadius;
    var collball22 = balle2.x + ballRadius >= this.x - this.size/2;
    var collball23 = this.y + this.size/2>= balle2.y - ballRadius;
    var collball24 = balle2.y + ballRadius >= this.y - this.size/2;

    //Nouvelle localisation de la balle en fonction de la couleur de l'étoile qu'elle touche
    switch (this.color) {
          case 'violet' :
          if(collball02 && collball22 && collball23 && collball24) { 
            balle2.x = 500; 
            balle2.y = 500;
            mySound.play();

          }
          if((collball && collball2 && collball3 && collball4)){ 
          balle.x = 500;
          balle.y = 500;
          mySound.play();
          }
          break;
       case 'yellow' :
          if(collball02 && collball22 && collball23 && collball24) {
            this.size=0;
            score2 +=2;
            this.x = 0;
            this.y = 0;
            mySound2.play();
          }
          if((collball && collball2 && collball3 && collball4)){
            this.size=0;
            score1 +=2;
            this.x = 0;
            this.y = 0;
            mySound2.play();
          }
           break;
         case 'green' :
          if(collball02 && collball22 && collball23 && collball24) {
            this.x = 0;
            this.y = 0;
            this.size=0;
            vit2+= 4;
            mySound4.play();
          }
          if((collball && collball2 && collball3 && collball4)){
          vit1 += 4;
            this.x = 0;
            this.y = 0;
            this.size=0;
            mySound4.play();

          }
          break;
          case 'pink' :
          if(collball02 && collball22 && collball23 && collball24) {
            this.x = 0;
            this.y = 0;
            this.size=0;
            vit2 -= 4;
            //vit2 = vit2/2
            mySound4.play();
          }
          if((collball && collball2 && collball3 && collball4)){
          vit1 -= 4;
           //vit1 = vit2/2
            this.x = 0;
            this.y = 0;
            this.size=0;
            mySound4.play();

          }
          break;
          case 'red' :
          if(collball02 && collball22 && collball23 && collball24) {
            this.x = 0;
            this.y = 0;
            this.size=0;
            score2 =0;
            mySound5.play();
          }
          if((collball && collball2 && collball3 && collball4)){
            this.x = 0;
            this.y = 0;
            this.size=0;
            score1 =0;
            mySound5.play();

          }
          break;
          case 'black' :
          if(collball02 && collball22 && collball23 && collball24) {
            balle2.rad =5; 
            this.x = 0;
            this.y = 0;
            this.size=0;
            mySound3.play();
           
          }
          if((collball && collball2 && collball3 && collball4)){
            balle.rad =5;
            this.x = 0;
            this.y = 0;
            this.size=0;
            mySound3.play();
           
          }
          break;

          case 'grey' :
          if(collball02 && collball22 && collball23 && collball24) {
            balle2.rad =15; 
            this.x = 0;
            this.y = 0;
            this.size=0;
            mySound3.play();
          
          }
          if((collball && collball2 && collball3 && collball4)){
            balle.rad =15;
            this.x = 0;
            this.y = 0;
            this.size=0;
            mySound3.play();
           
          }
          break;
          case 'white' :
          if(collball02 && collball22 && collball23 && collball24) {
            balle2.x = 1100; //changer les localisations en fonctions de couleurs
            balle2.y = 200;
            mySound.play();
          }
          if((collball && collball2 && collball3 && collball4)){
          balle.x = 1100;
          balle.y = 200;
          mySound.play();

          }
          break;
         case 'orange' :
          if(collball02 && collball22 && collball23 && collball24) {
            balle2.x = 1650; //changer les localisations en fonctions de couleurs
            balle2.y = 290;
            mySound.play();
          }
          if((collball && collball2 && collball3 && collball4)){
          balle.x = 1650;
          balle.y = 290;
          mySound.play();

          }
          break;
        default:        
          if(collball02 && collball22 && collball23 && collball24) {
            balle2.x = lc/2+15;
            balle2.y = hc/2;
            mySound.play();

          }
          if((collball && collball2 && collball3 && collball4)){
          balle.x = lc/2-15;
          balle.y = hc/2;
          mySound.play();
          }
          break;
    }

/*
    //collision canvas
    if (this.x < 0 + this.size/2 || this.x > canvas.width - this.size/2)
    this.vx *= -1;
    if (this.y < 0 + this.size/2 || this.y > canvas.height - this.size/2)
    this.vy *= -1;
*/
    //vitesse étoile
    this.x += this.vx;
    this.y += this.vy;
}


setColor(color) {
this.color = color;
}
}
