void fotoresistencia(){
//Fotoresistencia
   int sensorValue = analogRead(PIN_LDR);
  Serial.print(sensorValue);
  Serial.print("\n");
  if (sensorValue <= 10 && sensorValue <= sensorPrev-2){
    digitalWrite(led, HIGH);
    Serial.print(sensorValue);
    Serial.print("Esta oscuro\n");
  }else if (sensorValue > 10 && sensorValue >= sensorPrev+2){
    digitalWrite(led, LOW);
    Serial.print(sensorValue);
    Serial.print("Esta iluminado\n");
  }
  delay(500);
  sensorPrev = sensorValue;
}
