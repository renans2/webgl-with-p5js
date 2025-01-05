const xs = [-1,0,1,1,1,0,-1,-1];
const zs = [-1,-1,-1,0,1,1,1,0];
const size = 500;
const depth = 2;
let counter = 0;
let eyeX, eyeY, eyeZ;
let cam;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    stroke(255);
    colorMode(HSL);
    cursor('grab');

    specularMaterial(0, 0, 100);
    shininess(10);
    cam = createCamera();
}

function draw() {
    background(0);
    orbitControl(2,2,2);

    // pulsating stroke-weight
    strokeWeight(map(sin(frameCount * 0.05), -1, 1, 0, 2));

    // change fov according to the distance of camera
    const distance = createVector(cam.eyeX,cam.eyeY,cam.eyeZ).mag();
    const newFov = map(distance, 1, 10000, 1.5, 1);
    perspective(newFov, width/height, 1, 10000);

    // set two points for stronger lighting
    pointLight(frameCount % 360,100,50,cam.eyeX,cam.eyeY,cam.eyeZ);
    pointLight(frameCount % 360,100,50,cam.eyeX,cam.eyeY,cam.eyeZ);

    // only rotate if camera is not moving
    if(eyeX === cam.eyeX && eyeY === cam.eyeY && eyeZ === cam.eyeZ){
        counter++;
    }

    // rotate
    rotateX(0.005 * counter);
    rotateY(0.007 * counter);
    rotateZ(0.009 * counter);

    // update
    eyeX = cam.eyeX;
    eyeY = cam.eyeY;
    eyeZ = cam.eyeZ;

    // draw menger sponge (recursive-fractal)
    drawSponge(depth, size);
}

function drawSponge(depth, size){
    if(depth > 0) {
        const shift = size/3;

        for(let i = 0; i < 8; i++){
            const x = xs[i] * shift;
            const z = zs[i] * shift;

            push();
            translate(x, -shift, z);
            drawSponge(depth-1, size/3);

            translate(0, 2 * shift, 0);
            drawSponge(depth-1, size/3);

            if(i % 2 === 0){
                translate(0, -shift, 0);
                drawSponge(depth-1, size/3)
            }
            pop();
        }
    } else {
        box(size);
    }
}
