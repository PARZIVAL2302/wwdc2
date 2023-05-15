status="";
objects = [];

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    video =  createCapture(VIDEO);
    video.hide();
}

function start(){
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input").value;
}

function modelLoaded(){
    console.log("modeLoaded");
    status=true;
}

function gotResult(error, results){
    objects=results;
}

function draw(){
    image(video, 0, 0, 380, 380);

    if(status != false){
        for(i=0; i<objects.length; i++){
            confidence = floor(objects[i].confidence*100);
            name = objects[i].label;
            x = objects[i].x;
            y = objects[i].y;
            height = objects[i].height;
            width = objects[i].width;
            noFill();
            text(name + "" + confidence, x+15, y+15);
            rect(x, y, height, width)
        }
    }
}

if(objects[i].label == name){
    objectDetector.detect(gotResult);
    document.getElementById("object_status").innerHTML = name + " found";
}