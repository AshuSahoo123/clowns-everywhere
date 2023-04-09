noseX = 0;
noseY = 0;

function preload() {
    clown_image = loadImage("clown-nose.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model is loaded!');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("NoseX = ", results[0].pose.nose.x);
        console.log("NoseY = ", results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 30;
        noseY = results[0].pose.nose.y - 30;
    }
}


function take_snapshot() {
    save("student.png");
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_image, noseX, noseY, 60, 60);
}