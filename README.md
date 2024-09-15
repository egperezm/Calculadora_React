# Calculadora_React


## Implemantación  de las operaciones de las operaciones básicas (Suma, Resta, Multiplicación, División).

- Para el obejetivo hice uso de las tecnologías modernas solicitadas para construir el Backend mediante Java 22 y spring framework (Spring initializr) https://start.spring.io. 
- Seleccionando las siguientes opciones como se muestra en la siguiente imagen del lado izquierdo y las dependencias utilizadas fueron Spring web, Spring Boot DevTools. 
- Adicional preveendo que se utilice una base de datos para almancenamiento de datos, utilicé spring Data JPA. (Esta dependencia queda a criterio del usuario)
- 
## 1)	 Paso posterior seleccionar el botón derecho GENERATE

-El archivo se generará en su carpeta de descargas (o la que tenga seleccionada por default.).
-Extraer el archivo con 7-zip 24.08 o Winrar7.0. 
--Luego abrir Visual Studio Code 1.93.
-Luego abrir la carpeta que ha descomprimido desde Visual studio code 1.93.
- Al abrir la carpeta debe crear tres carpetas desde la raiz main , controller, service, model así como se muestra en la siguiente imagen.
- Dentro de la carpeta controller debe crear un archivo .java con el nombre CalculatorController.java
- Dentro de la capeta service debe crear un archivo .java con el nombre Calculator.Service.java

  ## Descripción del archivo, la clase, el servicio y el controlador. (Backend)
  
- El archivo principal que inicia la aplicación es la calculator.Application.java, el código que integra este archivo puede visualizarlo en GitHub.
  
  ## Controller/Calculator.Controller.java
  
- Este controlador expone la API REST para la calculadora

## Model/Operation.java

- Esta clase representa una operación aritmética realizada por el usuario

## Service/Calculator Service.java

- contiene la lógica para realizar las operaciones aritméticas y gestionar el historial

## Ejecutar el Backend 

- presionando las teclas CMD+J, En el caso de MacOS o Control+J en el caso de un ambiente windows

## En el terminal escribir mvn spring-boot:run

- Deberá visualizar la ejecución del Backend 

## Apertura del local host

- Abrirlo de forma manual http://localhost:8080/api/calculator/calculate o puede utilizar Postman para enviar la solicitud y seleccionar , auque a decir verdad no es necesario abrir el navegador para que el backed tenga comunicación con el Frontend lo importante es que los comandos para ejecutar el backend estén bien escritos para que se habilite el puerto. Apertura del local host


  ## Desarrollo del Frontend
  
  - Para el desarrollo del Frontend es necesario tener instalado node.js y npm debe asegurarse de tenerlo instalado para poder seguir
- Debe crear una carpeta junto o al Backend para tener todo ordenado y colocarle el nombre que prefiera en mi caso calculator-frontend.
- Abrir la carpeta desde el Visual Studio Code
- Abrir el terminal como lo indicamos anterior.

  ## Creación del Frontend
  
- Debe ejecutar el siguiente comando npx create-react (“el nombre que le colocaron”) en mi caso es npx create-react calculator-frontend
- Seguido deben ingresar a la carpeta con el siguiente comando cd calculator-frontedn y deben mostrar la ejecución
- Recuerde instalar Axios para manejar las solicitudes HTTP:
Npm install axios
## Creación de los archivos .js

- Esto es para agregar los archivos necesarios para el frontend
- Calculator.js
Manejará la lógica de la calculadora y las solicitudes HTTP al Backend
## Display.js

- Mostrará los resultados de las operaciones y las entradas del usuario
## History.js
- Muestra el historial de operaciones realizadas por el usuario
- 
## Keypad.js
Este componente es lo que renderizará los botones de la calculadora

## App.js
- Este es el componente principal de la aplicación, integra todos los componentes
  
## App.css
- Este archivo contiene un estilo básico para la aplicación

## Ejecución del Frontend
- Debe abrir el terminal con control+j
- Escribir los  siguientes comando para que el frontend se ejecute y se abra de forma automática. 
- Comando(1) cd calculator-frontedn
- Comando (2) npm start
- 
  ## Despliegue del Proyecto localmente
- Mediante el navegador de forma manual http://localhost:3000, pero lo abre de forma automática al ingresar el comando dos (2), como se explica anterior mente.
- Mediante un complemento por parte de Create React App Sample


  









  




