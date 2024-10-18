const depth = 9;
const minLen = 25;
const maxLen = 120;
const minAngle = -0.65;
const maxAngle = 0.65;
const nNewBranches = 2;
const arrayLength = getNumOfBranches(depth, nNewBranches);
let lens = [];
let angles = [];
let i = 0;
let j = 0;
let hue = 120;

function setup() {
    console.log(arrayLength);
    createCanvas(windowWidth, windowHeight, WEBGL);
    // colorMode(HSL);
    generateArrays();
    noStroke();
}

function draw() {
    frameRate(24);
    pointLight(255,255,255,1000,0,1000);
    pointLight(255,255,255,-1000,0,1000);
    camera(0, 0, 1250, 0, 0, 0, 0, 1, 0);
    rotateY(frameCount * -0.075);
    specularMaterial(128, 175, 129);
    shininess(40);
    fill(128, 175, 129);
    background(212, 231, 197);
    scale(1,-1,1);

    translate(0,-350,0);
    box(150,10,150)
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

        translate(0, len/2, 0);
        cylinder(map(depth, 9, 1, 20, 1.75), len);
        translate(0, len/2, 0);

        for (let i = 0; i < nNewBranches/2; i++) {
            push();
            rotateX(angles[j]);
            rotateY(angles[j]);
            drawBranch(depth - 1);
            pop();
            j++;

            push();
            rotateZ(angles[j]);
            rotateY(angles[j]);
            drawBranch(depth - 1);
            pop();
            j++;
        }
    }
}

function generateArrays(){
    lens = [];
    angles = [];

    for (let i = 0; i < arrayLength; i++) {
        lens.push(random(minLen, maxLen));
    }

    for (let i = 0; i < arrayLength; i++) {
        angles.push(random(minAngle, maxAngle));
    }
}

function keyPressed(){
    if(key === 'r'){
        generateArrays();
        hue = random(360);
        i = 0;
        j = 0;
    }
}

function getNumOfBranches(depth, nNewBranchesByBranch){
    let total = 0;

    for (let i = 0; i < depth; i++) {
        total += Math.pow(nNewBranchesByBranch, (i+1));
    }

    return total;
}
