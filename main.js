function preload(){
     
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.position(725,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
    circle(30,30,50);
    circle(570,30,50);
    circle(570,470,50);
    circle(30,470,50);
    rect(20, 20, 20, 470);
    rect(560, 20, 20, 470);
    rect(40, 20, 540, 20);
    rect(40, 460, 540, 20);
}
function download(){
    save('myPhoto.png');
}