const minSize = 20;
const maxSize = 1000;
const widthAndHeight = 2;

class Star{

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = minSize;
    }

    move(speed){
        this.z += speed;
        this.size = map(speed, minSpeed, maxSpeed, minSize, maxSize);
    }

    show(){
        push();
        translate(this.x, this.y, this.z - this.size/2);
        box(widthAndHeight, widthAndHeight, this.size);
        pop();
    }

    isOutOfScreen(){
        return this.z > cameraZ;
    }
}