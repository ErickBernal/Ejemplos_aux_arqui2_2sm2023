float[] temperatureData = {25, 28, 30, 32, 29, 27, 26, 31, 33, 28}; // Datos de temperatura
int currentTimeIndex = 0; // Índice de tiempo actual
int thermometerHeight = 400; // Altura del termómetro
int thermometerWidth = 40; // Ancho del termómetro
int padding = 50; // Espacio de padding alrededor del termómetro
float minTemperature = 25; // Temperatura mínima
float maxTemperature = 33; // Temperatura máxima

void setup() {
  size(400, 600);
  background(240);
  frameRate(1); // Cambiar el frameRate para actualizar la temperatura cada segundo
}

void draw() {
  background(240);
  
  // Dibujar el termómetro
  float temperature = temperatureData[currentTimeIndex];
  float temperatureY = map(temperature, minTemperature, maxTemperature, height - padding, padding);
  float thermometerTop = height - padding - thermometerHeight;
  
  // Tubo del termómetro
  fill(200);
  stroke(0);
  rect(width / 2 - thermometerWidth / 2, thermometerTop, thermometerWidth, thermometerHeight);
  
  // Bulbo del termómetro
  fill(255, 0, 0);
  stroke(0);
  ellipse(width / 2, temperatureY, thermometerWidth * 1.5, thermometerWidth * 1.5);
  
  // Etiqueta de temperatura
  fill(0);
  textAlign(CENTER);
  textSize(20);
  text(nf(temperature, 0, 1) + "°C", width / 2, height - padding + 30);
  
  // Actualizar el tiempo
  currentTimeIndex = (currentTimeIndex + 1) % temperatureData.length;
}
