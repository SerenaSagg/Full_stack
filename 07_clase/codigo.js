var titulo=document.getElementById("titulo");
titulo.innerHTML="Hola Mundo desde JavaScript"; // Cambia el contenido del elemento con id "titulo"
titulo.style.color="red"; // Cambia el color del texto a rojo
titulo.style.fontSize="50px"; // Cambia el tamaño de la fuente a 50px
titulo.style.fontFamily="Arial"; // Cambia la fuente a Arial
titulo.style.textAlign="center"; // Centra el texto
titulo.style.textDecoration="underline"; // Subraya el texto
titulo.style.backgroundColor="yellow"; // Cambia el color de fondo a amarillo
titulo.style.padding="10px"; // Añade un padding de 10px alrededor del texto
 var newElement=document.createElement("h2"); // Crea un nuevo elemento h2
newElement.innerHTML="Inserte un elemento desde JS"; // Cambia el contenido del nuevo elemento h2
var body=document.getElementsByTagName("body")[0]; // Obtiene el primer elemento body
body.appendChild(newElement); // Añade el nuevo elemento al final del body

const clickEs=()=>alert("Hola Mundo"); // Define una función que muestra un alert
const clickEn=()=>alert("Hello World"); // Define otra función que muestra un alert en inglés

function AsignarIdioma(){
    const radioEs= document.getElementById("es"); // Obtiene el elemento con id "radioEs"
    const radioEn=document.getElementById("en"); // Obtiene el elemento con id "radioEn"
    const boton=document.getElementById("boton"); // Obtiene el elemento con id "boton"

    if(radioEs.checked) // Si el radio button de español está seleccionado
        boton.onclick=clickEs; // Asigna la función clickEs al evento onclick del botón     

    else if(radioEn.checked)// Si el radio button de inglés está seleccionado
        boton.onclick=clickEn; // Asigna la función clickEn al evento onclick del botón
}

const nombreActual = document.getElementById('nombreActual');
const agregarNombre = document.getElementById('agregarNombre');
const mostrador = document.getElementById('mostrador');

agregarNombre.addEventListener('click', function () {
    mostrador.addEventListener('click', function () {
    const val = nombreActual.value;
    alert('Hola ' + val);
    });
});