function Ship(){
    this.x = width/2;
    this.xdir = 0; 

    this.show = function(){
        fill(255);
        rect(this.x, height-20, 20, 20);
    }

    this.move = function(dir){
        this.x += 5*this.xdir; 
    }

    this.setDir = function (dir){
        this.xdir = dir;
    }
}