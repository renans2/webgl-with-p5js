const depth = 5;
const minLen = 20;
const maxLen = 100;
const minAngle = -0.7;
const maxAngle = 0.7;
let lens = [];
let angles = [];
let i = 0;
let j = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    for (let i = 0; i < 10000; i++) {
        lens.push(random(minLen, maxLen));
    }

    for (let i = 0; i < 10000; i++) {
        angles.push(random(minAngle, maxAngle));
    }
}

function draw() {
    normalMaterial();
    background(0);
    orbitControl(3,3,3);
    scale(1,-1,1);
    stroke(255, 100);

    translate(0,-150,0);
    box(100,1,100)
    drawBranch(depth);

    i = 0;
    j = 0;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function drawBranch(depth){
    if(depth > 0){
        const len = lens[i];
        i++;

        line(0, 0, 0, 0, len, 0);
        translate(0, len, 0);

        for (let i = 0; i < 2; i++) {
            push();
            rotateX(angles[j]);
            drawBranch(depth - 1);
            pop();
            j++;

            push();
            rotateZ(angles[j]);
            drawBranch(depth - 1);
            pop();
            j++;
        }
    }
}