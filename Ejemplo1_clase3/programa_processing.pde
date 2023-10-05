//Processing
import processing.serial.*;
Serial puerto; //variable para utilizar como puerto serie
void setup(){
  size(300,300);
  puerto = new Serial(this,"COM2",9600);
}

void draw(){
  char dato = puerto.readChar();
  if(dato=='1'){
    fill(#00FF00);
    ellipse(150,150,150,150);
    fill(0);
    text("Boton Encendido",115,150);
  }else if(dato=='0'){
    fill(#FF0000);
    ellipse(150,150,150,150);
    fill(0);
    text("Boton Apagado",115,150);
  }
}
