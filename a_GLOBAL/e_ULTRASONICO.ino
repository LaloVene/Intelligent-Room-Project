void ultrasonico(){
  //Sensor ultrasónico
   long t; //timepo que demora en llegar el eco
   long d; //distancia en centimetros
  
   digitalWrite(Trigger, HIGH);
   delayMicroseconds(10);          //Enviamos un pulso de 10us
   digitalWrite(Trigger, LOW);

   t = pulseIn(Echo, HIGH); //obtenemos el ancho del pulso
   d = t/59;             //escalamos el tiempo a una distancia en cm

   if (d <= 30){
    digitalWrite(ledUS, HIGH);
    delay(2000);
   }else if (d > 30){
    digitalWrite(ledUS, LOW);
   }

   pastD = d;
   Serial.print("Distancia: ");
   Serial.print(d);      //Enviamos serialmente el valor de la distancia
   Serial.print("cm");
   Serial.println();
   delay(1000);          //Hacemos una pausa de 100ms
}
