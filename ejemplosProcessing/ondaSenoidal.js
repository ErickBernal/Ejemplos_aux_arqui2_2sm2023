ArrayList<Float> data = new ArrayList<Float>();  // Almacenar los datos en el tiempo
int time = 0;   // Tiempo inicial
float yMax = 100; // Valor máximo en el eje y
int predictionInterval = 30; // Intervalo de predicción en frames
float predictionValue = 0; // Valor predictivo inicial

void setup() {
  size(800, 400);
  frameRate(30);
  noFill();
}

void draw() {
  background(240);

  // Actualizar el tiempo y agregar datos simulados
  time += 1;
  float newValue = sin(time * 0.1) * 40 + 50; // Simulación de datos
  data.add(newValue);

  // Dibujar el gráfico de líneas
  stroke(0);
  beginShape();
  for (int i = 0; i < data.size(); i++) {
    float x = map(i, 0, data.size() - 1, 50, width - 50);
    float y = map(data.get(i), 0, yMax, height - 50, 50);
    vertex(x, y);
  }
  endShape();

  // Dibujar la línea de predicción
  float predictionX = map(data.size(), 0, data.size() - 1, 50, width - 50);
  float predictionY = map(predictionValue, 0, yMax, height - 50, 50);
  stroke(255, 0, 0);
  line(predictionX, height - 50, predictionX, predictionY);

  // Actualizar el valor predictivo periódicamente
  if (frameCount % predictionInterval == 0) {
    predictionValue = random(yMax); // Actualización de valor predictivo simulado
  }

  // Eliminar datos antiguos para mantener el gráfico en pantalla
  if (data.size() > width - 100) {
    data.remove(0);
  }
}
