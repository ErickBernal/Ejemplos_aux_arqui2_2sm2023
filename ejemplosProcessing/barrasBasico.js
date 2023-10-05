int[] data = {45, 90, 30, 75, 60};  // Datos para las barras
String[] labels = {"A", "B", "C", "D", "E"};  // Etiquetas para las barras
int maxValue = max(data);  // Encontrar el valor máximo en los datos
int barWidth;  // Ancho de las barras

void setup() {
  size(400, 400);
  background(255);
  
  int numBars = data.length;
  barWidth = width / numBars;  // Calcular el ancho de las barras
  
  // Dibujar las barras y etiquetas
  for (int i = 0; i < numBars; i++) {
    // Calcular la altura de la barra en función de los datos
    float barHeight = map(data[i], 0, maxValue, 0, height - 20);
    
    // Dibujar la barra
    fill(50, 100, 200);
    rect(i * barWidth + 20, height - barHeight - 10, barWidth - 10, barHeight);
    
    // Dibujar la etiqueta
    fill(0);
    textAlign(CENTER);
    text(labels[i], i * barWidth + 20 + (barWidth - 10) / 2, height - 5);
  }
}
