rd = Math.floor(Math.random()*254)+1;
geen = Math.floor(Math.random()*254)+1;
bue = Math.floor(Math.random()*254)+1;

function preload(){
    clown = loadImage('download.jpg')
}

function setup(){
canvas = createCanvas(300,300,89,89);
canvas.center();

video = createCapture(VIDEO);
video.hide();


poseNet=ml5.poseNet(video,modeloaded);
poseNet.on('pose',gotPoses);
}

function gotPoses(results){

    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX);
        console.log(noseY);
    }
}

function modeloaded(){
    console.log("model is loaded");
}

function draw(){
    image(video,0,0,300,300)
}

function takeSnapshot(){
    save('image_name.png');
}


