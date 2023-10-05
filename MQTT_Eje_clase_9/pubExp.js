const express = require("express");
const app = express();
const port = 5000;
const mqtt = require("mqtt");

// Crear un cliente MQTT para conectarse al broker MQTT
const pub = mqtt.connect("mqtt://localhost:9000"); // Reemplaza por la dirección de tu broker MQTT

pub.on("connect", () => {
  console.log("Conectado al servidor MQTT");
  // Suscríbete a los temas MQTT necesarios aquí, si es necesario
  //   pub.subscribe("pub");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/pub_Btn_temp", (req, res) => {
  console.log("------------req: ", req.body);

  // Publica un mensaje en un tema MQTT
  const topic = "pub"; // Reemplaza por el tema MQTT que desees
  const message = "1.(Mensaje desde Express msj<" + req.body + "> )"; // Reemplaza por el mensaje que desees enviar

  pub.publish(topic, message, (error) => {
    if (!error) {
      console.log(`2.((Mensaje publicado en ${topic}: ${message}))`);
      res.send({ message: "3.Mensaje publicado en MQTT" });
    } else {
      console.error("4. Error al publicar el mensaje en MQTT:", error);
      res
        .status(500)
        .send({ error: "5. Error al publicar el mensaje en MQTT" });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
