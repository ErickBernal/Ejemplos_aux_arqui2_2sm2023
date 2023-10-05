# Conferencia Grafana



## Crear BackEnd (simulando un envio de datos desde sensores a MySql)

- Ingresar a directorio  [Back](./Back/)
  - [Index.js](./Back/index.js)
    - Menu para interactuar con la app
    - Archivo inicial [Index.js](./Back/index.js), muestra un menu en consola para ejectuar la carga de datos "Ejecutar: ```node index.js```".
  - ![img](./img/7.JPG)
    - 1. carga datos en forma de una linea recta creciente, en las tablas ```SensorA``` y ```SensorB```
      - esta opcion sirve para mostrar como crear una frafica en grafana
    - 2. Carga datos de manera aleatoria para evidenciar la diferencia entre la primer y la segunda carga de datos. 
    - 3. limpiar el contenido de las tablas de datos en ```MySql```
---
---

## Instalacion en Windows.

- Descarga (Recomendacion descargar "```Standlone Windows Binaries```"):
    -  ![img](./img/1.JPG)

    - https://grafana.com/grafana/download?platform=windows

- Descomprimir el archivo descargado
  - ![img](./img/2.JPG)
- Para iniciar, ingresar a la ruta:
  - ```./grafana-10.1.4/bin```
- Al ingresar a la ruta se econtraran los siguientes archivos
  - ![img](./img/3.JPG)
- Ejecutar el archivo "```grafana-server.exe```", desde linea de comandos.
  - "```./grafana-server.exe```"
  - Nota: seleccionar ```aceptar``` en la ventana emergente.
- Comprobar funcionamiento:
  - Abrir un navegador e ingresar a:
    - http://localhost:3000/login
    - ![img](./img/4.JPG)
- Para ingresar al sistema, usar las credenciales, por defecto:
    - username:
      - ```admin```
    - password:
      - ```admin``` 

- Al ingresar con credenciales por defecto, Grafana solicita realizar un cambio de contraseña
   - ![img](./img/5.JPG)

- Ingreso exitoso:
  - ![img](./img/6.JPG)
  


## Conneccion de Grafana con MySql
- Ingresamos a ```Add your first data source```
  - ![i](./img/8.JPG)
- Buscamos ```MySql```
  - ![i](./img/9.JPG)
- ingresamos las credenciales de la base de datos.
  - ![i](./img/10.JPG)
- seleccionamos ```Save and Test```
  - ![i](./img/11.JPG)
- Muestra mensaje de coneccion exitosa
  - ![i](./img/12.JPG)

## Crear Dashboard

- ingresamos a ```create your first dashboard```
  - ![i](./img/13.JPG)
  - seleccionamos ```Add visualization```
  - ![i](./img/14.JPG)
  - seleccionamos ```MySQL-1```
  - ![i](./img/15.JPG)
  - Aparece
  - ![i](./img/16.JPG)
