var scripts = [];
var monospace;
var lovingFont;
var music;

function preload() {
  scripts = [
    loadFont('../assets/fonts/MonsieurLaDoulaise-Regular.ttf'),
    loadFont('../assets/fonts/InstrumentSerif-Italic.ttf'),
    loadFont('../assets/fonts/MsMadi-Regular.ttf'),
  ];
  monospace = loadFont('../assets/fonts/Inconsolata-Regular.ttf');
  music = loadSound('../assets/sound/theartofloving.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#F0F0F0");
  
  artFont = random(scripts);
  lovingFont = random(scripts);
  music.play();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F0F0F0");
  textAlign(CENTER);
  
  //box
  fill("#FFB5C0");
  noStroke();
  rect(windowWidth/2+226,windowHeight/2+50,170,25);

  //box text
  fill("white");
  textSize(12);
  textFont(monospace);
  text("click to change the fonts", windowWidth/2+310,windowHeight/2+67);
  
  //"The Art of Loving"
  fill("black");
 
  textSize(40);
  textFont('helvetica');
  text("The", windowWidth/2 - 310, windowHeight/2);
  text("of", windowWidth/2-45, windowHeight/2);

  textSize(150);
  textFont(artFont);
  text('Art', windowWidth/2 - 160, windowHeight/2);
  textFont(lovingFont);
  text('Loving', windowWidth/2 + 180, windowHeight/2);
}

function mousePressed() {
  artFont = random(scripts);
  lovingFont = random(scripts);
}