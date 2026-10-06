function setup() {
  createCanvas(600, 600); // Àrea de dibuix és de 600 px de 600 de cada costat.
}

function draw() {
  background (74, 88, 176); // Fons de pantalla, gris si te un número entre 0 i 255. 0 és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim 3 números el primer número és vermellor o R (Red), el segon número és la verdor o G (Green) i el tercer número és la blauor o B (Blau). Els colors RGB permeten construir 16.000.000 de colors diferents (255x255x255).
  
  fill (252, 196, 154); // Color Cara.
  ellipse (300,300,200,250); // Cara. El primer número estre paréntesis és la posició x del centre del el·lipse, el segon número és la posició i alçada del centre de l'el·lipse, el tercer número és l'amplada de l'el·lipse i el quart número és l'alçada de l'el·lipse.
  
  fill (0,0,0); // Color Ull Esquerra. Funciona com el background.
  ellipse (260,270,60,30); // Ull Esquerra.
  fill (18, 18, 199); // Color Iris Esquerra.
  circle (260,270,25) // Iris Esquerra.
  fill (255, 255, 255); // Color Pupila Esquerra.
  circle (260,270,10); // Pupila Esquerra.
  noFill (); // Treure Color Cella Esquerra.
  arc (260,240,50,10,PI,0); // Cella Esquerra.
  fill (255, 255, 255); // Color Ull Dret.
  ellipse (340,270,60,30); // Ull Dret.
  fill (99, 64, 18); // Color Iris Dret.
  circle (340,270,25); // Iris Dret.
  fill (0,0,0); // Color Pupila Dreta.
  circle (340,270,10); // Pupila Dreta.
  noFill (); // Treure Color Cella Dreta.
  arc (340,240,50,10,PI,0); // Cella Dreta.
  
  fill(252, 124,106); // Color Boca.
  arc (300,360,100,40,0,PI); line(250,360,350,360)// Boca. Funciona com el el·lipse els primers quatre números i els dos últims són 0 PI o PI,0.
  fill (207, 88, 70); // Color Llengua.
  arc (300,378,50,10,PI,0); // Llengua.
  
   fill (230, 173, 125); // Color Nas Ombra.
  triangle (320,340,300,300,280,340); // Nas Ombra.
   fill (242, 204, 174); // Color Nas Llum.
  triangle (300,340,300,300,280,340); // Nas Llum.


}
