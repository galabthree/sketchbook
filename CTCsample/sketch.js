let x = 0;
let y = 0;

function setup() {
  createCanvas(720, 720);
  noFill();
  frameRate(1);
}

function draw() {

    if ((mouseX > width/4 && mouseX < 3 * [width/4]) && (mouseY > height/4 && mouseY < 3 * [height/4]) )  {
  background (random(0, 255), random(0, 255), random(0, 255));
} 
  
  else {
  background (255);
}
  translate(30, 30);
  genQuad();
}

function genQuad() {
  var Colors = [color('red'), color('cyan'), color('black'), color('green'), color('orange'), color('blue')];
  for (var x = 0; x < width - 30; x += 230) {
    for (var y = 0; y < height - 30; y += 230) {
      for (let i = 0; i < 4; i++) {   
        quad(random(-30 + x, 30 + x), random(-30 + y, 30 + y), random(185 + x, 215 + x), random(-30 + y, 30 + y), random(185 + x, 215 + x), random(185 + y, 215 + y), random(-30 + x, 30 + x), random(185 + y, 215 + y));
      }
      stroke(Colors[int(random(0, Colors.length))]);
    }
  }
}