const baseSide = 500;
const layers = 50
let curHeight = 10;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    stroke(255);
    noFill();
    colorMode(HSL);
}

function draw() {
    background(0);
    orbitControl(2,2,2);
    curHeight = map(mouseY, height, 0, -20, 20)
    translate(0, layers/2 * curHeight, 0);
    drawPyramid();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function drawPyramid(){
    const mappedX = map(mouseX, 0, width, -20, 20);

    for(let i = 1; i <= layers; i++){
        const newSide = baseSide - i * mappedX;

        push();
        translate(0, -i * curHeight, 0);
        stroke(map(i, 1, layers, 0, 360), 100, 50);
        box(newSide, curHeight, newSide);
        pop();
    }
}