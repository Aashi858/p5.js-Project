function preload(){}
function setup(){
     canvas = createCanvas(550,400);
     canvas.position(250,200);
     video = createCapture(VIDEO);
     video.hide();
}
function draw(){
    image(video,50,50,450,300);
}
function takeSnapshot(){
    save("my_photo.png");
}