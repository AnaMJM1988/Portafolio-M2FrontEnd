//Manejo del DOM con JS
var links = document.querySelectorAll('.nav-link');//De esta manera se seleccionan todos los elementos que tengan la clase nav-link
console.log(links);
//Por cada link que haya dentro del links se va a pasar una función
links.forEach(function(link){
    if(link.href===window.location.href){ //Se hará una evaluación: si el destindo del link que es href, el que estamos seleccionando  es exactamente igual al link en el que estamos en la página, osea el de este enlace es igual al que aparece en "inicio", vamos ha hacer algo
//Al link soblre el que estamos trabajando se le va a agregar una clase de bootstrap que se llama 'active'
      link.classList.add('active');
    }else{
       link.classList.remove('active');
    }
        
    })
 //Manejo de Evento   
var carLinks = documents.querySelectorAll('.card-link');
//console.log(cardLinks);
cardLinks.forEach(function(link){
    link.addEvenListener('click', function(){
        window.location.href='./detalle.html';
    });
});