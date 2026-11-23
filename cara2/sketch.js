function setup() {
  createCanvas(600, 600); // Àrea de dibuix és de 600 px de 600 de cada costat.
}
// mouseX=300; mouseY=300
function draw() {
  background (mouseY -185, mouseX -285, mouseY -285); // Fons de pantalla, gris si te un número entre 0 i 255. 0 és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim 3 números el primer número és vermellor o R (Red), el segon número és la verdor o G (Green) i el tercer número és la blauor o B (Blau). Els colors RGB permeten construir 16.000.000 de colors diferents (255x255x255).

  text ("mouseX: " + round (mouseX), 20, 20)
  text ("mouseY: " + round (mouseY), 20, 40)
  
  fill (252, 196, 154); // Color Cara.
  ellipse (mouseX, mouseY, 200, 250); // Cara. El primer número estre paréntesis és la posició x del centre del el·lipse, el segon número és la posició i alçada del centre de l'el·lipse, el tercer número és l'amplada de l'el·lipse i el quart número és l'alçada de l'el·lipse.
  
  fill (mouseX -300, mouseY -300, mouseX - mouseY); // Color Ull Esquerra. Funciona com el background.
  ellipse (mouseX -40, mouseY -30, 60, 30); // Ull Esquerra.
  fill (mouseY -45, mouseX -300, mouseX - mouseY -300); // Color Iris Esquerra.
  circle (mouseX - 40, mouseY -30, 25) // Iris Esquerra.
  fill (255, 255, 255); // Color Pupila Esquerra.
  circle (mouseX -40, mouseY -30, 10); // Pupila Esquerra.
  noFill (); // Treure Color Cella Esquerra.
  arc (mouseX -40, mouseY-60, 50, 10, PI, 0); // Cella Esquerra.
  fill (mouseX -45, mouseY -45, mouseX - mouseY -45); // Color Ull Dret.
  ellipse (mouseX +40,mouseY -30, 60, 30); // Ull Dret.
  fill (mouseY -300, mouseX -45, mouseY - mouseX -300); // Color Iris Dret.
  circle (mouseX +40, mouseY -30, 25); // Iris Dret.
  fill (0, 0, 0); // Color Pupila Dreta.
  circle (mouseX +40,mouseY -30, 10); // Pupila Dreta.
  noFill (); // Treure Color Cella Dreta.
  arc (mouseX +40, mouseY -60, 50, 10, PI, 0); // Cella Dreta.
  
  fill(252,124,106); // Color Boca.
  arc (mouseX, mouseY +60, 100, 40, 0, PI);// Boca. Funciona com el el·lipse els primers quatre números i els dos últims són 0 PI o PI,0.
  push();
  noFill();
  arc(mouseX , mouseY +60, 99 , 1, 0, PI);
  pop();
  fill (207, 88, 70); // Color Llengua.
  arc (mouseX, mouseY +78, 50, 10, PI, 0); // Llengua.
  
  fill (191, 144, 105); // Color Nas Ombra +.
  triangle (mouseX +20, mouseY +40, mouseX, mouseY +50, mouseX -20, mouseY +40); // Nas Ombra +.
  fill (230,173,125); // Color Nas Ombra -.
  triangle (mouseX +20, mouseY +40, mouseX, mouseY, mouseX -20, mouseY +40); // Nas Ombra -.
  fill (242, 204,174); // Color Nas Llum.
  triangle (mouseX, mouseY +40, mouseX, mouseY, mouseX -20, mouseY +40); // Nas Llum.
 

}
