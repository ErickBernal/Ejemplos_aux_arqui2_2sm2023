int numPoints = 1000; // Número de puntos inicial
float[] xPoints = new float[numPoints]; // Coordenadas x de los puntos
float[] yPoints = new float[numPoints]; // Coordenadas y de los puntos

void setup() {
  size(800, 800);
  background(255);
  stroke(0);
  noFill();
  
  generatePoints(numPoints); // Generar puntos iniciales
}

void draw() {
  // Dibujar los puntos como círculos pequeños
  for (int i = 0; i < numPoints; i++) {
    float x = xPoints[i];
    float y = yPoints[i];
    float radius = random(1, 5); // Tamaño aleatorio para los círculos
    
    ellipse(x, y, radius, radius);
  }
}

void generatePoints(int num) {
  for (int i = 0; i < num; i++) {
    xPoints[i] = random(width);
    yPoints[i] = random(height);
  }
}

void keyPressed() {
  if (key == 's' || key == 'S') {
    save("pintura_puntillista.png");
    println("Imagen guardada como 'pintura_puntillista.png'");
  }
}

void mousePressed() {
  // Cambiar la concentración de puntos al hacer clic en el mouse
  if (numPoints == 1000) {
    numPoints = 5000;
    xPoints = new float[numPoints]; // Ajustar la longitud del arreglo
    yPoints = new float[numPoints]; // Ajustar la longitud del arreglo
  } else {
    numPoints = 1000;
    xPoints = new float[numPoints]; // Ajustar la longitud del arreglo
    yPoints = new float[numPoints]; // Ajustar la longitud del arreglo
  }
  background(255);
  generatePoints(numPoints);
  redraw(); // Volver a dibujar la escena
}
