class Star{

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    move(speed){
        this.z += speed;
    }

    show(){
        push();
        translate(this.x, this.y, this.z);
        box(1,1,50);
        pop();
    }

    isOutOfScreen(){
        return this.z > cameraZ;
    }
}