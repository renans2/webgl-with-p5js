class Firework {
    constructor() {
        this.x = random(-2000, 2000);
        this.y = 0;
        this.z = random(-750, 750);
        this.nSparks = random(75, 300);
        this.hue = random(360);
        this.sparks = [];
        this.initializeSparks();
        this.i = 1;
        this.timeToLive = random(500, 2000);
        this.timer = 0;
        this.over = false;
        this.sparkStartingRadius = 25;
        this.sparkSpeed = random(7, 20);
    }

    initializeSparks(){
        for (let i = 0; i < this.nSparks; i++) {
            this.sparks.push(p5.Vector.random3D());
        }
    }

    updateAndShow(){
        const radius = map(this.timer, 0, this.timeToLive, this.sparkStartingRadius, 0);

        push();
        translate(this.x, this.y, this.z);
        fill(this.hue, 100, 50, 1);

        for (let i = 0; i < this.nSparks; i++) {
            const spark = this.sparks[i];
            push();
            translate(spark.x, spark.y, spark.z);
            sphere(radius);
            this.sparks[i].setMag(this.i * this.sparkSpeed);
            pop();
        }

        this.i += 1;
        pop();

        this.timer += deltaTime;

        if(this.timer >= this.timeToLive){
            this.over = true;
        }
    }

    isOver(){
        return this.over;
    }
}