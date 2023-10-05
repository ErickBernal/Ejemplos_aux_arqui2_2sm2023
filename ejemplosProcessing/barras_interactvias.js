int[] data = {45, 90, 30, 75, 60};  // Datos iniciales para las barras
String[] labels = {"A", "B", "C", "D", "E"};  // Etiquetas para las barras
int maxValue;  // Valor máximo en los datos
int barWidth;  // Ancho de las barras
int selectedBar = -1;  // Barra seleccionada por defecto (-1 indica ninguna)

void setup() {
  size(400, 400);
  maxValue = max(data);
  barWidth = width / data.length;
  
  // Llama a la función para dibujar las barras
  drawBars();
}

void draw() {
  // No es necesario dibujar constantemente en draw(), ya que dibujamos en setup()
}

void drawBars() {
  background(255);
  for (int i = 0; i < data.length; i++) {
    float barHeight = map(data[i], 0, maxValue, 0, height - 20);
    fill(50, 100, 200);
    rect(i * barWidth + 20, height - barHeight - 10, barWidth - 10, barHeight);
    fill(0);
    textAlign(CENTER);
    text(labels[i], i * barWidth + 20 + (barWidth - 10) / 2, height - 5);
  }
}

void mousePressed() {
  // Verificar si el mouse está sobre una barra y seleccionarla
  int overBar = int((mouseX - 20) / barWidth);
  if (overBar >= 0 && overBar < data.length) {
    selectedBar = overBar;
  }
}

void mouseDragged() {
  // Modificar la altura de la barra seleccionada mientras se arrastra el mouse
  if (selectedBar >= 0 && selectedBar < data.length) {
    data[selectedBar] = max(0, min(height - 20, mouseY - (height - data[selectedBar] * (height - 20) / maxValue - 10)));
    drawBars();  // Volver a dibujar el gráfico con la barra modificada
  }
}

void mouseReleased() {
  // Al soltar el mouse, deseleccionar la barra
  selectedBar = -1;
}
