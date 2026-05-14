var script1;
var monospace;
var music;

tracktitles = [
  "The Art of Loving", 
  "Nice to Each Other", 
  "Lady Lady", 
  "Close Up", 
  "So Easy (To Fall In Love)", 
  "Let Alone The One You Love", 
  "Man I Need", 
  "Something Inbetween", 
  "Loud", 
  "Baby Steps",
  "A Couple Minutes",
  "I've Seen It",
];

trackaudios = [
  "theartofloving.mp3",
  "nicetoeachother.mp3",
  "ladylady.mp3",
  "closeup.mp3",
  "soeasy.mp3",
  "letalone.mp3",
  "manineed.mp3",
  "somethinginbetween.mp3",
  "loud.mp3",
  "babysteps.mp3",
  "coupleminutes.mp3",
  "iveseenit.mp3",
];

function preload() {
  script1 = loadFont('MonsieurLaDoulaise-Regular.ttf');
  monospace = loadFont('Inconsolata-Regular.ttf')
  music = loadSound('theartofloving.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F0F0F0");

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F0F0F0");
  textAlign(LEFT);
  
  //box
  fill("#FFB5C0");
  stroke("black");
  rect(windowWidth/3,100,500,480);
  
   //"Tracklist"
  fill("black");
  textSize(100);
  textFont(script1)
  text('Tracklist', windowWidth/2, 100);

  //"click tracks to play music"
  fill("black");
  noStroke();
  textSize(12);
  textFont(monospace);
  text("click tracks to play music", windowWidth/2-50,windowHeight/2+225);
  
  //lines and track titles
  for (x = 0; x < 12; x++){
    stroke(1);
    line(windowWidth/3, 100 + x * 40, windowWidth/3 + 500, 100 + x * 40);
    row = 100 + x * 40
    
    if (mouseX > windowWidth/3 && mouseX < windowWidth/3 + 500 &&
      mouseY > row && mouseY < row + 40) {
    fill("black");
    noStroke();
    textSize(19);
    textFont(monospace)
    text(tracktitles[x], windowWidth/3 + 12, 111 + x * 40 + 15);
    }
  }
}
 
function mousePressed() {
  for (let x = 0; x < 12; x++) {
    let row = 100 + x * 40;
    if (mouseX > windowWidth/3 && mouseX < windowWidth/3 + 500 &&
        mouseY > row && mouseY < row + 40) {
      music.stop();
      music = loadSound(trackaudios[x], () => music.play());
    }
  }


}
