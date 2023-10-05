void setup() {
    size(600, 400);
    background(255);
  }
  
  void draw() {
    // Dibuja un fondo blanco para borrar la pantalla en cada iteración
    background(255);
    
    // Dibuja una línea que sigue el movimiento del ratón
    stroke(0, 0, 255);
    line(0, mouseY, width, mouseY);
    
    // Dibuja círculos que siguen el movimiento del ratón en el eje X
    noStroke();
    fill(255, 0, 0, 150);
    ellipse(mouseX, height / 2, 50, 50);
    
    fill(0, 255, 0, 150);
    ellipse(mouseX, height / 2 + 75, 50, 50);
    
    // Dibuja un rectángulo que cambia de tamaño con el movimiento del ratón
    fill(255, 255, 0, 150);
    rect(mouseX - 25, mouseY - 25, 50, 50);
  }
  
  void keyPressed() {
    // Cambia el color de fondo cuando se presiona una tecla
    if (key == '1') {
      background(255);
    } else if (key == '2') {
      background(200, 200, 200);
    }
  }
  
  void mousePressed() {
    // Cambia el color de los círculos cuando se hace clic en ellos
    float d1 = dist(mouseX, mouseY, mouseX, height / 2);
    float d2 = dist(mouseX, mouseY, mouseX, height / 2 + 75);
    
    if (d1 < 25) {
      fill(random(255), random(255), random(255), 150);
    }
    
    if (d2 < 25) {
      fill(random(255), random(255), random(255), 150);
    }
  }