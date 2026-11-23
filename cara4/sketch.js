function setup() {
  createCanvas(600, 600); // Àrea de dibuix és de 600 px de 600 de cada costat.
}

function draw() {

  let x = 20 * noise(0.005 * frameCount); // Entre 0 i 20, suau
  //Genera números aleatoris però seguint un soroll Perlin, es a dir, a canvis suaus a diferenci de random
  let y = 100 * noise(0.005 * frameCount + 10000);
  // Entre 0 i 100, suau
  //poso frameCount perque generi números a tota velocitat i com van molt ràpid, multiplico per 0.005 i aplico la funció noise per generar soroll. La funció noise genera números entre 0 i 1 però cada número es proper al seguent. Aixó pasa molt a la natura, que els canvis no són bruscos, per exemple les muntanyes, els rius...

  //noise (0.005 * frameCount + 10000); genera números del 0 al 1 i si el multiplico per 255, donarà números entre 0 i 255
  
  let z = 255 * noise(0.005 * frameCount + 10000);// Li sumo 10000 perque no surtin els mateixos nú meros de soroll.
  
let coloraleatori=random (0,255);
print (z);
  
 let r1=random (0, 15);
 let r2=random (0, 200);

frameRate (1000)
  
  background (74 + z, 88 - x, 176 + y); // Fons de pantalla, gris si te un número entre 0 i 255. 0 és negre i 255 és blanc. I qualsevol número entre 0 i 255 serà gris. Si tenim 3 números el primer número és vermellor o R (Red), el segon número és la verdor o G (Green) i el tercer número és la blauor o B (Blau). Els colors RGB permeten construir 16.000.000 de colors diferents (255x255x255).
  
  fill (252, 196, 154); // Color Cara.
  ellipse (300,300,200,250); // Cara. El primer número estre paréntesis és la posició x del centre del el·lipse, el segon número és la posició i alçada del centre de l'el·lipse, el tercer número és l'amplada de l'el·lipse i el quart número és l'alçada de l'el·lipse.
  push ();
  frameRate (10);
  fill (0+r2,0+x,0+y); // Color Ull Esquerra. Funciona com el background.
  ellipse (260,270,60,30); // Ull Esquerra.
  fill (18+r2, 18+r2, 199+r2); // Color Iris Esquerra.
  circle (260,270,25) // Iris Esquerra.
  fill (255-r2, 255-r2, 255-r2); // Color Pupila Esquerra.
  circle (260,270,10); // Pupila Esquerra.
  noFill (); // Treure Color Cella Esquerra.
  arc (260,240,50,10,PI,0); // Cella Esquerra.
  fill (255-y, 255-r2, 255-x); // Color Ull Dret.
  ellipse (340,270,60,30); // Ull Dret.
  fill (99+r2, 64+r2, 18+r2); // Color Iris Dret.
  circle (340,270,25); // Iris Dret.
  fill (0+r1,0,0); // Color Pupila Dreta.
  circle (340,270,10); // Pupila Dreta.
  noFill (); // Treure Color Cella Dreta.
  arc (340,240,50,10,PI,0); // Cella Dreta.
  pop();
  
 fill(252,124,106); // Color Boca.
  arc (300,360,100,40,0,PI);// Boca. Funciona com el el·lipse els primers quatre números i els dos últims són 0 PI o PI,0.
  push();
  noFill();
  arc(300,360,99, 1 , 0, PI);
  pop();
  fill (207,88,70); // Color Llengua.
  arc (300,378,50,10,PI,0); // Llengua.
  
push ();
  noStroke ();
  fill (191, 144, 105); // Color Nas Ombra +.
  triangle (320,340,300,350,280,340); // Nas Ombra +.
  fill (230,173,125); // Color Nas Ombra -.
  triangle (320,340,300,300,300,340); // Nas Ombra -.
  fill (242, 204,174); // Color Nas Llum.
  triangle (300,340,300,300,280,340); // Nas Llum.
 pop();
 

}
