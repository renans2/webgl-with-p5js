const n = 50;
const m = 20;
const sides = 4;
let angleOffset;
const heightt = 150;
const sinSpeed = 0.035;
const colorSpeed = 0.75;
const rotateSpeed = 0.0005;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    cursor('grab');
    colorMode(HSL);
    stroke(255);
    strokeWeight(4);
    noFill();
    perspective(1, width/height, 10, 1000000);
    camera(0,-500,2000,0,0,0,0,1,0);

    angleOffset = TWO_PI/sides;
}

function draw() {
    background(0);
    rotateX(PI/2);
    orbitControl();

    for (let i = 0; i < n; i++) {
        push();
        rotateZ((n-i) * frameCount * rotateSpeed);
        const angle = -map(i, 0, n, 0, TWO_PI);
        translate(0, 0, sin(angle + frameCount * sinSpeed) * heightt);
        stroke((map(i, 0, n, 0, 100) + frameCount * colorSpeed) % 360, 100, 50, 1);
        beginShape();

        for (let j = 0; j < sides; j++) {
            const x = sin(j * angleOffset) * i * m;
            const y = cos(j * angleOffset) * i * m;
            vertex(x, y);
        }

        endShape(CLOSE);
        pop();
    }
}
