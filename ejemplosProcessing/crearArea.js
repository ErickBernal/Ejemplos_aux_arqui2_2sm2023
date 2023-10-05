PVector[] vertices; // Arreglo para almacenar los vértices del polígono
boolean drawing = true; // Variable para indicar si se está dibujando

void setup() {
  size(400, 400);
  background(220);
  vertices = new PVector[0]; // Inicialmente, no hay vértices
}

void draw() {
  if (drawing) {
    background(220); // Limpiar el fondo
    
    // Dibujar el polígono
    noFill();
    stroke(0);
    beginShape();
    for (PVector vertex : vertices) {
      vertex(vertex.x, vertex.y);
    }
    endShape(CLOSE);
  }
}

void mousePressed() {
  // Agregar un vértice al polígono al hacer clic
  if (drawing) {
    PVector mousePos = new PVector(mouseX, mouseY);
    vertices = (PVector[]) append(vertices, mousePos);
  }
}

void keyPressed() {
  // Finalizar el dibujo y cerrar el polígono al presionar cualquier tecla
  if (key == ' ') {
    drawing = false;
  }
}
