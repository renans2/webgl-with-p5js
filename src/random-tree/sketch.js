const depth = 9;
const minLen = 50;
const maxLen = 100;
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
    colorMode(HSL);
    generateArrays();
}

function draw() {
    camera(sin(frameCount * 0.02) * 1000, 0, cos(frameCount * 0.02) * 1000, 0, 0, 0, 0, 1, 0);
    normalMaterial();
    background(0);
    scale(1,-1,1);
    stroke(hue, 100, 50, 0.25);
    strokeWeight(5);

    translate(0,-300,0);
    push();
    noStroke();
    box(100,5,100)
    pop();
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

        strokeWeight(map(depth, 5, 1, 20, 0));
        line(0, 0, 0, 0, len, 0);
        translate(0, len, 0);

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
