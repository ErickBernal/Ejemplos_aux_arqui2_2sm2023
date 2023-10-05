int inPin = 3;
int outPin = 13;
int btn = 0;
unsigned long time_now = 0;
int period = 1000;

void setup()
{
    Serial.begin(9600);
    pinMode(inPin, INPUT);
    pinMode(outPin, OUTPUT);
    time_now = millis();
}

void loop()
{
    // put your main code here, to run repeatedly:
    btn = digitalRead(inPin);
    digitalWrite(outPin, btn);

    if (millis() >= time_now + period)
    {
        time_now += period;
        Serial.print("Data: ");
        Serial.println(analogRead(A0));
        // delay(500);
    }
}