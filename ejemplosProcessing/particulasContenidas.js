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
  background(255);
  translate(width / 2, height / 2); // Mover el origen al centro
  
  float circleRadius = min(width, height) * 0.4; // Radio del círculo
  ellipse(0, 0, circleRadius * 2, circleRadius * 2); // Dibujar el círculo
  
  // Dibujar los puntos como círculos pequeños dentro del círculo
  for (int i = 0; i < numPoints; i++) {
    float x = xPoints[i];
    float y = yPoints[i];
    
    // Calcular la distancia desde el centro del círculo
    float distance = dist(0, 0, x, y);
    
    if (distance <= circleRadius) {
      float radius = random(1, 5); // Tamaño aleatorio para los círculos
      ellipse(x, y, radius * 2, radius * 2);
    }
  }
}

void generatePoints(int num) {
  for (int i = 0; i < num; i++) {
    // Generar puntos aleatorios dentro del círculo
    float angle = random(TWO_PI);
    float radius = random(0.4 * min(width, height));
    xPoints[i] = radius * cos(angle);
    yPoints[i] = radius * sin(angle);
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
