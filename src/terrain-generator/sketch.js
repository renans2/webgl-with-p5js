const minMultiplier = .0025;
const maxMultiplier = .05;
let m1 = 0.035;
const dimension = 50;
const offset = 25;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    colorMode(HSL);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0,0,15);
    camera(0,-1000,1500,0,-350,0,0,1,0);
    pointLight(255,255,255,0,-1500,250);
    rotateY(frameCount * 0.035);
    translate(-dimension * offset / 2, 0, -dimension * offset /2);
    fill(255);

    for(let i = 0; i < dimension; i++){
        for(let j = 0; j < dimension; j++){
            const x = j * offset;
            const n = noise(i * m1, j * m1);
            const y = -Math.pow(map(n, 0, 1, 1.5, 3), 7);
            const z = i * offset;

            push();
            translate(x, y/2, z);
            fill(map(n,0,1,360,0) - 75,100,50);
            box(offset, y, offset);
            pop();
        }
    }
}

function keyPressed(){
    if(key === 'r'){
        noiseSeed(random(100));
        m1 = random(minMultiplier, maxMultiplier);
    }
}