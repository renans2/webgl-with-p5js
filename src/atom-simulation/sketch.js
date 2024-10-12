const nOrbits = 25;
const orbits = []

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    camera(500,500,1000,0,0,0,0,-1,0);
    normalMaterial();

    for (let angle = 0; angle < TWO_PI; angle += TWO_PI/nOrbits) {
        orbits.push(new Orbit(angle));
    }
}

function draw() {
    background(0);
    orbitControl();

    push();
        rotateX(PI/2);
        translate(0, 0, 1000);
        fill(255,50);
        plane(2500, 2500)
    pop();

    for (const orbit of orbits) {
        orbit.update();
        orbit.show();
    }

    sphere(75);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}