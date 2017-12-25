const sc = document.getElementById('src');
const dc = document.getElementById('dst');
const sc_ctx = sc.getContext("2d");
const dc_ctx = dc.getContext("2d");

var sMn = 10;
var sMx = 100;
var xMn = -sMx;
var yMn = -sMx;
var xMx; // Maximum letter pos in x
var yMx; // Maximum letter pos in y

var currentGeneration;
var currentDnaIndex = 0;

let si = new Image();

si.onload = function() {
  sc.width = si.width;
  sc.height = si.height;
  dc.width = si.width;
  dc.height = si.height;
  yMx = si.height;
  xMx = si.width;
  sc_ctx.drawImage(si, 0, 0);
}

function randomBetween(min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return randomBetween(0, 255);
}

function randomLetter() {
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +   
                 "abcdefghijklmnopqrstuvwxyz" +
                 "0123456789";
  return possible.charAt(Math.floor(Math.random() * possible.length));
}

function intToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function c2hex(c) {
    return "#" + intToHex(c) + intToHex(c) + intToHex(c);
}

function mean(arr) {
    var i, sum = 0, len = arr.length;
    for (i = 0; i < len; i++) { sum += arr[i]; }
    return sum / len;
}

function generateDna(nog, cback) {
  let dna = [];
  for (let i=0; i<nog; i++) {
    dna.push({
      i: i,
      s: randomBetween(sMn, sMx),
      x: randomBetween(xMn, xMx),
      y: randomBetween(yMn, yMx),
      t: randomLetter(),
      c: randomColor()
    });
  }
  return dna
}

function mutateDna(dna) {
  for (let i in dna) {
    dna[i].x = (dna[i].x + randomBetween(0, 10)) - 5;
    dna[i].y = (dna[i].y + randomBetween(0, 10)) - 5;
    dna[i].s = (dna[i].s + randomBetween(0, 10)) - 5;
    dna[i].c = (dna[i].c + randomBetween(0, 10)) - 5;
  }
}

function getDiff() {
  let s_data = sc_ctx.getImageData(0, 0, sc.width, sc.height).data;
  let d_data = dc_ctx.getImageData(0, 0, sc.width, sc.height).data;
  let diffs = []
  for (let x=0; x<sc.width; x++) {
    for (let y=0; y<sc.height; y++) {
      let v1 = s_data[(x + (y * sc.width)) * 4];
      let v2 = d_data[(x + (y * sc.width)) * 4];
      diffs.push(Math.abs(v1 - v2));
    }
  }
  return 255 - mean(diffs);
}

function drawDna() {
  dna = currentGeneration[currentDnaIndex];
  dc_ctx.fillStyle = "white";
  dc_ctx.fillRect(0, 0, dc.width, dc.height);
  for (idx in dna) {
    let gen = dna[idx];
    dc_ctx.font = gen.s + "px Arial";
    dc_ctx.fillStyle = c2hex(gen.c);
    dc_ctx.fillText(gen.t, gen.x, gen.y);  
  }
  if (currentDnaIndex < currentGeneration.length - 1) {
    dna.f = getDiff();
    currentDnaIndex++;
    window.requestAnimationFrame(drawDna);
  } else {
    console.log('Getting best DNA to next generation.')
    let bestDna = currentGeneration.sort(function(a, b) { return a.f - b.f })[0];
    nog = document.getElementById('nog').value;
    for (let i in currentGeneration) {
      currentGeneration[i] = mutateDna(bestDna);
    }
    currentDnaIndex = 0;
    window.requestAnimationFrame(drawDna);
  }
}

function loadImg() {
  si.src = document.getElementById('si').value  
}

function createGeneration(parentGeneration) {
  let newGeneration = new Array();
  for (let i=0; i<=30; i++) {
    newGeneration.push(generateDna(document.getElementById('nog').value));
  }
  return newGeneration;
}

function startStop() {
  currentGeneration = createGeneration()
  drawDna()
}
