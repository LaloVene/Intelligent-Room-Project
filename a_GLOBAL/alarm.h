
class Alarm {
  
  private:
    // PINs
    int pirPin;
    int speakerPin;
    int doorPin;

    // Flags
    bool isDoorLocked = false;
    bool intruder = false;
    bool isArmed = false;
  
  public:
    
    // Constructor
    Alarm(int pirPin, int speakerPin, int doorPin) {
      // Set pins
      this->pirPin = pirPin;
      this->speakerPin = speakerPin;
      this->doorPin = doorPin;

      // Set pinModes
      pinMode(this->pirPin, INPUT);
      pinMode(this->speakerPin, OUTPUT);
      pinMode(this->doorPin, OUTPUT);
    }

    // Arm / Disarm Methods
    void arm() {
      this->isArmed = true;
    }
    void disarm() {
      this->isArmed = false;
    }

    // Main Loop
    void loop() {

      // If not Armed
      if (!this->isArmed) {

        // Reset all flags
        if (this->intruder || this->isDoorLocked) {
          this->intruder = false;          
          this->isDoorLocked = false;
          
          this->soundOff();
          this->openDoor();
        }
        return;
      }

      // Lock Door
      if (!this->isDoorLocked) {
        this->isDoorLocked = true;
        this->closeDoor();
      }

      // Speaker alarm
      if (digitalRead(this->pirPin) || this->intruder) {
        this->intruder = true;
        this->soundOn();
      }
    }

    // Speaker Control
    void soundOn() {
      tone(this->speakerPin, 1000); // Send 1KHz sound signal...
      delay(1000);        // ...for 1 sec
      noTone(this->speakerPin);     // Stop sound...
      delay(1000);        // ...for 1sec
    }
    void soundOff() {
      noTone(this->speakerPin);
    }

    // Door Control
    void closeDoor() {
      digitalWrite(this->doorPin, HIGH);
    }
    void openDoor() {
      digitalWrite(this->doorPin, LOW);
    }
};
