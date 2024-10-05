const cameraZ = 500;
const amount = 500;
let stars = [];
let speed = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    fill(255);

    for(let i = 0; i < amount; i++){
        stars.push(createNewStar());
    }
}

function draw() {
    background(0);
    camera(0, 0, cameraZ, 0, 0, 0, 0, -1, 0);
    perspective(2 * atan(height / 2 / 800), width/height, 0.1, 10000)

    speed = map(mouseX, 0, width, 10, 100);

    for(let i = stars.length-1; i >= 0; i--){
        const s = stars[i];
        s.move(speed);
        s.show();

        if (s.isOutOfScreen()){
            stars.splice(i, 1);
            stars.push(createNewStar());
        }
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function createNewStar(){
    const x = random(-width, width);
    const y = random(-height, height);
    const z = random(-3000, -1000);
    return new Star(x,y,z);
}