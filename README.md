# Practica00-Consumo-de-APIs-en-la-nube

## 1.   Identificar gráficamente la arquitectura y el patrón de diseño de la aplicación a desarrollar.”
![1](/imagenesReadme/0.jpg?raw=true "Title")

## 2.   Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).”
## 3.	Crear un repositorio en GitHub con el nombre “Practica00 – Consumo de APIs en la nube”
## 4.	Desarrollar una aplicación con HTML + CSS + Javascript + Web Services para buscar información y visualizar toda la información disponible a través de la API.
### HTML En la sección de html podemos observar que tenemos la estructura de la página, asi como las conexiones hacia los estilos y la funcionalidad con JavaScript, así mismo aprecias los diferentes div que sirven para visualizar el contenido, como también la creación de la tabla.

![2](/recursos/1.png?raw=true "Title")

### CSS Dentro del archivo css tenemos todo sobre el estilo que tiene la página, podemos observar que tiene una imagen de fondo que esta definida a todo el body de la estructura, así mismo los estilos para la cabecera, las secciones, el buscador, los distintos botones y el diseño de la tabla. 

![2](/recursos/2.png?raw=true "Title")



### Observamos lo implementado hacia los botones de actualizar como a la etiqueta h1.
![2](/recursos/3.png?raw=true "Title")


### Podemos ver que aplicamos un borde a los distintas etiquetas, así mismo tenemos los distintos backgroud aplicado a la tabla como tal.
![2](/recursos/4.png?raw=true "Title")






### JavaScript Tenemos las variables inicializadas para su posterior uso dentro de las funciones creadas.

![2](/recursos/5.png?raw=true "Title")






### La función de busquedaAPI nos permite hacer la búsqueda de la api, recibiendo como parámetro el nombre de una comida en específico, y con esto realizar la petición a la API, lo cual lo guardamos en la variable data para posteriormente mandar a construir la tabla.
![2](/recursos/6.png?raw=true "Title")






### Dentro de esta función tenemos la construcción de la tabla, para ello tenemos un bucle for con el cul recorremos el objeto, y que a través de este recorrido podemos ingresar a las diferentes variables que contiene el objeto llamado.
![2](/recursos/7.png?raw=true "Title")




### En esta función tenemos la paginación, tenemos como parámetro el query que es el objeto que devuelve el api, page que es número de pagina y rows que nos dice el numero de filas.
![2](/recursos/8.png?raw=true "Title")




### Y por último tenemos la última función, que realiza el posicionamiento de los botones debajo de la tabla. Realiza funciones de máximo para la izquierda y derecha para tomar los limites de las peticiones recibidas por parte del api.

![2](/recursos/9.png?raw=true "Title")
