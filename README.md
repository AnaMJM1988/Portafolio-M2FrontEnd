# Proyecto de portafolio  - Módulo 2
Desarrollar la primera versión (MVP) del frontend de una aplicación de clima, aplicando HTML5 
semántico, Bootstrap para estilos y diseño responsivo, y JavaScript básico para la interacción. El 
trabajo se versiona en Git/GitHub e incluye un README descriptivo.

---
## Aplicación del tiempo
Esta aplicación mostrará 10 localidades con su tiempo actual.
Al hacer click en la localidad te redigirá a otra vista con el tiempo actual y de toda la semana

## Requisitos funcionales
-Ejemplo de uso de JS: Navegación desde card

var carLinks = documents.querySelectorAll('.card-link');

```js
cardLinks.forEach(function(link){
    link.addEvenListener('click', function(){
        window.location.href='./detalle.html';
    });
});

```
-Ejemplo de uso de JS 2: Modificando clases dependiendo de la ubicación: 

```
