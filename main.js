noseX = 0;
noseY = 0;

function preload() {
          clown_nose = loadImage('https://i.postimg.cc/13q7x9XD/Clown-Nose-PNG.png');
}

function setup() {
          canvas = createCanvas(300 , 300);
          canvas.center()
          video = createCapture(VIDEO);
          video.size(300 ,300);
          video.hide();

          poseNet = ml5.poseNet(video , modelLoaded);
          poseNet.on('pose' , gotPoses)
}

function modelLoaded() {
          console.log('PoseNet Is Initialised');
}

function draw() {
          image(video , 0 , 0 , 300 , 300);
          classifier.classify(video , gotResult);
}
