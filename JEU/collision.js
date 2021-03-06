
function drawMenu() {
  if(play==0) {
    if(score1>score2) { 
      document.querySelector('.link2').style= 'display:block;'
      stopCount()
    }
    if(score1<score2) {
       document.querySelector('.link3').style= 'display:block;'
       stopCount()
    }

    if(score1 == score2) {
       document.querySelector('.link4').style= 'display:block;'
       stopCount()
    }
     document.querySelector('.imgback2').style= 'display:block;'
  }
}


function drawScore() {
  ctx.save();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 570, 30);
  ctx.font = "30px Trebuchet";
  ctx.fillStyle = "Red";
  ctx.fillText("Joueur 1 :"+score1, 5, 25);
  ctx.font = "30px Trebuchet";
  ctx.fillStyle = "Blue";
  ctx.fillText("Joueur 2 :"+score2, 170, 25);
  ctx.font = "30px Trebuchet";
  ctx.fillStyle = "Black";
  ctx.fillText("Temps restant : "+c+ "s", 320, 25); //au lieu de temps écoulé
  ctx.restore();
}

//collision des balles avec les différents types de murs

function collisionDetection() {
  
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      var collisionLeft   = balle.x + ballRadius >= b.x;
      var collisionRight  = b.x + brickWidth >= balle.x - ballRadius;
      var collisionTop    = balle.y + ballRadius >= b.y;
      var collisionBottom = b.y + brickHeight >= balle.y - ballRadius;
      var collisionLeft2   = balle2.x + ballRadius >= b.x;
      var collisionRight2  = b.x + brickWidth >= balle2.x - ballRadius;
      var collisionTop2   = balle2.y + ballRadius >= b.y;
      var collisionBottom2 = b.y + brickHeight >= balle2.y - ballRadius;
      if (b.status == 1) //mur1 =
      {

          if (collisionLeft && collisionRight && collisionTop && collisionBottom) //collision balle 1
          {              
              balle.x = previousPosX;
              balle.y = previousPosY;
          }
          if (collisionLeft2 && collisionRight2 && collisionTop2 && collisionBottom2) //collision balle 2
          {    
              balle2.x = previousPosX2;
              balle2.y = previousPosY2;
          }
          
        }
         if (b.status == 3) //mur 3 =  zone de point
      {

          if (collisionLeft && collisionRight && collisionTop && collisionBottom) //collision balle 1
          {
          score1++;
          b.status = 4;
          mySound2.play();
          }
          if (collisionLeft2 && collisionRight2 && collisionTop2 && collisionBottom2) //collision balle 2
          {
          score2++;
          b.status = 6;
          mySound2.play();
          }
        }
        if (b.status == 2) //mur 2 = mur qui disparait
      {

          if (collisionLeft && collisionRight && collisionTop && collisionBottom) //collision balle 1
          {
              
              balle.x = previousPosX;
              balle.y = previousPosY;
              b.status = 0;
              mySound7.play();
          }
          if (collisionLeft2 && collisionRight2 && collisionTop2 && collisionBottom2) //collision balle 2
          {
              
              balle2.x = previousPosX2;
              balle2.y = previousPosY2;
              b.status = 0;
              mySound7.play();
          }
        }
        
    }
  }
}
