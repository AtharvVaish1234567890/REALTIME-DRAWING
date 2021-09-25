nosex=0
nosey=0
leftWristX=0
rightWristX=0
difference=0

function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(550, 400);
    canvas.position(560, 135);

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("MODEL IS LOADED!");
}   

function gotPoses(results)
{
    if(results.length>0);
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex = " + nosex + "nosey = " + nosey );
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference= floor(leftWristX-rightWristX);

    }
}

function draw()
{
    background("#808080");
    fill("#ffc0cb");
    stroke("#ffc0cb");
    square(nosex, nosey, difference);
    document.getElementById("square_sides").innerHTML="Width & Height of the square = " +difference+ "px";
}