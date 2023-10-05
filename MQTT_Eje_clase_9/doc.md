# Arduino-Mqtt-Nodejs
## Fuente de consulta
- https://github.com/EfrainRodriguez/MQTT-with-Node-js-Arduino-and-MySQL
- https://www.luisllamas.es/protocolos-de-comunicacion-para-iot/
- https://gist.github.com/BrainCrumbz/f71a4867a4d2c0e30ee5
- https://descubrearduino.com/mqtt-que-es-como-se-puede-usar-y-como-funciona/
- https://www.luisllamas.es/principales-broker-mqtt-open-source-para-proyectos-iot/
- https://community.appinventor.mit.edu/t/how-do-i-integrate-node-js-api-into-the-background-of-an-app/47289
## Dependencias
- npm install mqtt 
- ***Mosca***: () servidor que funciona como broker mqtt para nuestra app.
    - npm install jsonschema@1.2.6 mosca
- npm install serialport
- npm install mysql
- npm install express
## EndPoint
* http://localhost:5000/api/pub_Btn_temp
* Body:


```json
{
    "Data2:" : 200
}
```

## Info
### Brokers
- **Mosquitto**. Cómo decíamos es el broker MQTT más conocido en el sector doméstico/#maker. Es un broker Open Source desarrollado por la fundación Eclipse y distribuido bajo licencia EPL/EDL. Está programado en C, y es multiplataforma. Es un broker liviano y adecuado para uso en servidores de baja potencia.
- **Mosca**. Es un broker MQTT Open Source para Node.js, desarrollado en Javascript por Matteo Collina. Puede ser empleado como aplicación independiente o embebido en cualquier proyecto de Node.js
- **Aedes**. Del mismo autor que Mosca, Aedes es un servidor broker MQTT Open Source para Node.js diseñado para ser un reemplazo de Mosca.
- **HBMQTT**. Es un broket MQTT Open Source escrito en Python que funciona sobre asyncio, introducido en Python 3.4.
- **EMQTT**. Erlan MQTT broker es Open Source, desarrollado en Erlang/OTP, está diseñado para aplicaciones con grandes exigencias en escalabilidad.
- **RabbitMQ**. Es un popular broker de mensajería AMQP Open Source, que también permite emplear el protocolo MQTT a través de un Adaptador.
- **HiveMQ CE**. La versión Community del popular HiveMQ es un broker Open Source basado en Java.
- **ActiveMQ.** Es un broker de mensajería JMS (Java Message Script) Open Source desarrollado por Apache, que también admite protocolo MQTT.
- **Moquette.** Un broker MQTT Open Source escrito en Java desarrollado por Eclipse, que destaca por su livieza.
- **MQTTnet.** Un broker Open Source para .NET.
