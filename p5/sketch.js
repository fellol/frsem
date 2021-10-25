function preload() {
    bgImg = loadImage('Images/space.jpg');
}

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.position(20, 20);
    ball = new Ball();
}

function draw() {
    background(0);
    image(bgImg, 0, 0, width, height);
    ball.update();
    ball.show();
    if(keyIsPressed){
        if(keyCode==32){
          fill(200,0,0);
          rect(20,20,width-40,height-40);
        }
        fill(0);
        textSize(60);
        text(keyCode,width/2-20,height/2+10);
    }
}



class Ball {
    constructor() {
        this.x = floor(random() * width);
        this.y = floor(random() * height);
        this.width = 30;
        this.height = 30;
        this.vx = 1;
        this.vy = 1;
    }
    show() {
        fill(250, 250, 0);
        ellipse(this.x, this.y, 30, 30);

    }
    update() {
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }

}
