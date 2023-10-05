const mqtt = require("mqtt");
//------------------------  arduino ----------------------
const { SerialPort, ReadlineParser } = require("serialport");
const port = new SerialPort({
  path: "COM2",
  baudRate: 9600,
});
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" }));
//------------------------- pub ---------------------
const pub = mqtt.connect("mqtt://localhost:9000");

pub.on("connect", () => {
  parser.on("data", (arduino_data) => {
    arduino_data = arduino_data.toString();
    arduino_data = arduino_data.split(" ");
    topic = arduino_data[0];
    dataSend = arduino_data[1];
    pub.publish(topic, dataSend);
  });
});

port.on("open", () => {
  console.log("Conexión serial abierta en COM2");
});

port.on("error", (err) => {
  console.error("Error en la conexión serial:", err);
});

//---------------------------------sub----------------------------------------------------

const TopicSub = "pub";

const sub = mqtt.connect("mqtt://localhost:9000");

sub.on("connect", () => {
  sub.subscribe(TopicSub);
});

sub.on("message", (topic, message) => {
  console.log("SUB:: topicSub: ", TopicSub, "  msj: ", message.toString());
});
