const mosca = require("mosca");
const port = 9000;

const broker = new mosca.Server({
  port: port,
});

broker.on("ready", () => {
  console.log("<Server mosca On ,port:" + port + ">");
});

broker.on("clientConnected", (client) => {
  console.log("(MQTT cliente conectado, id:", client.id + ")");
});

broker.on("clientDisconnected", function onClientDisconnected(client) {
  console.log("(MQTT cliente desconectado, id:", client.id + ")");
});
