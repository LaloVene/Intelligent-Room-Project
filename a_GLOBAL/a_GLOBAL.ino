// Libraries
#include "d_alarm.h"

/* === Defining Pins === */
  // ALARM
    const int PIRPin = 2;
    const int SPEAKERPin = 3;
    const int DOORPin = 4;
    const int ARMPin = 1; // Test pin

// Objects
  // ALARM
    Alarm alarm(PIRPin, SPEAKERPin, DOORPin);

// Global Variables

// Function prototypes
