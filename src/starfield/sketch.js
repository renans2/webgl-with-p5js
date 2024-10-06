const amount = 1000;
const cameraZ = 500;
const maxZStart = 0;
const minZ = -10000;
const maxZ = -5000;
const minSpeed = 10;
const maxSpeed = 250;
let stars = [];
let speed = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    fill(255);

    camera(0, 0, cameraZ, 0, 0, 0, 0, -1, 0);
    perspective(PI/3, width/height, 0.1, 10000 + cameraZ);

    for(let i = 0; i < amount; i++){
        stars.push(createNewStar(width, height, minZ, maxZStart));
    }
}

function draw() {
    background(0);
    speed = map(mouseX, 0, width, minSpeed, maxSpeed);

    for(let i = stars.length-1; i >= 0; i--){
        const s = stars[i];
        s.move(speed);
        if (s.isOutOfScreen()){
            stars.splice(i, 1);
            stars.push(createNewStar(width, height, minZ, maxZ));
        } else {
            s.show();
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function createNewStar(xOffset, yOffset, minZ, maxZ){
    const x = random(-xOffset, xOffset);
    const y = random(-yOffset, yOffset);
    const z = random(minZ, maxZ);
    return new Star(x,y,z);
}