
//Arduino ide
void setup() {
  pinMode(3,INPUT);
  Serial.begin(9600);
}
void loop(){
  Serial.println(digitalRead(3));
  delay(500);
}