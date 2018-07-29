var ship; 
var flowers = []; 
var drops = []; 


function setup(){
    createCanvas(600, 400);
    ship = new Ship();
    for (var i =0; i<7; i++){
        flowers[i] = new Flower(random(width), 40);
    }  
}

function draw(){
    background(0);
    ship.show();
    ship.move();
    var edge = false; 
    for (var i =0; i<flowers.length; i++){
        flowers[i].show();
        flowers[i].move();

        if(flowers[i].x > width || flowers[i].x <0){
            edge = true; 
        }
    } 

    if (edge){
        for(var i = 0; i<flowers.length; i++){
            flowers[i].shiftDown(); 
            edge = false;
        }
    }

    for (var i =0; i<drops.length; i++){
        drops[i].show();
        drops[i].move();

        for (var j =0; j<flowers.length; j++){
            if( drops[i].hits(flowers[j]) ) {
                flowers[j].grow();
                drops[i].evaporate();               
            }
        } 
    } 
    
    for (var i = drops.length-1; i>=0; i--){
        if(drops[i].toDelete){
            drops.splice(i, 1);
        }
    }
}

function keyPressed(){
    if (key === ' '){
        var drop = new Water(ship.x, height-20);
        drops.push(drop);
        console.log(drops.length);
    }
    if (keyCode === RIGHT_ARROW){
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW){
        ship.setDir(-1);
    }
}

function keyReleased(){
    if (key !== ' '){
        ship.setDir(0);
    }
}