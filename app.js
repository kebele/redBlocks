
let kenar = 25;
let box = [];
let block;
let boxLength = 10;
let score=0;

function setup() {
    createCanvas(500,500);
    
    for(let i = 0; i < boxLength; i++){
        box[i] = new Box();
    }
    
    block = new Block();

    textSize(22);
    textFont("monospace");
}



function draw() {
    
    background(160, 160, 160);
    
    for(let i = 0; i < boxLength; i++){
        box[i].fall();
        box[i].show();
    }
    
    block.show();
    gameOver();
    
    fill(255,255,0);
    text("score : " + score,30,50);
} 



