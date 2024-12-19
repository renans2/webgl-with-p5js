class Ring{
    constructor(nSpheres, sphereRadius, ringRadius, switchInterval, rotationValues) {
        this.nSpheres = nSpheres;
        this.sphereRadius = sphereRadius;
        this.ringRadius = ringRadius;
        this.timer = 0;
        this.switchInterval = switchInterval;
        this.index = 0
        this.rotationX = rotationValues.x;
        this.rotationY = rotationValues.y;
        this.rotationZ = rotationValues.z;
    }

    timeToSwitch(){
        this.timer += deltaTime;

        if(this.timer > this.switchInterval){
            this.timer = 0;
            return true;
        }

        return false;
    }

    switch(){
        this.index = (this.index + 1) % this.nSpheres;
    }

    drawRing(){
        if(this.timeToSwitch())
            this.switch();

        rotateX(this.rotationX * frameCount);
        rotateY(this.rotationY * frameCount);
        rotateZ(this.rotationZ * frameCount);

        const angleOffset = TWO_PI / this.nSpheres;

        for (let i = 0; i < n; i++) {
            const angle = i * angleOffset;
            const y = 0;
            const x = sin(angle) * this.ringRadius;
            const z = cos(angle) * this.ringRadius;

            push();
            if(i === this.index){
                fill(255);
            } else {
                const distance = this.getDistanceToIndex(i);

                if(distance <= 10)
                    fill(map(distance, 0, 10, 255, 10));
                else
                    fill(10);
            }
            translate(x, y, z);
            sphere(this.sphereRadius);
            pop();
        }
    }

    getDistanceToIndex(i){
        const d1 = Math.abs(i - (this.nSpheres + this.index));
        const d2 = Math.abs(this.index - (this.nSpheres + i));
        const d3 = Math.abs(this.index - i);

        return Math.min(d1, d2, d3);
    }
}