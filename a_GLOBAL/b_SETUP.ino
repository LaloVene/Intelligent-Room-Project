void setup() {
  
  // Alarm
    pinMode(ARMPin, INPUT); // Test pin

  //Sensor ultrasónico
    Serial.begin(9600);//iniciailzamos la comunicación
    pinMode(ledUS, OUTPUT);
    pinMode(Trigger, OUTPUT); //pin como salida
    pinMode(Echo, INPUT);  //pin como entrada
    digitalWrite(Trigger, LOW);//Inicializamos el pin con 0
  //Foto resistencia
    pinMode(led, OUTPUT);
}
