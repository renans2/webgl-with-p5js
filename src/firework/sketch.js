const sparkSpeed = 10;
const fireworks = [];
let timer = 0;
let timeToWait;
const minWait = 100;
const maxWait = 450;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    colorMode(HSL);
    perspective(2 * atan(height / 2 / 800), width / height, 0.1, 10000);

    timeToWait = random(minWait, maxWait);
}

function draw() {
    background(0, 100);

    push();
    noFill();
    stroke(255);
    strokeWeight(10);
    translate(0, 1500, 0);
    box(5000, 100, 5000);
    pop();

    orbitControl();

    timer += deltaTime;

    if(timer >= timeToWait){
        timer = 0;
        timeToWait = random(minWait, maxWait);
        fireworks.push(new Firework());
    }

    for (let i = fireworks.length - 1; i >= 0; i--){
        const firework = fireworks[i];

        if(firework.isOver())
            fireworks.splice(i, 1);
        else
            firework.updateAndShow();
    }
}
