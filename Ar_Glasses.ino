int currentState;
int lastState = LOW;

void setup() {
  pinMode(0, INPUT);
  pinMode(A0, INPUT);
  pinMode(A1, INPUT);
  Serial.begin(9600);
}

void loop() {
  int xValue = 0;
  int yValue = 0;
  currentState = digitalRead(0);

  if(digitalRead(0)) 
    Serial.println("The sensor is touched");

  lastState = currentState;
  xValue = analogRead(A0);
  yValue = 1023 - analogRead(A1);
  Serial.print('(');
  Serial.print(xValue);
  Serial.print(", ");
  Serial.print(yValue);
  Serial.println(')');
}
