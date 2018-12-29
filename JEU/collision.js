
function drawScore() {
  ctx.save();
  ctx.font = "20px Arial";
  ctx.fillStyle = "Red";
  ctx.fillText("Joueur1: "+score1, 8, 20);
  ctx.font = "20px Arial";
  ctx.fillStyle = "Green";
  ctx.fillText("Joueur2: "+score2, 150, 20);
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
          }
          if (collisionLeft2 && collisionRight2 && collisionTop2 && collisionBottom2) //collision balle 2
          {
          score2++;
          b.status = 4;
          }
        }
        if (b.status == 2) //mur 2 = mur qui disparait
      {

          if (collisionLeft && collisionRight && collisionTop && collisionBottom) //collision balle 1
          {
              
              balle.x = previousPosX;
              balle.y = previousPosY;
              b.status = 0;
          }
          if (collisionLeft2 && collisionRight2 && collisionTop2 && collisionBottom2) //collision balle 2
          {
              
              balle2.x = previousPosX2;
              balle2.y = previousPosY2;
              b.status = 0;
          }
        }
        
    }
  }
}

