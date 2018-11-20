// Inits
window.onload = function init() {
  var game = new GF();
  game.start();
};


// GAME FRAMEWORK STARTS HERE
var GF = function(){
    // Vars relative to the canvas
    var canvas, ctx, w, h; 

    // vars for counting frames/s, used by the measureFPS function
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var fps; 
  
    // vars for handling inputs
    var inputStates = {};
  
    // Joueur !
    var monster = {
      x:0,
      y:(38*12.5),
      speed:10
    };
  
    var measureFPS = function(newTime){
      
         // test for the very first invocation
         if(lastTime === undefined) {
           lastTime = newTime; 
           return;
         }
      // Calcul de la différence entre l'ancienne & l'actuelle image
        var diffTime = newTime - lastTime; 

        if (diffTime >= 1000) {
            fps = frameCount;    
            frameCount = 0;
            lastTime = newTime;
        }

        //and display it in an element we appended to the 
        // document in the start() function
       /*fpsContainer.innerHTML = 'FPS: ' + fps; 
       frameCount++;*/
    };
  //clear du contenu du canvas
     function clearCanvas() {
       ctx.clearRect(0, 0, w, h);
     }
     function quadrillage(){
      var pas , x4 , y4
      x4 =0;
      y4=0;
      for(pas= 0;pas<1300;pas ++){
        ctx.strokeRect(x4,y4,38,38)
        y4= y4 +38;
        if (y4>=912){
          x4=x4+38;
          y4=0;
        }

      }
     }
 // Fonction pour dessiner le joueur et potentiellement d'autres objets
     function drawMyMonster(x, y,w,h) {
   
       // save the context
       ctx.save();
  monster.width=20;
  monster.height=20;
       // translate the coordinate system, draw relative to it
       ctx.translate(x, y);
  
       // (0, 0) is the top left corner of the monster.
       ctx.strokeRect(0, 0, 20, 20);
  
      // restore the context
      ctx.restore(); 
    }
    function rectsOverlap(x1, y1, w1, h1, x2, y2, w2, h2) {
 
  if ((x1 > (x2 + w2)) || ((x1 + w1) < x2))
     return false; // No horizontal axis projection overlap
  if ((y1 > (y2 + h2)) || ((y1 + h1) < y2))
     return false; // No vertical axis projection overlap
  return true; // If previous tests failed, then both axis projections
               // overlap and the rectangles intersect
}

//Fonction pour vérifier les collision
function checkcollision(){

  //Fonction collision gauche
 if (rectsOverlap((38*25)/*38*25*/,725/*(38*19)*/,1,900,monster.x, monster.y,20,20)) {
       ctx.fillStyle='Red';
  ctx.fillRect((38*25),(725),1,900)
     monster.x=(38*24+19);
   }
//Fonction collision droite
    if (rectsOverlap((38*26),(38*19+1),1,900,monster.x, monster.y,20,20)) {
       ctx.fillStyle='Red';
  ctx.fillRect((38*26),(38*19+1),1,900)
     monster.x=(38*26);
   }
//Fonction collision haut
 if (rectsOverlap(951,(722),36,1,monster.x, monster.y,20,20)) {
  ctx.fillStyle='Red';
  ctx.fillRect(951,722,36,1)
     monster.y=(702);
   }
  }
  function drawMyWalls(x,y,width,height){
    /*Pour faire des murs : 
}
ctx.FillRect((axe X*(Nombre de case en X),(axeY * Nombre de case en Y),longueur(à ne jamais toucher),largeur(// longueur)))

*/  
//mur Noir
ctx.save();
 ctx.fillStyle='#494C4F';
    ctx.fillRect((38*25),(38*23),38,38)
    ctx.fillRect((38*25),(38*22),38,38)
    ctx.fillRect((38*25),(38*21),38,38)
    ctx.fillRect((38*25),(38*20),38,38)
    ctx.fillRect((38*25),(38*19),38,38)
    ctx.restore();

 //Base Rouge
    ctx.save();
    ctx.fillStyle='#891103';
    ctx.fillRect((38*0),(38*11),38,(38*4))
   /* ctx.fillRect((38*0),(38*13),38,38)
    ctx.fillRect((38*0),(38*12),38,38)
    ctx.fillRect((38*0),(38*11),38,38)*/
    ctx.restore();

//Base Bleu
    ctx.save();
    ctx.fillStyle='#00418C';
    ctx.fillRect((38*49),(38*11),38,(38*4))
    /*ctx.fillRect((38*49),(38*13),38,38)
    ctx.fillRect((38*49),(38*12),38,38)
    ctx.fillRect((38*49),(38*11),38,38)*/
    ctx.restore();
  }
    var mainLoop = function(time){
        //main function, called each frame 
        measureFPS(time);
      
        // Clear the canvas
        clearCanvas();
        // Dessin du mur
        drawMyWalls();
      //vérification des collisions
      checkcollision();
      //quadrillage
     // quadrillage();
        // Dessin du joueur
        drawMyMonster(monster.x, monster.y);

        // Check inputs and move the monster
        updateMonsterPosition();
 
        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };
  

    function updateMonsterPosition() {
      monster.speed = 10;
      monster.speedX = monster.speedY =0 ;
        // check inputStates
        if (inputStates.left) {
           // ctx.fillText("left", 150, 20);
            monster.speedX = -monster.speed;
        }
        if (inputStates.up) {
           // ctx.fillText("up", 150, 40);
           monster.speedY = -monster.speed;
        }
       if (inputStates.right) {
          //  ctx.fillText("right", 150, 60);
            monster.speedX = monster.speed;
        }
        if (inputStates.down) {
          //  ctx.fillText("down", 150, 80);
            monster.speedY = monster.speed;
        } 
        if (inputStates.space) {
            ctx.fillText("space bar", 140, 100);
        }
        if (inputStates.mousePos) { 
            ctx.fillText("x = " + inputStates.mousePos.x + " y = " + inputStates.mousePos.y + " carré axe X =" + monster.x +   " carré axe y =" + monster.y+"monster height"+monster.height, 5, 150);
        }
       if (inputStates.mousedown) { 
            ctx.fillText("mousedown b" + inputStates.mouseButton, 5, 180);
            monster.speed = 5;
        } else {
          // mouse up
          monster.speed = 1;
        }
      
        monster.x += monster.speedX;
        monster.y += monster.speedY;
      
    }
  
  
    function getMousePos(evt) {
        // necessary to take into account CSS boudaries
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
      
    var start = function(){
        // adds a div for displaying the fps value
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);
      
        // Canvas, context etc.
        canvas = document.querySelector("#myCanvas");
  
        // often useful
        w = canvas.width; 
        h = canvas.height;  
  
        // important, we will draw with this object
        ctx = canvas.getContext('2d');
        // default police for text
        ctx.font="20px Arial";
      
       //add the listener to the main, window object, and update the states
      window.addEventListener('keydown', function(event){
          if (event.keyCode === 37) {
             inputStates.left = true;
          } else if (event.keyCode === 38) {
             inputStates.up = true;
          } else if (event.keyCode === 39) {
             inputStates.right = true;
          } else if (event.keyCode === 40) {
             inputStates.down = true;
          }  else if (event.keyCode === 32) {
             inputStates.space = true;
          }
      }, false);

      //if the key will be released, change the states object 
      window.addEventListener('keyup', function(event){
          if (event.keyCode === 37) {
             inputStates.left = false;
          } else if (event.keyCode === 38) {
             inputStates.up = false;
          } else if (event.keyCode === 39) {
             inputStates.right = false;
          } else if (event.keyCode === 40) {
             inputStates.down = false;
          } else if (event.keyCode === 32) {
             inputStates.space = false;
          }
      }, false);
      
      // Mouse event listeners
      canvas.addEventListener('mousemove', function (evt) {
          inputStates.mousePos = getMousePos(evt);
      }, false);

      canvas.addEventListener('mousedown', function (evt) {
            inputStates.mousedown = true;
            inputStates.mouseButton = evt.button;
      }, false);

      canvas.addEventListener('mouseup', function (evt) {
          inputStates.mousedown = false;
      }, false);      


        // start the animation
        requestAnimationFrame(mainLoop);
    };

    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    };
};

