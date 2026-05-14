var monospace;
var script;

var gridData = [
  [null,    "love's", null,     null,     "never", null  ],
  [null,    null,     "wasted", null,     null,    null  ],
  ["when",  null,     null,     null,     null,    "it's"],
  [null,    null,     null,     "shared", null,    null  ],
];

var cols = 6;
var rows = 4;
revealed = [];

function preload() {
  monospace = loadFont('Inconsolata-Regular.ttf');
  script = loadFont('MonsieurLaDoulaise-Regular.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let r = 0; r < rows; r++) {
    revealed[r] = [];
    for (let c = 0; c < cols; c++) {
      revealed[r][c] = false;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#F0F0F0");

  var gridX = windowWidth * 0.18;
  var gridY = 140;
  var cellW = 150;
  var cellH = 150;

  fill("#FFB5C0");
  noStroke();
  rect(gridX, 70, 370, 40);
  
  fill("black");
  noStroke();
  textSize(14);
  textFont(monospace);
  text("click to the boxes to reveal text", gridX+70, 94);
  

  // draw grid
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = gridX + c * cellW;
      let y = gridY + r * cellH;
      let isRevealed = revealed[r][c];
      let hasContent = gridData[r][c] !== null;

      // cell background
      if (isRevealed && hasContent) {
        fill("#FFB5C0");
      } else {
        fill("#D9D9D9");
      }
      stroke("black");
      strokeWeight(1);
      rect(x, y, cellW, cellH);

      // show text if revealed and has content
      if (isRevealed && hasContent) {
        fill("white");
        noStroke();
        textFont(script);
        textSize(35);
        textAlign(CENTER, CENTER);
        text(gridData[r][c], x + cellW/2, y + cellH/2);
      }
    }
  }
}

function mousePressed() {
  let gridX = windowWidth * 0.18;
  let gridY = 140;
  let cellW = 150;
  let cellH = 150;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = gridX + c * cellW;
      let y = gridY + r * cellH;

      if (mouseX > x && mouseX < x + cellW &&
          mouseY > y && mouseY < y + cellH) {
        revealed[r][c] = !revealed[r][c];
      }
    }
  }
}