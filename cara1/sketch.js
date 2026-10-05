function setup() {
  createCanvas(600, 600); // Àrea de dibuix és de 600 px de 600 de cada costat.
}

function draw() {
  background(74, 88, 176); // Fons de pantalla, gris si te un número entre 0 i 255. 0 és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim 3 números el primer número és vermellor o R (Red), el segon número és la verdor o G (Green) i el tercer número és la blauor o B (Blau). Els colors RGB permeten construir 16.000.000 de colors diferents (255x255x255).
  fill(252, 196, 154); ellipse(300,300,200,250); // Cara
  fill(0,0,0); ellipse(260,270,60,30); // Ull esquerra
  fill(18, 18, 199); circle (260,270,25) // Iris esquerra
  fill(255, 255, 255); circle (260,270,10); // Pupila esquerra
  fill(255, 255, 255); ellipse(340,270,60,30); // Ull dret
  fill(99, 64, 18); circle (340,270,25); // Iris dret
  fill(0,0,0); circle (340,270,10); // Pupila dreta
  
  fill(252, 124, 106); arc(300,350,100,40,0,PI); line(250,350,350,350)// Boca
   fill(240, 173, 125); triangle(320,340,300,300,280,340); // Nas
  
}
