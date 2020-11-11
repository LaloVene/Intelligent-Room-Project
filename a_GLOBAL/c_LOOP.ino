void loop() {
  
  // Alarm
    if (digitalRead(ARMPin)) {
      alarm.arm(); // Arm Alarm
    }
    else {
      alarm.disarm();
    }
    alarm.loop(); // Alarm Loop
  //Ultrasonico
  ultrasonico();
  //Fotoresistencia
  fotoresistencia();
}
