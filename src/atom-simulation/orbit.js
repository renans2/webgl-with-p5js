const electronRadius = 10;
const minAngleIncrementer = 0.005;
const maxAngleIncrementer = 0.05;

class Orbit {
    constructor(generalAngle) {
        this.angle = random(TWO_PI);
        this.generalAngle = generalAngle;
        this.angleIncrementer = random(minAngleIncrementer, maxAngleIncrementer);
    }

    update(){
        this.angle = (this.angle + this.angleIncrementer) % TWO_PI;
    }

    show(){
        const xMapping = map(mouseX, 0, width, 0, 1000);
        const yMapping = map(mouseY, height, 0, 0, 1000);

        push();
            rotateX(frameCount * 0.005 * this.generalAngle);
            rotateY(frameCount * 0.003 * this.generalAngle);
            rotateZ(frameCount * 0.001 * this.generalAngle);

            push();
                strokeWeight(2);
                noFill();
                stroke(255,100);
                ellipse(0, 0, 2 * xMapping, 2 * yMapping);
            pop();

            const x = cos(this.angle) * xMapping;
            const y = sin(this.angle) * yMapping;

            translate(x, y, 0);
            sphere(electronRadius);
        pop();
    }
}