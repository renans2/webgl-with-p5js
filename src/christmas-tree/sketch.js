const lines = 100;
const linesOffset = 20;
const m = 8;
const rotationMultiplier = 0.0005;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cursor('grab');
    strokeWeight(5);
    perspective(1, width/height, 10, 1000000);
    camera(0, -1500, 2500, 0, 0, 0, 0, 1, 0);
}

function draw() {
    background(0);
    translate(0, -lines/2 * linesOffset, 0);

    orbitControl();
    noFill();

    for(let i = 1; i <= lines; i++){
        const y = i * linesOffset;
        push();
        translate(0, y, 0);
        rotateX(PI/2);
        rotateZ(frameCount * i * rotationMultiplier);

        if (i % 5 === 0)
            stroke(255,0,0);
        else
            stroke(0,255,0);

        triangle(sin(0) * i * m,
                 cos(0) * i * m,
                 sin(TWO_PI/3) * i * m,
                 cos(TWO_PI/3) * i * m,
                 sin(2 * TWO_PI/3) * i * m,
                 cos(2 * TWO_PI/3) * i * m);
        pop();
    }
}
