// Libraries
#include "d_alarm.h"

/* === Defining Pins === */
  // ALARM
    const int PIRPin = 2;
    const int SPEAKERPin = 3;
    const int DOORPin = 4;
    const int ARMPin = 1; // Test pin
  //US
    const int Trigger = 2;   //Pin digital 2 para el Trigger del sensor
    const int Echo = 3;   //Pin digital 3 para el echo del sensor
    int ledUS = 6;
    int pastD = 0;
  //fotoresistencia
    #define PIN_LDR A1
    int led = 5;
    int sensorPrev = 20;

// Objects
  // ALARM
    Alarm alarm(PIRPin, SPEAKERPin, DOORPin);

// Global Variables

// Function prototypes

void ultrasonico();
void fotoresistencia();
