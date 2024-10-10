const r1 = 350;
const r2 = 100;
let angle = 0;
const angleIncrementer = 0.05;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    camera(0,500,500,0,0,0,0,-1,0);
}

function draw() {
    background(0);
    orbitControl();
    pointLight(255,0,0,0,0,1000);
    pointLight(0,0,255,0,0,-1000);

    const x = cos(angle) * r1;
    const z = sin(angle) * r2;

    push();
        normalMaterial();
        noStroke()
        translate(x, 0, z);
        sphere(20);
    pop();

    push();
        rotateX(PI/2);
        noFill();
        stroke(255);
        strokeWeight(2);
        ellipse(0, 0, 2*r1, 2*r2);
    pop();

    push();
        rotateZ(PI/2);
        normalMaterial();
        noStroke()
        translate(x, 0, z);
        sphere(20);
    pop();

    push();
        rotateZ(PI/2);
        rotateX(PI/2);
        noFill();
        stroke(255);
        strokeWeight(2);
        ellipse(0, 0, 2*r1, 2*r2);
    pop();

    normalMaterial();
    // fill(255,255,0);
    sphere(75);

    angle = (angle + angleIncrementer) % TWO_PI;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}