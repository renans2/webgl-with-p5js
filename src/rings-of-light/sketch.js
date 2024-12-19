const minRotationVal = 0.001;
const maxRotationVal = 0.005;

const n = 100;
const sphereRadius = 3;
const ringRadius = 300;
const rings = [];
const nRings = 10;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    // camera(0,0,0,0,0,-1,0,1,0);
    // colorMode(HSL);
    createRings();
}

function draw() {
    background(0);
    orbitControl();
    drawRings();
}

function drawRings(){
    for(let i = 0; i < nRings; i++){
        rings[i].drawRing();
    }
}

function createRings(){
    for (let i = 0; i < nRings; i++) {
        const rotations = {
            x: random(minRotationVal, maxRotationVal),
            y: random(minRotationVal, maxRotationVal),
            z: random(minRotationVal, maxRotationVal),
        };
        rings.push(new Ring(n, sphereRadius, ringRadius, 10, rotations));
    }
}
