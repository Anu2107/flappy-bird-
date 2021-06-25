class pipes{
    constructor(x,y){
        var options={
         friction: 1, 
         density: 1, 
         restitution: 0.8,
         isStatic: true
     }
     this.image1 = loadImage("Pipes1.png"); 
     this.image2 = loadImage("Pipes2.png"); 
     this.body = Bodies.rectangle(x,y,100, 100, options); 
     this.h = random(100,200)
     World.add(world, this.body);
    }
    display(){
        imageMode(CENTER); 
        push(); 
        translate(this.body.position.x, this.body.position.y); 
        rotate(this.body.angle);
        image(this.image1, 0, 0, 50, this.h); 
        pop(); 
     }
    } 